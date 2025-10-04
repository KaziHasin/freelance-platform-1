"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkout = void 0;
const PaymentService_1 = require("../services/PaymentService");
const validate_1 = require("@/common/middleware/validate");
const PaymentDto_1 = require("../dtos/PaymentDto");
const asyncHandler_1 = require("@/common/utils/asyncHandler");
const paymentService = new PaymentService_1.PaymentService();
exports.checkout = [
    (0, validate_1.validate)(PaymentDto_1.CheckoutPaymentDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { paymentMethod, planInterval, amount, currency, clientId, packageId, packageTitle, paymentDetails } = req.body;
        if (!clientId) {
            return res.status(401).json({ error: "Unauthorized User" });
        }
        const result = await paymentService.processPayment({
            paymentMethod,
            planInterval,
            amount,
            currency,
            packageId,
            clientId,
            packageTitle,
            paymentDetails
        });
        res.json(result);
    }),
];
//# sourceMappingURL=paymentController.js.map