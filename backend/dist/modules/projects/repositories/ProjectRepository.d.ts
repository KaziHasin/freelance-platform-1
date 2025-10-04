import type { IProject } from "../models/Project";
import { FilterQuery } from "mongoose";
export declare class ProjectRepository {
    create(data: Partial<IProject>): Promise<import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findById(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IProject, "findOne", {}>;
    find(filter: FilterQuery<IProject>, page?: number, limit?: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IProject, "find", {}>;
    count(filter: FilterQuery<IProject>): import("mongoose").Query<number, import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IProject, "countDocuments", {}>;
    update(id: string, data: Partial<IProject>): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IProject, "findOneAndUpdate", {}>;
    delete(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, IProject, "findOneAndDelete", {}>;
}
//# sourceMappingURL=ProjectRepository.d.ts.map