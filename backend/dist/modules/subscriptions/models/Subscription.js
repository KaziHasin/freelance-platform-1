"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const enums_1 = require("@/common/types/enums");
const mongoose_1 = require("mongoose");
const subscriptionSchema = new mongoose_1.Schema({
    clientId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Client', required: true },
    packageId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Package', required: true },
    paymentId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Payment', required: true },
    status: { type: String, enum: Object.values(enums_1.SubscriptionStatus), default: enums_1.SubscriptionStatus.ACTIVE },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date },
    isTrial: { type: Boolean, default: false },
}, { timestamps: true });
exports.Subscription = (0, mongoose_1.model)('Subscription', subscriptionSchema);
//# sourceMappingURL=Subscription.js.map