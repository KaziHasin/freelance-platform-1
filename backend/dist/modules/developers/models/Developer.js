"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("@/common/types/enums");
const developerSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
    verification: {
        docUrl: { type: String },
        docFile: { type: String },
        idType: {
            type: String,
            enum: ["id-card", "pan-card", "passport", "driving-license"],
        },
        status: {
            type: String,
            enum: Object.values(enums_1.VerificationStatus),
            default: enums_1.VerificationStatus.PENDING,
        },
        reviewedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
        reviewedAt: { type: Date },
    },
    profile: {
        bio: { type: String },
        experienceYears: { type: Number },
        skills: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Skill', index: true }],
        linkedin: { type: String },
        portfolio: { type: String },
        whatsapp: { type: String },
    },
    level: {
        type: String,
        required: true,
        index: true,
        enum: Object.values(enums_1.DevLevel),
        default: enums_1.DevLevel.FRESHER,
    },
    rating: {
        avg: { type: Number, default: 0 },
        count: { type: Number, default: 0 },
    },
    assignedCount: { type: Number, default: 0 },
    lastAssignedAt: { type: Date },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
developerSchema.virtual("assignments", {
    ref: "Assignment",
    localField: "_id",
    foreignField: "developerId",
});
developerSchema.virtual("notRepliedAssignments", {
    ref: "Assignment",
    localField: "_id",
    foreignField: "triedDeveloperIds",
});
exports.Developer = (0, mongoose_1.model)('Developer', developerSchema);
//# sourceMappingURL=Developer.js.map