import { z } from "zod";
export declare const PaymentMethodEnum: z.ZodEnum<{
    paypal: "paypal";
    razorpay: "razorpay";
    stripe: "stripe";
}>;
export declare const PlanIntervalEnum: z.ZodEnum<{
    monthly: "monthly";
    yearly: "yearly";
}>;
export declare const CurrencyEnum: z.ZodEnum<{
    INR: "INR";
    USD: "USD";
    EUR: "EUR";
}>;
export declare const PaymentDetailsDto: z.ZodObject<{
    cardNumber: z.ZodString;
    expiryDate: z.ZodString;
    cvv: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export declare const CheckoutPaymentDto: z.ZodObject<{
    body: z.ZodObject<{
        paymentMethod: z.ZodEnum<{
            paypal: "paypal";
            razorpay: "razorpay";
            stripe: "stripe";
        }>;
        planInterval: z.ZodEnum<{
            monthly: "monthly";
            yearly: "yearly";
        }>;
        amount: z.ZodNumber;
        currency: z.ZodEnum<{
            INR: "INR";
            USD: "USD";
            EUR: "EUR";
        }>;
        clientId: z.ZodString;
        packageId: z.ZodString;
        packageTitle: z.ZodString;
        paymentDetails: z.ZodObject<{
            cardNumber: z.ZodString;
            expiryDate: z.ZodString;
            cvv: z.ZodString;
            name: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=PaymentDto.d.ts.map