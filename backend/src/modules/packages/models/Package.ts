import { Schema, model, Document } from 'mongoose';

export type PackageCode = 'FREE' | 'BASIC' | 'STANDARD' | 'PREMIUM';
export type PriceMap = {
    [currencyCode: string]: number;
};

export interface IPackage extends Document {
    code: PackageCode;
    prices: PriceMap;
    projectsPerMonth: number | null;
    contactClicksPerProject: number | null;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}

const packageSchema = new Schema<IPackage>(
    {
        code: {
            type: String,
            enum: ['FREE', 'BASIC', 'STANDARD', 'PREMIUM'],
            required: true,
            unique: true,
            index: true,
        },
        prices: {
            type: Map,
            of: { type: Number, min: 0 },
            required: true,
        },
        projectsPerMonth: { type: Number, default: null, min: 0 },
        contactClicksPerProject: { type: Number, default: null, min: 0 },
        notes: { type: String },
    },
    { timestamps: true }
);

export const Package = model<IPackage>('Package', packageSchema);
