"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DeveloperController_1 = require("../developers/controllers/DeveloperController");
const authMiddleware_1 = require("@/common/middleware/authMiddleware");
const authorizeMiddleware_1 = require("@/common/middleware/authorizeMiddleware");
const enums_1 = require("@/common/types/enums");
const router = (0, express_1.Router)();
router.post('/developers', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), DeveloperController_1.createDeveloper);
router.get('/developers', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), DeveloperController_1.listDevelopers);
router.get('/developers/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.DEVELOPER), DeveloperController_1.getDeveloper);
router.put('/developers/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.DEVELOPER), DeveloperController_1.updateDeveloper);
router.patch('/developers/:id/review', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), DeveloperController_1.reviewStatus);
router.delete('/developers/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), DeveloperController_1.deleteDeveloper);
exports.default = router;
//# sourceMappingURL=routes.js.map