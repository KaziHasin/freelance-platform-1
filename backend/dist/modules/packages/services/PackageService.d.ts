import { PackageRepository } from '../repositories/PackageRepository';
export declare class PackageService {
    private repo;
    constructor(repo?: PackageRepository);
    create(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/Package").IPackage, {}, {}> & import("../models/Package").IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    get(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../models/Package").IPackage, {}, {}> & import("../models/Package").IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("../models/Package").IPackage, {}, {}> & import("../models/Package").IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("../models/Package").IPackage, "findOne", {}>;
    list(q?: string, page?: number, limit?: number): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("../models/Package").IPackage, {}, {}> & import("../models/Package").IPackage & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    update(id: string, data: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../models/Package").IPackage, {}, {}> & import("../models/Package").IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("../models/Package").IPackage, {}, {}> & import("../models/Package").IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("../models/Package").IPackage, "findOneAndUpdate", {}>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../models/Package").IPackage, {}, {}> & import("../models/Package").IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("../models/Package").IPackage, {}, {}> & import("../models/Package").IPackage & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("../models/Package").IPackage, "findOneAndDelete", {}>;
}
//# sourceMappingURL=PackageService.d.ts.map