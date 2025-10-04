"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubscription = exports.updateSubscription = exports.getSubscription = exports.listClientSubscriptions = exports.listSubscriptions = exports.createSubscription = void 0;
const asyncHandler_1 = require("../../../common/utils/asyncHandler");
const validate_1 = require("../../../common/middleware/validate");
const SubscriptionService_1 = require("../services/SubscriptionService");
const SubscriptionDto_1 = require("../dtos/SubscriptionDto");
const service = new SubscriptionService_1.SubscriptionService();
exports.createSubscription = [
    (0, validate_1.validate)(SubscriptionDto_1.CreateSubscriptionDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const created = await service.create(req.body);
        res.status(201).json(created);
    }),
];
exports.listSubscriptions = [
    (0, validate_1.validate)(SubscriptionDto_1.ListQueryDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { page, limit, q } = req.query;
        const result = await service.list(q, Number(page), Number(limit));
        res.json(result);
    }),
];
exports.listClientSubscriptions = [
    (0, validate_1.validate)(SubscriptionDto_1.ListQueryDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const clientId = req.user?.id;
        const { page, limit, status } = req.query;
        if (!clientId)
            return res.status(400).json({ error: 'Client ID is required' });
        const result = await service.listByClient(clientId, status, Number(page), Number(limit));
        res.json(result);
    }),
];
exports.getSubscription = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const item = await service.get(req.params.id);
    if (!item)
        return res.status(404).json({ error: 'Not Found' });
    res.json(item);
});
exports.updateSubscription = [
    (0, validate_1.validate)(SubscriptionDto_1.UpdateSubscriptionDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const updated = await service.update(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ error: 'Not Found' });
        res.json(updated);
    }),
];
exports.deleteSubscription = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const deleted = await service.remove(req.params.id);
    if (!deleted)
        return res.status(404).json({ error: 'Not Found' });
    res.status(204).send();
});
//# sourceMappingURL=SubscriptionController.js.map