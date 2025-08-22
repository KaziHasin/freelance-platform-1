import { z } from 'zod';

export const VerificationStatusEnum = z.enum(['PENDING', 'APPROVED', 'REJECTED']);
export const DeveloperLevelEnum = z.enum(['EXPERT', 'MID', 'FRESHER']);

export const CreateDeveloperDto = z.object({
    body: z.object({
        userId: z.string().length(24),
        verification: z
            .object({
                docUrl: z.string().url(),
                status: VerificationStatusEnum.default('PENDING'),
                reviewedBy: z.string().length(24).optional(),
            })
            .default({ docUrl: '' }),
        profile: z.object({
            photoUrl: z.string().url().optional(),
            bio: z.string().optional(),
            experienceYears: z.number().int().min(0).optional(),
            skills: z.array(z.string()).default([]),
            linkedin: z.string().url().optional(),
            portfolio: z.string().url().optional(),
            whatsapp: z.string().min(5),
        }),
        level: DeveloperLevelEnum.default('FRESHER'),
    }),
});

export const UpdateDeveloperDto = z.object({
    params: z.object({ id: z.string().length(24) }),
    body: z.object({
        verification: z
            .object({
                docUrl: z.string().url().optional(),
                status: VerificationStatusEnum.optional(),
                reviewedBy: z.string().length(24).optional(),
            })
            .optional(),
        profile: z
            .object({
                photoUrl: z.string().url().optional(),
                bio: z.string().optional(),
                experienceYears: z.number().int().min(0).optional(),
                skills: z.array(z.string()).optional(),
                linkedin: z.string().url().optional(),
                portfolio: z.string().url().optional(),
                whatsapp: z.string().min(5).optional(),
            })
            .optional(),
        level: DeveloperLevelEnum.optional(),
        rating: z.object({ avg: z.number().min(0), count: z.number().int().min(0) }).partial().optional(),
    }),
});
