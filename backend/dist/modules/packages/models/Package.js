"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
const enums_1 = require("@/common/types/enums");
const mongoose_1 = require("mongoose");
const packageSchema = new mongoose_1.Schema({
    code: {
        type: String,
        enum: Object.values(enums_1.PackageCode),
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
    shortDescription: { type: String, default: '' },
    footerText: { type: String, default: '' },
    badge: { type: String, default: '' },
    features: { type: [String], default: [] },
}, { timestamps: true });
exports.Package = (0, mongoose_1.model)('Package', packageSchema);
//# sourceMappingURL=Package.js.map