import { z } from 'zod';

export const RoleEnum = z.enum(['CLIENT', 'DEVELOPER', 'ADMIN']);
export const ProviderEnum = z.enum(['local', 'google', 'phone']);
export const StatusEnum = z.enum(['ACTIVE', 'INACTIVE', 'PENDING']);

export const CreateUserDto = z.object({
    body: z.object({
        name: z.string().min(3, 'Name must be at least 3 characters long').max(25),
        email: z.string().email().optional(),
        phone: z.string().min(6).optional(),
        password: z.string().min(6).optional(),
        provider: ProviderEnum,
        roles: z.array(RoleEnum).default(['CLIENT']),
        status: StatusEnum.default('PENDING'),
    }),
});

export const UpdateUserDto = z.object({
    params: z.object({ id: z.string().length(24) }),
    body: z
        .object({
            name: z.string().min(3).max(25),
            email: z.string().email().optional(),
            phone: z.string().min(6).optional(),
            password: z.string().min(6).optional(),
            roles: z.array(RoleEnum).optional(),
            status: StatusEnum.optional(),
            lastLoginAt: z.coerce.date().optional(),
        })
        .refine((d) => Object.keys(d).length > 0, { message: 'No fields to update' }),
});

export const ListQueryDto = z.object({
    query: z.object({
        page: z.coerce.number().min(1).default(1),
        limit: z.coerce.number().min(1).max(100).default(20),
        q: z.string().optional(),
    }),
});
