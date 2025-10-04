"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
const enums_1 = require("@/common/types/enums");
const mongoose_1 = require("mongoose");
const assignmentSchema = new mongoose_1.Schema({
    projectId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Project', index: true, required: true },
    developerId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Developer', index: true, required: true },
    status: { type: String, enum: Object.values(enums_1.AssignmentStatus), index: true, required: true },
    assignedAt: { type: Date, index: true, required: true },
    respondedAt: { type: Date },
    triedDeveloperIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Developer' }],
}, { timestamps: true });
exports.Assignment = (0, mongoose_1.model)('Assignment', assignmentSchema);
//# sourceMappingURL=Assignment.js.map