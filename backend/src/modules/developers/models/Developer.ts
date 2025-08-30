import { Schema, model, Document, Types } from 'mongoose';
import { DevLevel, VerificationStatus } from '@/common/types/enums';



export interface IDeveloper extends Document {
    userId: Types.ObjectId;
    verification: {
        docUrl: string;
        status: VerificationStatus;
        reviewedBy?: Types.ObjectId;
    };
    profile: {
        photoUrl?: string;
        bio?: string;
        experienceYears?: number;
        skills: Types.ObjectId[];
        linkedin?: string;
        portfolio?: string;
        whatsapp: string;
    };
    level: DevLevel;
    rating: {
        avg: number;
        count: number;
    };
    createdAt: Date;
    updatedAt: Date;
}

const developerSchema = new Schema<IDeveloper>(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
        verification: {
            docUrl: { type: String, required: true },
            status: {
                type: String,
                enum: Object.values(VerificationStatus),
                default: VerificationStatus.PENDING,
            },
            reviewedBy: { type: Schema.Types.ObjectId, ref: 'User' },
        },
        profile: {
            photoUrl: { type: String },
            bio: { type: String },
            experienceYears: { type: Number },
            skills: [{ type: Schema.Types.ObjectId, ref: 'Skill', index: true }],
            linkedin: { type: String },
            portfolio: { type: String },
            whatsapp: { type: String, required: true },
        },
        level: {
            type: String,
            required: true,
            index: true,
            enum: Object.values(DevLevel),
            default: DevLevel.FRESHER,
        },

        rating: {
            avg: { type: Number, default: 0 },
            count: { type: Number, default: 0 },
        },
    },
    { timestamps: true }
);

export const Developer = model<IDeveloper>('Developer', developerSchema);
