"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.getClient = exports.listClients = exports.createClient = void 0;
const asyncHandler_1 = require("../../../common/utils/asyncHandler");
const validate_1 = require("../../../common/middleware/validate");
const ClientDto_1 = require("../dtos/ClientDto");
const ClientService_1 = require("../services/ClientService");
const service = new ClientService_1.ClientService();
exports.createClient = [
    (0, validate_1.validate)(ClientDto_1.CreateClientDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const created = await service.create(req.body);
        res.status(201).json(created);
    }),
];
exports.listClients = [
    (0, validate_1.validate)(ClientDto_1.ListQueryDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { page, limit, search, status } = req.query;
        const result = await service.list(search, status, Number(page), Number(limit));
        res.json(result);
    }),
];
exports.getClient = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const item = await service.get(req.params.id);
    if (!item)
        return res.status(404).json({ error: 'Not Found' });
    res.json(item);
});
exports.updateClient = [
    (0, validate_1.validate)(ClientDto_1.UpdateClientDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const updated = await service.update(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ error: 'Not Found' });
        res.json(updated);
    }),
];
exports.deleteClient = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const deleted = await service.remove(req.params.id);
    if (!deleted)
        return res.status(404).json({ error: 'Not Found' });
    res.status(204).send();
});
//# sourceMappingURL=ClientController.js.map