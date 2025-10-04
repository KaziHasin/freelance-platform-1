"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const mongoose_1 = require("mongoose");
const clientSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
    freeTrialUsed: { type: Boolean, default: false },
    contactClickUsage: [
        {
            projectId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Project', required: true },
            clicks: { type: Number, default: 0 },
        },
    ],
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
clientSchema.virtual("subscriptions", {
    ref: "Subscription",
    localField: "_id",
    foreignField: "clientId"
});
clientSchema.virtual("projects", {
    ref: "Project",
    localField: "_id",
    foreignField: "clientId",
});
exports.Client = (0, mongoose_1.model)('Client', clientSchema);
//# sourceMappingURL=Client.js.map