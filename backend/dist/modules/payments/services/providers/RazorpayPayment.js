"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorpayPayment = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
class RazorpayPayment {
    constructor(keyId, keySecret) {
        this.razorpay = new razorpay_1.default({ key_id: keyId, key_secret: keySecret });
    }
    async processPayment(req) {
        const order = await this.razorpay.orders.create({
            amount: req.amount * 100,
            currency: req.currency,
            receipt: "order_rcptid_" + Date.now(),
        });
        return { status: "success", transactionId: order.id };
    }
}
exports.RazorpayPayment = RazorpayPayment;
//# sourceMappingURL=RazorpayPayment.js.map