export declare class SkillService {
    private repo;
    resolveSkillIds(tags: string[]): Promise<string[]>;
    list(q?: string, page?: number, limit?: number): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("../models/Skill").ISkill, {}, {}> & import("../models/Skill").ISkill & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    remove(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../models/Skill").ISkill, {}, {}> & import("../models/Skill").ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null, import("mongoose").Document<unknown, {}, import("../models/Skill").ISkill, {}, {}> & import("../models/Skill").ISkill & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, {}, import("../models/Skill").ISkill, "findOneAndDelete", {}>;
}
//# sourceMappingURL=SkillService.d.ts.map