"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const enums_1 = require("@/common/types/enums");
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    requiredSkillIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Skill', index: true }],
    clientId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Client", required: true },
    preferredLevel: { type: String, enum: Object.values(enums_1.DevLevel), required: false },
    agreementFileUrl: { type: String },
}, { timestamps: true });
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
//# sourceMappingURL=Project.js.map