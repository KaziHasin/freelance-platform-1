"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const enums_1 = require("../types/enums");
const authorize = (...allowedRoles) => (req, res, next) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    // Admin can access all routes
    if (user.role === enums_1.Role.ADMIN) {
        return next();
    }
    // Check if user's role is in allowed roles
    if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: "Forbidden: Insufficient role" });
    }
    next();
};
exports.authorize = authorize;
//# sourceMappingURL=authorizeMiddleware.js.map