"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectController_1 = require("./controllers/ProjectController");
const SkillController_1 = require("./controllers/SkillController");
const authMiddleware_1 = require("@/common/middleware/authMiddleware");
const authorizeMiddleware_1 = require("@/common/middleware/authorizeMiddleware");
const enums_1 = require("@/common/types/enums");
const AssignmentRotationController_1 = require("./controllers/AssignmentRotationController");
const router = (0, express_1.Router)();
// projects routes
router.post("/projects", authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.CLIENT), ProjectController_1.createProject);
router.get("/projects", authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.CLIENT), ProjectController_1.listProjects);
router.get("/projects/:id", ProjectController_1.getProject);
router.put("/projects/:id", authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.CLIENT), ProjectController_1.updateProject);
router.delete("/projects/:id", authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), ProjectController_1.deleteProject);
// Skills routes
router.post('/skills/resolve', authMiddleware_1.authMiddleware, SkillController_1.resolve);
router.delete('/skills/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), SkillController_1.deleteSkill);
router.get('/skills', authMiddleware_1.authMiddleware, SkillController_1.listSkills);
// Assignment routes
router.get('/assignments/approve/:projectId/:developerId', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.DEVELOPER), AssignmentRotationController_1.acceptAssignment);
router.get('/assignments/reject/:projectId/:developerId', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.DEVELOPER), AssignmentRotationController_1.rejectAssignment);
exports.default = router;
//# sourceMappingURL=routes.js.map