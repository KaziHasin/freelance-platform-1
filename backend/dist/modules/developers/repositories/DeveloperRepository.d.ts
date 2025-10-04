import { DevLevel } from '@/common/types/enums';
import type { IDeveloper } from '../models/Developer';
import { Types } from 'mongoose';
export declare class DeveloperRepository {
    create(data: Partial<IDeveloper>): Promise<import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findById(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("@/modules/users/models/User").IUser, {}, {}> & import("@/modules/users/models/User").IUser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("@/modules/users/models/User").IUser, {}, {}> & import("@/modules/users/models/User").IUser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, {}, import("@/modules/users/models/User").IUser, "findOne", {}>;
    find(filter: any, page?: number, limit?: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("@/modules/users/models/User").IUser, {}, {}> & import("@/modules/users/models/User").IUser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("@/modules/users/models/User").IUser, {}, {}> & import("@/modules/users/models/User").IUser & Required<{
        _id: Types.ObjectId;
    }> & {
        __v: number;
    }, {}, import("@/modules/users/models/User").IUser, "find", {}>;
    count(filter: any): import("mongoose").Query<number, import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IDeveloper, "countDocuments", {}>;
    update(id: string, data: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IDeveloper, "findOneAndUpdate", {}>;
    delete(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IDeveloper, "findOneAndDelete", {}>;
    /**
     * Find candidate developers based on required skills and level
     */
    candidates(requiredSkillIds: string[], level?: DevLevel, excludeIds?: string[]): Promise<any[]>;
}
//# sourceMappingURL=DeveloperRepository.d.ts.map