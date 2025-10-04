import { PaymentRepository } from "../repositories/PaymentRepository";
import { SubscriptionRepository } from "@/modules/subscriptions/repositories/SubscriptionRepository";
export interface PaymentRequest {
    paymentMethod: "paypal" | "razorpay" | "stripe";
    planInterval: "monthly" | "yearly";
    amount: number;
    currency: string;
    clientId: string;
    packageId: string;
    packageTitle: string;
    paymentDetails?: any;
}
export declare class PaymentService {
    private paymentRepo;
    private subscriptionRepo;
    private providers;
    constructor(paymentRepo?: PaymentRepository, subscriptionRepo?: SubscriptionRepository);
    processPayment(req: PaymentRequest): Promise<{
        status: string;
        transactionId: string;
    }>;
    /** Save payment details in DB */
    private recordPayment;
    /** Create or schedule subscription */
    private handleSubscription;
    /** Check existing active subscription and return correct start date */
    private determineStartDate;
    private calculateEndDate;
}
//# sourceMappingURL=PaymentService.d.ts.map