"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const AuthService_1 = require("@/modules/users/services/AuthService");
const authService = new AuthService_1.AuthService();
const authMiddleware = (req, res, next) => {
    const token = req.cookies?.accessToken;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    const decoded = authService.verifyAccessToken(token);
    if (!decoded) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
    req.user = decoded;
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map