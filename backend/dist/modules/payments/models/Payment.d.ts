import { Document } from "mongoose";
export interface IPaymentDocument extends Document {
    paymentMethod: "paypal" | "razorpay" | "stripe";
    planInterval: "monthly" | "yearly";
    amount: number;
    currency: string;
    packageTitle: string;
    transactionId: string;
    status: "success" | "failure";
    createdAt: Date;
}
export declare const Payment: import("mongoose").Model<IPaymentDocument, {}, {}, {}, Document<unknown, {}, IPaymentDocument, {}, {}> & IPaymentDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Payment.d.ts.map