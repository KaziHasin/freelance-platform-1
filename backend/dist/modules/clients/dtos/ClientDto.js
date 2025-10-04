"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQueryDto = exports.UpdateClientDto = exports.CreateClientDto = exports.VerificationStatusEnum = void 0;
const zod_1 = require("zod");
exports.VerificationStatusEnum = zod_1.z.enum(['PENDING', 'APPROVED', 'REJECTED']);
exports.CreateClientDto = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().length(24),
        freeTrialUsed: zod_1.z.boolean().default(false),
        verification: zod_1.z
            .object({
            status: exports.VerificationStatusEnum.default('PENDING'),
            reviewedBy: zod_1.z.string().length(24).optional(),
        })
            .default({ status: 'PENDING' }),
    }),
});
exports.UpdateClientDto = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string().length(24) }),
    body: zod_1.z.object({
        freeTrialUsed: zod_1.z.boolean().optional(),
        contactClickUsage: zod_1.z
            .array(zod_1.z.object({ projectId: zod_1.z.string().length(24), clicks: zod_1.z.number().int().min(0) }))
            .optional(),
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
//# sourceMappingURL=ClientDto.js.map