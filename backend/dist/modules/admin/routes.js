"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AdminController_1 = require("./controllers/AdminController");
const authMiddleware_1 = require("@/common/middleware/authMiddleware");
const authorizeMiddleware_1 = require("@/common/middleware/authorizeMiddleware");
const enums_1 = require("@/common/types/enums");
const router = (0, express_1.Router)();
router.get("/dashboard", authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), AdminController_1.dashboard);
exports.default = router;
//# sourceMappingURL=routes.js.map