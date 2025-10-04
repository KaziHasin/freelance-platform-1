import { IPaymentProvider } from "./IPaymentProvider";
import { PaymentRequest } from "../PaymentService";
export declare class RazorpayPayment implements IPaymentProvider {
    private razorpay;
    constructor(keyId: string, keySecret: string);
    processPayment(req: PaymentRequest): Promise<{
        status: string;
        transactionId: string;
    }>;
}
//# sourceMappingURL=RazorpayPayment.d.ts.map