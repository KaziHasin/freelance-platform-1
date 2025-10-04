import { AssignmentStatus } from '@/common/types/enums';
import { Types } from 'mongoose';
export interface IAssignment {
    _id: Types.ObjectId;
    projectId: Types.ObjectId;
    developerId: Types.ObjectId;
    status: AssignmentStatus;
    assignedAt: Date;
    respondedAt?: Date;
    triedDeveloperIds: Types.ObjectId[];
}
export declare const Assignment: import("mongoose").Model<IAssignment, {}, {}, {}, import("mongoose").Document<unknown, {}, IAssignment, {}, {}> & IAssignment & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Assignment.d.ts.map