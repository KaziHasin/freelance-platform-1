import { Document, Types } from "mongoose";
export interface IProjectAssignment extends Document {
    projectId: Types.ObjectId;
    developerId: Types.ObjectId;
    status: "PENDING" | "ACCEPTED" | "REJECTED" | "TIMEOUT";
    assignedAt: Date;
    respondedAt?: Date;
}
declare const _default: import("mongoose").Model<IProjectAssignment, {}, {}, {}, Document<unknown, {}, IProjectAssignment, {}, {}> & IProjectAssignment & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=ProjectAssignment.d.ts.map