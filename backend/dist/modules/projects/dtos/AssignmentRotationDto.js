"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptOrRejectAssignmentRequest = void 0;
const zod_1 = require("zod");
exports.acceptOrRejectAssignmentRequest = zod_1.z.object({
    params: zod_1.z.object({
        projectId: zod_1.z.string().length(24),
        developerId: zod_1.z.string().length(24),
    }),
});
//# sourceMappingURL=AssignmentRotationDto.js.map