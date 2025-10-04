"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SubscriptionController_1 = require("../subscriptions/controllers/SubscriptionController");
const authMiddleware_1 = require("@/common/middleware/authMiddleware");
const authorizeMiddleware_1 = require("@/common/middleware/authorizeMiddleware");
const enums_1 = require("@/common/types/enums");
const router = (0, express_1.Router)();
router.post('/subscriptions', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.CLIENT), SubscriptionController_1.createSubscription);
router.get('/subscriptions', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), SubscriptionController_1.listSubscriptions);
router.get("/subscriptions/client", authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN, enums_1.Role.CLIENT), SubscriptionController_1.listClientSubscriptions);
router.get('/subscriptions/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.CLIENT), SubscriptionController_1.getSubscription);
router.put('/subscriptions/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.CLIENT), SubscriptionController_1.updateSubscription);
router.delete('/subscriptions/:id', authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), SubscriptionController_1.deleteSubscription);
exports.default = router;
//# sourceMappingURL=routes.js.map