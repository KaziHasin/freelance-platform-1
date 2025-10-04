import { ISubscription } from "../models/Subscription";
import { FilterQuery, Types } from "mongoose";
export declare class SubscriptionRepository {
    create(data: Partial<ISubscription>): Promise<import("mongoose").Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findById(id: string): Promise<(import("mongoose").Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    findOne(filter: FilterQuery<ISubscription>, sort?: Record<string, 1 | -1>): Promise<(import("mongoose").Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    getActiveSubscription(clientId: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    find(filter: any, page?: number, limit?: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, ISubscription, "find", {}>;
    count(filter: any): import("mongoose").Query<number, import("mongoose").Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, ISubscription, "countDocuments", {}>;
    update(id: string, data: FilterQuery<ISubscription>): Promise<(import("mongoose").Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, ISubscription, {}, {}> & ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
//# sourceMappingURL=SubscriptionRepository.d.ts.map