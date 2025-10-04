"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectQueryDto = exports.UpdateProjectDto = exports.CreateProjectDto = exports.skillTag = void 0;
const zod_1 = require("zod");
exports.skillTag = zod_1.z.string().min(1).max(64);
exports.CreateProjectDto = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(3).max(100),
        description: zod_1.z.string().min(10),
        requiredSkillIds: zod_1.z.array(exports.skillTag).min(1).max(5),
        clientId: zod_1.z.string().length(24),
        agreementFileUrl: zod_1.z.string().url().optional(),
    }),
});
exports.UpdateProjectDto = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string().length(24) }),
    body: zod_1.z
        .object({
        title: zod_1.z.string().min(3).max(100).optional(),
        description: zod_1.z.string().min(10).optional(),
        requiredSkillIds: zod_1.z.array(exports.skillTag).min(1).max(5).optional(),
        agreementFileUrl: zod_1.z.string().url().optional(),
    })
        .refine((d) => Object.keys(d).length > 0, {
        message: "No fields to update",
    }),
});
exports.ListProjectQueryDto = zod_1.z.object({
    query: zod_1.z.object({
        page: zod_1.z.coerce.number().min(1).default(1),
        limit: zod_1.z.coerce.number().min(1).max(100).default(20),
        q: zod_1.z.string().optional(),
    }),
});
//# sourceMappingURL=ProjectDto.js.map