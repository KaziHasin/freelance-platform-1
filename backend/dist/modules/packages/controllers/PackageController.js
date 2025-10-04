"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePackage = exports.updatePackage = exports.getPackage = exports.listPackages = exports.createPackage = void 0;
const asyncHandler_1 = require("../../../common/utils/asyncHandler");
const validate_1 = require("../../../common/middleware/validate");
const PackageDto_1 = require("../dtos/PackageDto");
const PackageService_1 = require("../services/PackageService");
const service = new PackageService_1.PackageService();
exports.createPackage = [
    (0, validate_1.validate)(PackageDto_1.CreatePackageDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const created = await service.create(req.body);
        res.status(201).json(created);
    }),
];
exports.listPackages = [
    (0, validate_1.validate)(PackageDto_1.ListQueryDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { page, limit, q } = req.query;
        const result = await service.list(q, Number(page), Number(limit));
        res.json(result);
    }),
];
exports.getPackage = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const item = await service.get(req.params.id);
    if (!item)
        return res.status(404).json({ error: 'NotFound', message: 'Package not found' });
    res.json(item);
});
exports.updatePackage = [
    (0, validate_1.validate)(PackageDto_1.UpdatePackageDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const updated = await service.update(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ error: 'NotFound', message: 'Package not found' });
        res.json(updated);
    }),
];
exports.deletePackage = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const deleted = await service.remove(req.params.id);
    if (!deleted)
        return res.status(404).json({ error: 'NotFound', message: 'Package not found' });
    res.status(204).send();
});
//# sourceMappingURL=PackageController.js.map