import { FilterQuery } from 'mongoose';
import type { IPackage } from '../models/Package';
export declare class PackageRepository {
    create(data: Partial<IPackage>): Promise<import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findById(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IPackage, "findOne", {}>;
    findOne(filter: FilterQuery<IPackage>): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IPackage, "findOne", {}>;
    find(filter: FilterQuery<IPackage>, page?: number, limit?: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IPackage, "find", {}>;
    count(filter: FilterQuery<IPackage>): import("mongoose").Query<number, import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IPackage, "countDocuments", {}>;
    update(id: string, data: Partial<IPackage>): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IPackage, "findOneAndUpdate", {}>;
    delete(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IPackage, "findOneAndDelete", {}>;
}
//# sourceMappingURL=PackageRepository.d.ts.map