"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQueryDto = exports.UpdateDeveloperDto = exports.CreateDeveloperDto = exports.DeveloperLevelEnum = exports.VerificationStatusEnum = void 0;
const zod_1 = require("zod");
exports.VerificationStatusEnum = zod_1.z.enum(['PENDING', 'APPROVED', 'REJECTED']);
exports.DeveloperLevelEnum = zod_1.z.enum(['EXPERT', 'MID', 'FRESHER']);
exports.CreateDeveloperDto = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().length(24),
        verification: zod_1.z
            .object({
            docUrl: zod_1.z.string().url(),
            status: exports.VerificationStatusEnum.default('PENDING'),
            reviewedBy: zod_1.z.string().length(24).optional(),
        })
            .default({ docUrl: '', status: 'PENDING' }),
        profile: zod_1.z.object({
            photoUrl: zod_1.z.string().url().optional(),
            bio: zod_1.z.string().optional(),
            experienceYears: zod_1.z.number().int().min(0).optional(),
            skills: zod_1.z.array(zod_1.z.string()).default([]),
            linkedin: zod_1.z.string().url().optional(),
            portfolio: zod_1.z.string().url().optional(),
            whatsapp: zod_1.z.string().min(5),
        }),
        level: exports.DeveloperLevelEnum.default('FRESHER'),
    }),
});
exports.UpdateDeveloperDto = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string().length(24) }),
    body: zod_1.z.object({
        verification: zod_1.z
            .object({
            docUrl: zod_1.z.string().url().optional(),
            status: exports.VerificationStatusEnum.optional(),
            reviewedBy: zod_1.z.string().length(24).optional(),
        })
            .optional(),
        profile: zod_1.z
            .object({
            photoUrl: zod_1.z.string().url().optional(),
            bio: zod_1.z.string().optional(),
            experienceYears: zod_1.z.number().int().min(0).optional(),
            skills: zod_1.z.array(zod_1.z.string()).optional(),
            linkedin: zod_1.z.string().url().optional(),
            portfolio: zod_1.z.string().url().optional(),
            whatsapp: zod_1.z.string().min(5).optional(),
        })
            .optional(),
        level: exports.DeveloperLevelEnum.optional(),
        isActive: zod_1.z.boolean().optional(),
        rating: zod_1.z.object({ avg: zod_1.z.number().min(0), count: zod_1.z.number().int().min(0) }).partial().optional(),
    }),
});
exports.ListQueryDto = zod_1.z.object({
    query: zod_1.z.object({
        page: zod_1.z.coerce.number().min(1).default(1),
        limit: zod_1.z.coerce.number().min(1).max(100).default(20),
        search: zod_1.z.string().optional(),
        status: zod_1.z
            .string()
            .optional()
            .transform((val) => val?.toUpperCase())
            .refine((val) => !val || ['ACTIVE', 'INACTIVE'].includes(val), {
            message: 'Invalid status',
        }),
    }),
});
//# sourceMappingURL=DeveloperDto.js.map