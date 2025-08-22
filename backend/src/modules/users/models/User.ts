import { Schema, model, Document } from 'mongoose';

export type Role = 'CLIENT' | 'DEVELOPER' | 'ADMIN';
export type Provider = 'local' | 'google' | 'phone';

export interface IUser extends Document {
    name: string,
    email?: string;
    phone?: string;
    passwordHash?: string;
    provider: Provider;
    role: Role[];
    status: 'ACTIVE' | 'INACTIVE' | 'PENDING';
    lastLoginAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, sparse: true },
        phone: { type: String, unique: true, sparse: true },
        passwordHash: { type: String },
        provider: { type: String, enum: ['local', 'google', 'phone'], required: true },
        role: {
            type: [String],
            enum: ['CLIENT', 'DEVELOPER', 'ADMIN'],
            default: ['CLIENT'],
        },
        status: {
            type: String,
            enum: ['ACTIVE', 'INACTIVE', 'PENDING'],
            default: 'PENDING',
        },
        lastLoginAt: { type: Date },
    },
    { timestamps: true }
);

export const User = model<IUser>('User', userSchema);
