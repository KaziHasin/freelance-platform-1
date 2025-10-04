import { SubscriptionRepository } from "../repositories/SubscriptionRepository";
export declare class SubscriptionService {
    private repo;
    constructor(repo?: SubscriptionRepository);
    create(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/Subscription").ISubscription, {}, {}> & import("../models/Subscription").ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    get(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Subscription").ISubscription, {}, {}> & import("../models/Subscription").ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    list(q?: string, page?: number, limit?: number): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("../models/Subscription").ISubscription, {}, {}> & import("../models/Subscription").ISubscription & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    listByClient(clientId: string, status?: string, page?: number, limit?: number): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("../models/Subscription").ISubscription, {}, {}> & import("../models/Subscription").ISubscription & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    update(id: string, data: any): Promise<(import("mongoose").Document<unknown, {}, import("../models/Subscription").ISubscription, {}, {}> & import("../models/Subscription").ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Subscription").ISubscription, {}, {}> & import("../models/Subscription").ISubscription & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
//# sourceMappingURL=SubscriptionService.d.ts.map