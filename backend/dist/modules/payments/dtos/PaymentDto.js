"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutPaymentDto = exports.PaymentDetailsDto = exports.CurrencyEnum = exports.PlanIntervalEnum = exports.PaymentMethodEnum = void 0;
const zod_1 = require("zod");
exports.PaymentMethodEnum = zod_1.z.enum(["paypal", "razorpay", "stripe"]);
exports.PlanIntervalEnum = zod_1.z.enum(["monthly", "yearly"]);
exports.CurrencyEnum = zod_1.z.enum(["INR", "USD", "EUR"]);
exports.PaymentDetailsDto = zod_1.z.object({
    cardNumber: zod_1.z
        .string()
        .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Card number must be in format: 0000 0000 0000 0000"),
    expiryDate: zod_1.z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format"),
    cvv: zod_1.z
        .string()
        .regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
    name: zod_1.z.string().min(2, "Name on card must be at least 2 characters"),
});
exports.CheckoutPaymentDto = zod_1.z.object({
    body: zod_1.z.object({
        paymentMethod: exports.PaymentMethodEnum,
        planInterval: exports.PlanIntervalEnum,
        amount: zod_1.z.number().positive("Amount must be greater than 0"),
        currency: exports.CurrencyEnum,
        clientId: zod_1.z.string().length(24, "Invalid client ID"),
        packageId: zod_1.z.string().length(24, "Invalid package ID"),
        packageTitle: zod_1.z.string().min(3, "Package title must be at least 3 characters"),
        paymentDetails: exports.PaymentDetailsDto,
    }),
});
//# sourceMappingURL=PaymentDto.js.map