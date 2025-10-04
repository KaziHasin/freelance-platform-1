"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRepository = void 0;
const Project_1 = require("../models/Project");
class ProjectRepository {
    create(data) {
        return Project_1.Project.create(data);
    }
    findById(id) {
        return Project_1.Project.findById(id);
    }
    find(filter, page = 1, limit = 20) {
        return Project_1.Project.find(filter)
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });
    }
    count(filter) {
        return Project_1.Project.countDocuments(filter);
    }
    update(id, data) {
        return Project_1.Project.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return Project_1.Project.findByIdAndDelete(id);
    }
}
exports.ProjectRepository = ProjectRepository;
//# sourceMappingURL=ProjectRepository.js.map