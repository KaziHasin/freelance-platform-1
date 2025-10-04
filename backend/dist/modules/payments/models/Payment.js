"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const PaymentSchema = new mongoose_1.Schema({
    paymentMethod: { type: String, required: true },
    planInterval: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    packageTitle: { type: String, required: true },
    transactionId: { type: String, required: true },
    status: { type: String, enum: ["success", "failure"], required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.Payment = (0, mongoose_1.model)("Payment", PaymentSchema);
//# sourceMappingURL=Payment.js.map