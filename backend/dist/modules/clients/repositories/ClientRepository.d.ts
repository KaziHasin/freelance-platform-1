import type { IClient } from '../models/Client';
export declare class ClientRepository {
    create(data: Partial<IClient>): Promise<import("mongoose").Document<unknown, {}, IClient, {}, {}> & IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findById(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("@/modules/users/models/User").IUser, {}, {}> & import("@/modules/users/models/User").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("@/modules/users/models/User").IUser, {}, {}> & import("@/modules/users/models/User").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, {}, import("@/modules/users/models/User").IUser, "findOne", {}>;
    find(filter: any, page?: number, limit?: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("@/modules/users/models/User").IUser, {}, {}> & import("@/modules/users/models/User").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("@/modules/users/models/User").IUser, {}, {}> & import("@/modules/users/models/User").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, {}, import("@/modules/users/models/User").IUser, "find", {}>;
    count(filter: any): import("mongoose").Query<number, import("mongoose").Document<unknown, {}, IClient, {}, {}> & IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IClient, "countDocuments", {}>;
    update(id: string, data: Partial<IClient>): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IClient, {}, {}> & IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IClient, {}, {}> & IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IClient, "findOneAndUpdate", {}>;
    delete(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IClient, {}, {}> & IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IClient, {}, {}> & IClient & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IClient, "findOneAndDelete", {}>;
}
//# sourceMappingURL=ClientRepository.d.ts.map