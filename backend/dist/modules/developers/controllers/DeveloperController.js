"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewStatus = exports.deleteDeveloper = exports.updateDeveloper = exports.getDeveloper = exports.listDevelopers = exports.createDeveloper = void 0;
const asyncHandler_1 = require("../../../common/utils/asyncHandler");
const validate_1 = require("../../../common/middleware/validate");
const DeveloperDto_1 = require("../dtos/DeveloperDto");
const DeveloperService_1 = require("../services/DeveloperService");
const mongoose_1 = require("mongoose");
const UserDto_1 = require("@/modules/users/dtos/UserDto");
const UserService_1 = require("@/modules/users/services/UserService");
const upload_1 = require("@/common/utils/upload");
const service = new DeveloperService_1.DeveloperService();
const userService = new UserService_1.UserService();
exports.createDeveloper = [
    (0, validate_1.validate)(DeveloperDto_1.CreateDeveloperDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const created = await service.create(req.body);
        res.status(201).json(created);
    }),
];
exports.listDevelopers = [
    (0, validate_1.validate)(DeveloperDto_1.ListQueryDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { page, limit, search, status } = req.query;
        const result = await service.list(search, status, Number(page), Number(limit));
        res.json(result);
    }),
];
exports.getDeveloper = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const item = await service.get(req.params.id);
    if (!item)
        return res.status(404).json({ error: 'Not Found' });
    res.json(item);
});
exports.updateDeveloper = [
    (0, validate_1.validate)(DeveloperDto_1.UpdateDeveloperDto),
    (0, validate_1.validate)(UserDto_1.UpdateUserDto),
    upload_1.upload.fields([
        { name: "docFile", maxCount: 1 },
        { name: "idType", maxCount: 1 }
    ]),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const { id } = req.params;
        await userService.update(req.user.id, req.body);
        const files = req.files;
        const docFile = files?.docFile?.[0];
        const idFile = files?.idType?.[0];
        const updated = await service.update(id, req.body, { docFile, idFile });
        res.json(updated);
    }),
];
exports.deleteDeveloper = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const deleted = await service.remove(req.params.id);
    if (!deleted)
        return res.status(404).json({ error: 'Not Found' });
    res.status(204).send();
});
exports.reviewStatus = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const adminId = new mongoose_1.Types.ObjectId(req.user.id);
    const updated = await service.updateVerificationStatus(req.params.id, req.body, adminId);
    if (!updated)
        return res.status(404).json({ error: 'Not Found' });
    res.json(updated);
});
//# sourceMappingURL=DeveloperController.js.map