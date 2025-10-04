"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    phone: { type: String, unique: true, sparse: true },
    passwordHash: { type: String },
    provider: { type: String, enum: ['local', 'google', 'phone'], required: true },
    role: {
        type: String,
        enum: ['CLIENT', 'DEVELOPER', 'ADMIN'],
        default: 'CLIENT',
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
    },
    lastLoginAt: { type: Date },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
userSchema.virtual('client', {
    ref: 'Client',
    localField: '_id',
    foreignField: 'userId',
    justOne: true,
});
userSchema.virtual('developer', {
    ref: 'Developer',
    localField: '_id',
    foreignField: 'userId',
    justOne: true,
});
userSchema.virtual("avatar").get(function () {
    const encodedName = encodeURIComponent(this.name || "U");
    return `https://avatar.iran.liara.run/username?username=${encodedName}&background=b9d7f9&color=1478eb`;
});
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=User.js.map