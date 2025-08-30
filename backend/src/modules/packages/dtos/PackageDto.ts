import { PackageCode } from '@/common/types/enums';
import { z } from 'zod';

const PricesSchema = z.record(
    z.string().regex(/^[A-Z]{3}$/, 'Currency code must be 3 uppercase letters (e.g. USD, INR)'),
    z.number().min(0, 'Price must be ≥ 0')
);

// Allow numbers or "UNLIMITED" → convert "UNLIMITED" → null
const UnlimitedNumber = z
    .union([
        z.number().min(0),
        z.string().transform((v) => (v?.toUpperCase() === 'UNLIMITED' ? 'UNLIMITED' : v)),
    ])
    .refine((v) => typeof v === 'number' || v === 'UNLIMITED', {
        message: 'Must be a non-negative number or "UNLIMITED"',
    })
    .transform((v) => (v === 'UNLIMITED' ? null : (v as number)));


export const CreatePackageDto = z.object({
    body: z.object({
        code: PackageCode,
        prices: PricesSchema,
        projectsPerMonth: UnlimitedNumber,
        contactClicksPerProject: UnlimitedNumber,
        notes: z.string().max(200).optional(),
    }),
});

export const UpdatePackageDto = z.object({
    params: z.object({ id: z.string().length(24, 'Invalid id') }),
    body: z.object({
        prices: PricesSchema.optional(),
        projectsPerMonth: UnlimitedNumber.optional(),
        contactClicksPerProject: UnlimitedNumber.optional(),
        notes: z.string().max(200).optional(),
    }).refine((v) => Object.keys(v).length > 0, { message: 'No fields to update' }),
});

export const ListQueryDto = z.object({
    query: z.object({
        page: z.coerce.number().min(1).default(1),
        limit: z.coerce.number().min(1).max(100).default(20),
        q: z.string().optional(),
    }),
});
