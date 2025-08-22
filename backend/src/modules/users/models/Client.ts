import { Schema, model, Document, Types } from 'mongoose';

export type PackageCode = 'BASIC' | 'STANDARD' | 'PREMIUM';

export interface IClient extends Document {
    userId: Types.ObjectId;
    freeTrialUsed: boolean;
    subscriptionId?: Types.ObjectId;
    activePackageSnapshot?: {
        code: PackageCode;
        projectsPerMonth: number | null;
        contactClicksPerProject: number | null;
    };
    contactClickUsage: {
        projectId: Types.ObjectId;
        clicks: number;
    }[];
    createdAt: Date;
    updatedAt: Date;
}

const clientSchema = new Schema<IClient>(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
        freeTrialUsed: { type: Boolean, default: false },
        subscriptionId: { type: Schema.Types.ObjectId, ref: 'Subscription' },
        activePackageSnapshot: {
            code: {
                type: String,
                enum: ['BASIC', 'STANDARD', 'PREMIUM'],
            },
            projectsPerMonth: { type: Number },
            contactClicksPerProject: { type: Number },
        },
        contactClickUsage: [
            {
                projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
                clicks: { type: Number, default: 0 },
            },
        ],
    },
    { timestamps: true }
);

export const Client = model<IClient>('Client', clientSchema);
