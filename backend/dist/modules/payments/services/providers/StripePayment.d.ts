import { IPaymentProvider } from "./IPaymentProvider";
import { PaymentRequest } from "../PaymentService";
export declare class StripePayment implements IPaymentProvider {
    private stripe;
    constructor(secret: string);
    processPayment(req: PaymentRequest): Promise<{
        status: string;
        transactionId: string;
    }>;
}
//# sourceMappingURL=StripePayment.d.ts.map