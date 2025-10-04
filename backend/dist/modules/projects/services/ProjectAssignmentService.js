"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAssignmentService = void 0;
const ProjectAssignmentRepository_1 = require("../repositories/ProjectAssignmentRepository");
class ProjectAssignmentService {
    constructor() {
        this.assignmentRepo = new ProjectAssignmentRepository_1.ProjectAssignmentRepository();
    }
    async assignDeveloper(data) {
        // TODO: Add rotation and assignment logic
        return this.assignmentRepo.create(data);
    }
    async getAssignmentsByProject(projectId) {
        return this.assignmentRepo.findByProjectId(projectId);
    }
    async updateAssignmentStatus(id, status) {
        return this.assignmentRepo.updateStatus(id, status);
    }
}
exports.ProjectAssignmentService = ProjectAssignmentService;
//# sourceMappingURL=ProjectAssignmentService.js.map