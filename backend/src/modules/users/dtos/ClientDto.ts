import { z } from 'zod';

export const PackageCodeEnum = z.enum(['BASIC', 'STANDARD', 'PREMIUM']);

export const CreateClientDto = z.object({
    body: z.object({
        userId: z.string().length(24),
        freeTrialUsed: z.boolean().default(false),
        subscriptionId: z.string().length(24).optional(),
        activePackageSnapshot: z
            .object({
                code: PackageCodeEnum,
                projectsPerMonth: z.number().nullable().optional(),
                contactClicksPerProject: z.number().nullable().optional(),
            })
            .optional(),
    }),
});

export const UpdateClientDto = z.object({
    params: z.object({ id: z.string().length(24) }),
    body: z.object({
        freeTrialUsed: z.boolean().optional(),
        subscriptionId: z.string().length(24).nullable().optional(),
        activePackageSnapshot: z
            .object({
                code: PackageCodeEnum,
                projectsPerMonth: z.number().nullable(),
                contactClicksPerProject: z.number().nullable(),
            })
            .optional(),
        contactClickUsage: z
            .array(z.object({ projectId: z.string().length(24), clicks: z.number().int().min(0) }))
            .optional(),
    }),
});

export const ListQueryDto = z.object({
    query: z.object({
        page: z.coerce.number().min(1).default(1),
        limit: z.coerce.number().min(1).max(100).default(20),
        q: z.string().optional(),
    }),
});
