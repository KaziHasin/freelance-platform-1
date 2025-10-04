import { PackageRepository } from '@/modules/packages/repositories/PackageRepository';
import { ClientRepository } from '../repositories/ClientRepository';
import { SubscriptionRepository } from '@/modules/subscriptions/repositories/SubscriptionRepository';
import { Types } from 'mongoose';
export declare class ClientService {
    private repo;
    private packageRepo;
    private subscriptionRepo;
    constructor(repo?: ClientRepository, packageRepo?: PackageRepository, subscriptionRepo?: SubscriptionRepository);
    create(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/Client").IClient, {}, {}> & import("../models/Client").IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    get(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../../users/models/User").IUser, {}, {}> & import("../../users/models/User").IUser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("../../users/models/User").IUser, {}, {}> & import("../../users/models/User").IUser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, {}, import("../../users/models/User").IUser, "findOne", {}>;
    list(q?: string, status?: string, page?: number, limit?: number): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("../../users/models/User").IUser, {}, {}> & import("../../users/models/User").IUser & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    update(id: string, data: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../models/Client").IClient, {}, {}> & import("../models/Client").IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("../models/Client").IClient, {}, {}> & import("../models/Client").IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("../models/Client").IClient, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../models/Client").IClient, {}, {}> & import("../models/Client").IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("../models/Client").IClient, {}, {}> & import("../models/Client").IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("../models/Client").IClient, "findOneAndDelete", {}>;
}
//# sourceMappingURL=ClientService.d.ts.map