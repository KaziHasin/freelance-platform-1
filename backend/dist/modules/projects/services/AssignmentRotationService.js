"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentRotationService = void 0;
const enums_1 = require("@/common/types/enums");
const Assignment_1 = require("../models/Assignment");
const SkillMatchingService_1 = require("./SkillMatchingService");
const Developer_1 = require("@/modules/developers/models/Developer");
const ProjectRepository_1 = require("../repositories/ProjectRepository");
class AssignmentRotationService {
    constructor(skillMatching = new SkillMatchingService_1.SkillMatchingService(), projectRepo = new ProjectRepository_1.ProjectRepository()) {
        this.skillMatching = skillMatching;
        this.projectRepo = projectRepo;
        this.ROTATION_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
    }
    // Assign next candidate for a project, skipping tried developers
    async assignOrRotate(projectId, requiredSkillIds, preferredLevel) {
        const last = await Assignment_1.Assignment.findOne({ projectId }).sort({ createdAt: -1 }).lean();
        const tried = last ? [last.developerId.toString(), ...(last.triedDeveloperIds?.map(id => id.toString()) || [])] : [];
        const candidates = await this.skillMatching.getOrderedCandidates(requiredSkillIds, preferredLevel, tried);
        if (!candidates.length)
            return null;
        const dev = candidates[0];
        const assignment = await Assignment_1.Assignment.create({
            projectId,
            developerId: dev._id,
            status: enums_1.AssignmentStatus.PENDING,
            assignedAt: new Date(),
            triedDeveloperIds: tried,
        });
        // Update developer load metrics
        await Developer_1.Developer.updateOne({ _id: dev._id }, {
            $inc: { assignedCount: 1 },
            $set: { lastAssignedAt: new Date() },
        });
        return assignment;
    }
    async accept(projectId, developerId) {
        const doc = await Assignment_1.Assignment.findOneAndUpdate({ projectId, developerId, status: enums_1.AssignmentStatus.PENDING }, { $set: { status: enums_1.AssignmentStatus.ACCEPTED, respondedAt: new Date() } }, { new: true });
        return doc;
    }
    async reject(projectId, developerId) {
        const doc = await Assignment_1.Assignment.findOneAndUpdate({ projectId, developerId, status: enums_1.AssignmentStatus.PENDING }, { $set: { status: enums_1.AssignmentStatus.REJECTED, respondedAt: new Date() } }, { new: true });
        await this.assignOrRotate(projectId.toString(), await this.getProjectSkillIds(projectId.toString()), await this.getProjectPreferredLevel(projectId.toString()));
        return doc;
    }
    // Called by cron: find PENDING >15 min old and rotate to next candidate
    async cronRotateExpired() {
        const threshold = new Date(Date.now() - this.ROTATION_WINDOW_MS);
        const pendings = await Assignment_1.Assignment.find({ status: enums_1.AssignmentStatus.PENDING, assignedAt: { $lte: threshold } }).lean();
        for (const pending of pendings) {
            // mark expired and try next
            await Assignment_1.Assignment.updateOne({ _id: pending._id }, { $set: { status: enums_1.AssignmentStatus.EXPIRED, respondedAt: new Date() } });
            await this.assignOrRotate(pending.projectId.toString(), await this.getProjectSkillIds(pending.projectId.toString()), await this.getProjectPreferredLevel(pending.projectId.toString()));
        }
    }
    async getProjectSkillIds(projectId) {
        const project = await this.projectRepo.findById(projectId).lean();
        return (project?.requiredSkillIds || []).map(x => x.toString());
    }
    async getProjectPreferredLevel(projectId) {
        const project = await this.projectRepo.findById(projectId).lean();
        return project?.preferredLevel;
    }
}
exports.AssignmentRotationService = AssignmentRotationService;
//# sourceMappingURL=AssignmentRotationService.js.map