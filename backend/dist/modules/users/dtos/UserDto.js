"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQueryDto = exports.UpdateUserDto = exports.CreateUserDto = exports.StatusEnum = exports.ProviderEnum = exports.RoleEnum = void 0;
const zod_1 = require("zod");
exports.RoleEnum = zod_1.z.enum(['CLIENT', 'DEVELOPER', 'ADMIN']);
exports.ProviderEnum = zod_1.z.enum(['local', 'google', 'phone']);
exports.StatusEnum = zod_1.z.enum(['ACTIVE', 'INACTIVE', 'PENDING']);
exports.CreateUserDto = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(3, 'Name must be at least 3 characters long').max(25),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().min(6).optional(),
        password: zod_1.z.string().min(6).optional(),
        provider: exports.ProviderEnum,
        role: exports.RoleEnum.default('CLIENT'),
        status: exports.StatusEnum.default('PENDING'),
    }),
});
exports.UpdateUserDto = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string().length(24) }),
    body: zod_1.z
        .object({
        name: zod_1.z.string().min(3).max(25),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().min(6).optional(),
        password: zod_1.z.string().min(6).optional(),
        role: exports.RoleEnum.optional(),
        status: exports.StatusEnum.optional(),
        lastLoginAt: zod_1.z.coerce.date().optional(),
    })
        .refine((d) => Object.keys(d).length > 0, { message: 'No fields to update' }),
});
exports.ListQueryDto = zod_1.z.object({
    query: zod_1.z.object({
        page: zod_1.z.coerce.number().min(1).default(1),
        limit: zod_1.z.coerce.number().min(1).max(100).default(20),
        search: zod_1.z.string().optional(),
        role: zod_1.z
            .string()
            .optional()
            .transform((val) => val?.toUpperCase()) // convert to uppercase
            .refine((val) => !val || ['CLIENT', 'DEVELOPER', 'ADMIN'].includes(val), {
            message: 'Invalid role',
        }),
        status: zod_1.z
            .string()
            .optional()
            .transform((val) => val?.toUpperCase())
            .refine((val) => !val || ['ACTIVE', 'INACTIVE'].includes(val), {
            message: 'Invalid status',
        }),
    }),
});
//# sourceMappingURL=UserDto.js.map