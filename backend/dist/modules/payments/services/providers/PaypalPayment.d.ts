import { IPaymentProvider } from "./IPaymentProvider";
import { PaymentRequest } from "../PaymentService";
export declare class PaypalPayment implements IPaymentProvider {
    private paypalClient;
    constructor(clientId: string, clientSecret: string, isSandbox?: boolean);
    processPayment(req: PaymentRequest): Promise<{
        status: "success" | "failure";
        transactionId: string;
    }>;
}
//# sourceMappingURL=PaypalPayment.d.ts.map