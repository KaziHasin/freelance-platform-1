"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripePayment = void 0;
const stripe_1 = __importDefault(require("stripe"));
class StripePayment {
    constructor(secret) {
        this.stripe = new stripe_1.default(secret, {
            apiVersion: "2025-08-27.basil",
        });
    }
    async processPayment(req) {
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: Math.round(req.amount * 100),
            currency: req.currency.toLowerCase(),
            description: `${req.packageTitle} - ${req.planInterval}`,
        });
        return { status: "success", transactionId: paymentIntent.id };
    }
}
exports.StripePayment = StripePayment;
//# sourceMappingURL=StripePayment.js.map