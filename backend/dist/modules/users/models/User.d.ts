import { Document, Types } from 'mongoose';
export type Role = 'CLIENT' | 'DEVELOPER' | 'ADMIN';
export type Provider = 'local' | 'google' | 'phone';
export interface IUser extends Document {
    _id: Types.ObjectId;
    name: string;
    email?: string;
    phone?: string;
    passwordHash?: string;
    provider: Provider;
    role: Role;
    status: 'ACTIVE' | 'INACTIVE';
    otp?: string | null;
    otpExpiresAt?: Date | null;
    lastLoginAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const User: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=User.d.ts.map