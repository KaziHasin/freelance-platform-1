import type { IPaymentDocument } from "../models/Payment";
export declare class PaymentRepository {
    create(data: Partial<IPaymentDocument>): Promise<import("mongoose").Document<unknown, {}, IPaymentDocument, {}, {}> & IPaymentDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, IPaymentDocument, {}, {}> & IPaymentDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, IPaymentDocument, {}, {}> & IPaymentDocument & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
}
//# sourceMappingURL=PaymentRepository.d.ts.map