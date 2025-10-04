"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStatus = exports.deleteUser = exports.updateUser = exports.getUser = exports.listUsers = exports.createUser = void 0;
const asyncHandler_1 = require("../../../common/utils/asyncHandler");
const validate_1 = require("../../../common/middleware/validate");
const UserDto_1 = require("../dtos/UserDto");
const UserService_1 = require("../services/UserService");
const service = new UserService_1.UserService();
exports.createUser = [
    (0, validate_1.validate)(UserDto_1.CreateUserDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const created = await service.create(req.body);
        res.status(201).json(created);
    }),
];
exports.listUsers = [
    (0, validate_1.validate)(UserDto_1.ListQueryDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { page, limit, search, role, status } = req.query;
        const result = await service.list(search, role, status, Number(page), Number(limit));
        res.json(result);
    }),
];
exports.getUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const item = await service.get(req.params.id);
    if (!item)
        return res.status(404).json({ error: 'Not Found' });
    res.json(item);
});
exports.updateUser = [
    (0, validate_1.validate)(UserDto_1.UpdateUserDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const updated = await service.update(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ error: 'Not Found' });
        res.json(updated);
    }),
];
exports.deleteUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const deleted = await service.remove(req.params.id);
    if (!deleted)
        return res.status(404).json({ error: 'Not Found' });
    res.status(204).send();
});
exports.updateStatus = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const updated = await service.update(req.params.id, req.body);
    if (!updated)
        return res.status(404).json({ error: 'Not Found' });
    res.json(updated);
});
//# sourceMappingURL=UserController.js.map