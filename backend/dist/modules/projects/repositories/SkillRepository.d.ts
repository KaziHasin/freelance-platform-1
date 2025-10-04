import { ISkill } from '../models/Skill';
import { FilterQuery } from "mongoose";
export declare class SkillRepository {
    create(data: Partial<ISkill>): Promise<import("mongoose").Document<unknown, {}, ISkill, {}, {}> & ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    createMany(data: Partial<ISkill>[]): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, ISkill, {}, {}> & ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, Omit<Partial<ISkill>, "_id">>[]>;
    findByNamesLower(namesLower: string[]): import("mongoose").Query<(import("mongoose").FlattenMaps<{
        _id: import("mongoose").Types.ObjectId;
        name: string;
        label: string;
        createdAt: Date;
        updatedAt: Date;
    }> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, ISkill, {}, {}> & ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, {}, ISkill, "find", {}>;
    find(filter: FilterQuery<ISkill>, page?: number, limit?: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, ISkill, {}, {}> & ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, ISkill, {}, {}> & ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, {}, ISkill, "find", {}>;
    count(filter: FilterQuery<ISkill>): import("mongoose").Query<number, import("mongoose").Document<unknown, {}, ISkill, {}, {}> & ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, {}, ISkill, "countDocuments", {}>;
    delete(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, ISkill, {}, {}> & ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, ISkill, {}, {}> & ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, {}, ISkill, "findOneAndDelete", {}>;
}
//# sourceMappingURL=SkillRepository.d.ts.map