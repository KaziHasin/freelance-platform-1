import { DevLevel } from "@/common/types/enums";
import { Document, Types } from "mongoose";
export interface IProject extends Document {
    title: string;
    description: string;
    requiredSkillIds: Types.ObjectId[];
    clientId: Types.ObjectId;
    preferredLevel?: DevLevel;
    agreementFileUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Project: import("mongoose").Model<IProject, {}, {}, {}, Document<unknown, {}, IProject, {}, {}> & IProject & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Project.d.ts.map