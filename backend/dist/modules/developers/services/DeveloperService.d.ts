import { SkillService } from '@/modules/projects/services/SkillService';
import { DeveloperRepository } from '../repositories/DeveloperRepository';
import { VerificationStatus } from '@/common/types/enums';
import { Types } from 'mongoose';
import { IDeveloper } from '../models/Developer';
export declare class DeveloperService {
    private repo;
    private skillService;
    constructor(repo?: DeveloperRepository, skillService?: SkillService);
    create(data: any): Promise<import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
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
    update(id: string, data: any, files?: {
        docFile?: Express.Multer.File | undefined;
        idFile?: Express.Multer.File | undefined;
    }): Promise<(import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    updateVerificationStatus(id: string, status: keyof typeof VerificationStatus, adminId: Types.ObjectId): Promise<(import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IDeveloper, "findOneAndDelete", {}>;
}
//# sourceMappingURL=DeveloperService.d.ts.map