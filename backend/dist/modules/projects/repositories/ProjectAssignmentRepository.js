"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAssignmentRepository = void 0;
const ProjectAssignment_1 = __importDefault(require("../models/ProjectAssignment"));
class ProjectAssignmentRepository {
    async create(data) {
        return ProjectAssignment_1.default.create(data);
    }
    async findByProjectId(projectId) {
        return ProjectAssignment_1.default.find({ projectId });
    }
    async updateStatus(id, status) {
        return ProjectAssignment_1.default.findByIdAndUpdate(id, { status }, { new: true });
    }
}
exports.ProjectAssignmentRepository = ProjectAssignmentRepository;
//# sourceMappingURL=ProjectAssignmentRepository.js.map