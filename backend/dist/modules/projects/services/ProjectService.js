"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const ProjectRepository_1 = require("../repositories/ProjectRepository");
const AssignmentRotationService_1 = require("./AssignmentRotationService");
const SkillService_1 = require("./SkillService");
const SubscriptionRepository_1 = require("@/modules/subscriptions/repositories/SubscriptionRepository");
class ProjectService {
    constructor(projectRepo = new ProjectRepository_1.ProjectRepository(), skillService = new SkillService_1.SkillService(), subscriptionRepo = new SubscriptionRepository_1.SubscriptionRepository(), assignmentRotation = new AssignmentRotationService_1.AssignmentRotationService()) {
        this.projectRepo = projectRepo;
        this.skillService = skillService;
        this.subscriptionRepo = subscriptionRepo;
        this.assignmentRotation = assignmentRotation;
    }
    async createProject(data) {
        const clientId = data.clientId;
        const subscription = await this.subscriptionRepo.getActiveSubscription(clientId);
        console.log("subscription", subscription);
        if (!subscription) {
            throw new Error("You do not have an active subscription.");
        }
        const pkg = subscription.packageId;
        if (subscription.isTrial) {
            const projectCount = await this.projectRepo.count({
                clientId,
                createdAt: {
                    $gte: subscription.startDate,
                    $lte: subscription.endDate || new Date()
                }
            });
            // if (projectCount >= 1) {
            //   throw new Error("Free trial users can only post 1 project.");
            // }
        }
        if (pkg.projectsPerMonth !== null) {
            const startOfMonth = new Date();
            startOfMonth.setDate(1);
            startOfMonth.setHours(0, 0, 0, 0);
            const projectCount = await this.projectRepo.count({
                clientId,
                createdAt: { $gte: startOfMonth }
            });
            // if (projectCount >= pkg.projectsPerMonth) {
            //   throw new Error(`Your package allows only ${pkg.projectsPerMonth} projects per month.`);
            // }
        }
        const requiredSkillIds = await this.skillService.resolveSkillIds(data.requiredSkillIds);
        const toCreate = { ...data, requiredSkillIds };
        const project = await this.projectRepo.create(toCreate);
        const assignment = await this.assignmentRotation.assignOrRotate(project._id.toString(), requiredSkillIds, data.preferredLevel);
        return { project, assignment };
    }
    async getProject(id) {
        return this.projectRepo.findById(id);
    }
    async listProjects(q, page = 1, limit = 20) {
        const filter = q
            ? {
                $or: [
                    { title: new RegExp(q, "i") },
                    { description: new RegExp(q, "i") },
                ],
            }
            : {};
        const [items, total] = await Promise.all([
            this.projectRepo.find(filter, page, limit),
            this.projectRepo.count(filter),
        ]);
        return { items, total, page, limit };
    }
    async updateProject(id, data) {
        return this.projectRepo.update(id, data);
    }
    async deleteProject(id) {
        return this.projectRepo.delete(id);
    }
}
exports.ProjectService = ProjectService;
//# sourceMappingURL=ProjectService.js.map