import { VerificationStatus } from '@/common/types/enums';
import { Schema, model, Document, Types } from 'mongoose';

export interface IClient extends Document {
    userId: Types.ObjectId;
    freeTrialUsed: boolean;
    verification: {
        status: VerificationStatus;
        reviewedBy?: Types.ObjectId;
    };
    contactClickUsage: {
        projectId: Types.ObjectId;
        clicks: number;
    }[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const clientSchema = new Schema<IClient>(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
        freeTrialUsed: { type: Boolean, default: false },
        verification: {
            status: {
                type: String,
                enum: Object.values(VerificationStatus),
                default: VerificationStatus.PENDING,
            },
            reviewedBy: { type: Schema.Types.ObjectId, ref: 'User' },
        },
        contactClickUsage: [
            {
                projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
                clicks: { type: Number, default: 0 },
            },
        ],
        isActive: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

clientSchema.virtual("subscriptions", {
    ref: "Subscription",
    localField: "_id",
    foreignField: "clientId"
});

export const Client = model<IClient>('Client', clientSchema);
