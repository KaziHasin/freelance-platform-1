"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("./controllers/UserController");
const authController_1 = require("./controllers/authController");
const authMiddleware_1 = require("@/common/middleware/authMiddleware");
const authorizeMiddleware_1 = require("@/common/middleware/authorizeMiddleware");
const enums_1 = require("@/common/types/enums");
const router = (0, express_1.Router)();
router.post('/users', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), UserController_1.createUser);
router.get('/users', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), UserController_1.listUsers);
router.get('/users/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), UserController_1.getUser);
router.put('/users/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), UserController_1.updateUser);
router.delete('/users/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), UserController_1.deleteUser);
router.patch('/users/:id/status', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), UserController_1.updateStatus);
// auth routes 
router.post("/auth/email/signup", authController_1.emailSignup);
router.post("/auth/email/login", authController_1.emailLogin);
router.get("/auth/me", authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN, enums_1.Role.CLIENT, enums_1.Role.DEVELOPER), authController_1.authMe);
router.post("/auth/phone/request-otp", authController_1.requestOtp);
router.post("/auth/phone/verify-otp", authController_1.verifyPhoneOtp);
router.post("/auth/google", authController_1.googleAuth);
router.post('/auth/refresh', authController_1.refreshToken);
router.post('/auth/logout', authMiddleware_1.authMiddleware, authController_1.logout);
exports.default = router;
//# sourceMappingURL=routes.js.map