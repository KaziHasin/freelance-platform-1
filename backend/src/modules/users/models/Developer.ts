import { Schema, model, Document, Types } from 'mongoose';

export type VerificationStatus = 'PENDING' | 'APPROVED' | 'REJECTED';
export type DeveloperLevel = 'EXPERT' | 'MID' | 'FRESHER';

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
        skills: string[];
        linkedin?: string;
        portfolio?: string;
        whatsapp: string;
    };
    level: DeveloperLevel;
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
                enum: ['PENDING', 'APPROVED', 'REJECTED'],
                default: 'PENDING',
            },
            reviewedBy: { type: Schema.Types.ObjectId, ref: 'User' },
        },
        profile: {
            photoUrl: { type: String },
            bio: { type: String },
            experienceYears: { type: Number },
            skills: { type: [String], default: [] },
            linkedin: { type: String },
            portfolio: { type: String },
            whatsapp: { type: String, required: true },
        },
        level: {
            type: String,
            enum: ['EXPERT', 'MID', 'FRESHER'],
            default: 'FRESHER',
        },
        rating: {
            avg: { type: Number, default: 0 },
            count: { type: Number, default: 0 },
        },
    },
    { timestamps: true }
);

export const Developer = model<IDeveloper>('Developer', developerSchema);
