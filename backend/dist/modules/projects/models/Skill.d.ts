import { Types } from 'mongoose';
export interface ISkill {
    _id: Types.ObjectId;
    name: string;
    label: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Skill: import("mongoose").Model<ISkill, {}, {}, {}, import("mongoose").Document<unknown, {}, ISkill, {}, {}> & ISkill & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Skill.d.ts.map