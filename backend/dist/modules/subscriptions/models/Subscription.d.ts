import { SubscriptionStatus } from '@/common/types/enums';
import { Document, Types } from 'mongoose';
export interface ISubscription extends Document {
    clientId: Types.ObjectId;
    packageId: Types.ObjectId;
    paymentId: Types.ObjectId;
    status: SubscriptionStatus;
    startDate: Date;
    endDate?: Date;
    isTrial: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Subscription: import("mongoose").Model<ISubscription, {}, {}, {}, Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Subscription.d.ts.map