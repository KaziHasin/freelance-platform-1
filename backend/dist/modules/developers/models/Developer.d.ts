import { Document, Types } from 'mongoose';
import { DevLevel, VerificationStatus } from '@/common/types/enums';
export interface IDeveloper extends Document {
    userId: Types.ObjectId;
    verification: {
        docUrl?: string;
        docFile?: string;
        idType?: "id-card" | "pan-card" | "passport" | "driving-license";
        status: VerificationStatus;
        reviewedBy?: Types.ObjectId;
        reviewedAt?: Date;
    };
    profile: {
        bio?: string;
        experienceYears?: number;
        skills: Types.ObjectId[];
        linkedin?: string;
        portfolio?: string;
        whatsapp?: string;
    };
    level: DevLevel;
    rating: {
        avg: number;
        count: number;
    };
    assignedCount: number;
    lastAssignedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Developer: import("mongoose").Model<IDeveloper, {}, {}, {}, Document<unknown, {}, IDeveloper, {}, {}> & IDeveloper & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Developer.d.ts.map