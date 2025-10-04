"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectAssignmentSchema = new mongoose_1.Schema({
    projectId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Project", required: true },
    developerId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    status: {
        type: String,
        enum: ["PENDING", "ACCEPTED", "REJECTED", "TIMEOUT"],
        required: true,
    },
    assignedAt: { type: Date, default: Date.now },
    respondedAt: { type: Date },
});
exports.default = (0, mongoose_1.model)("ProjectAssignment", ProjectAssignmentSchema);
//# sourceMappingURL=ProjectAssignment.js.map