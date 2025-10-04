"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.getProject = exports.listProjects = exports.createProject = void 0;
const asyncHandler_1 = require("../../../common/utils/asyncHandler");
const validate_1 = require("../../../common/middleware/validate");
const ProjectDto_1 = require("../dtos/ProjectDto");
const ProjectService_1 = require("../services/ProjectService");
const service = new ProjectService_1.ProjectService();
exports.createProject = [
    (0, validate_1.validate)(ProjectDto_1.CreateProjectDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const created = await service.createProject(req.body);
        res.status(201).json(created);
    }),
];
exports.listProjects = [
    (0, validate_1.validate)(ProjectDto_1.ListProjectQueryDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { page, limit, q } = req.query;
        const result = await service.listProjects(q, Number(page), Number(limit));
        res.json(result);
    }),
];
exports.getProject = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const item = await service.getProject(req.params.id);
    if (!item)
        return res.status(404).json({ error: "Not Found" });
    res.json(item);
});
exports.updateProject = [
    (0, validate_1.validate)(ProjectDto_1.UpdateProjectDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const updated = await service.updateProject(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ error: "Not Found" });
        res.json(updated);
    }),
];
exports.deleteProject = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const deleted = await service.deleteProject(req.params.id);
    if (!deleted)
        return res.status(404).json({ error: "Not Found" });
    res.status(204).send();
});
//# sourceMappingURL=ProjectController.js.map