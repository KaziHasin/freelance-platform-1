"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboard = void 0;
const asyncHandler_1 = require("../../../common/utils/asyncHandler");
const AdminService_1 = require("../services/AdminService");
const service = new AdminService_1.AdminService();
exports.dashboard = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const data = await service.getDashboard();
    res.json(data);
});
//# sourceMappingURL=AdminController.js.map