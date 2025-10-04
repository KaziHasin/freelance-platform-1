"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientController_1 = require("../clients/controllers/ClientController");
const enums_1 = require("@/common/types/enums");
const authorizeMiddleware_1 = require("@/common/middleware/authorizeMiddleware");
const authMiddleware_1 = require("@/common/middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post('/clients', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), ClientController_1.createClient);
router.get('/clients', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), ClientController_1.listClients);
router.get('/clients/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.CLIENT), ClientController_1.getClient);
router.put('/clients/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), ClientController_1.updateClient);
router.delete('/clients/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), ClientController_1.deleteClient);
exports.default = router;
//# sourceMappingURL=routes.js.map