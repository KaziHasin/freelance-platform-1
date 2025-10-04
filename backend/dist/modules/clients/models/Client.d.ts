import { Document, Types } from 'mongoose';
export interface IClient extends Document {
    userId: Types.ObjectId;
    freeTrialUsed: boolean;
    contactClickUsage: {
        projectId: Types.ObjectId;
        clicks: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const Client: import("mongoose").Model<IClient, {}, {}, {}, Document<unknown, {}, IClient, {}, {}> & IClient & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Client.d.ts.map