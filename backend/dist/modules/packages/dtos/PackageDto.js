"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQueryDto = exports.UpdatePackageDto = exports.CreatePackageDto = void 0;
const enums_1 = require("@/common/types/enums");
const zod_1 = require("zod");
const PricesSchema = zod_1.z.record(zod_1.z.string().regex(/^[A-Z]{3}$/, 'Currency code must be 3 uppercase letters (e.g. USD, INR)'), zod_1.z.number().min(0, 'Price must be ≥ 0'));
const PositiveUnlimitedNumber = zod_1.z
    .union([
    zod_1.z.number().gt(0, { message: 'Value must be greater than 0' }),
    zod_1.z.string().transform((v) => (v?.toUpperCase() === 'UNLIMITED' ? 'UNLIMITED' : v)),
    zod_1.z.null(),
])
    .refine((v) => typeof v === 'number' || v === 'UNLIMITED' || v === null, {
    message: 'Must be a positive number, "UNLIMITED", or null',
})
    .transform((v) => (v === 'UNLIMITED' ? null : v));
const PackageBaseSchema = {
    code: zod_1.z.nativeEnum(enums_1.PackageCode),
    prices: PricesSchema,
    projectsPerMonth: PositiveUnlimitedNumber,
    contactClicksPerProject: PositiveUnlimitedNumber,
    shortDescription: zod_1.z.string().min(1, 'Short description is required').max(50, 'No more than 50 characters are allowed'),
    footerText: zod_1.z.string().min(1, 'Footer text is required').max(50, 'No more than 50 characters are allowed'),
    badge: zod_1.z.string().max(15, 'No more than 15 characters are allowed').optional(),
    features: zod_1.z
        .array(zod_1.z.string().min(1, 'Feature cannot be empty'))
        .min(1, 'At least one feature is required')
        .max(8, 'No more than 6 features are allowed'),
    notes: zod_1.z.string().max(1500).optional(),
};
exports.CreatePackageDto = zod_1.z.object({
    body: zod_1.z.object(PackageBaseSchema),
});
exports.UpdatePackageDto = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string().length(24, 'Invalid id') }),
    body: zod_1.z
        .object({
        ...PackageBaseSchema,
        prices: PricesSchema.optional(),
    })
        .partial()
        .refine((v) => Object.keys(v).length > 0, {
        message: 'No fields to update',
    }),
});
exports.ListQueryDto = zod_1.z.object({
    query: zod_1.z.object({
        page: zod_1.z.coerce.number().min(1).default(1),
        limit: zod_1.z.coerce.number().min(1).max(100).default(20),
        q: zod_1.z.string().optional(),
    }),
});
//# sourceMappingURL=PackageDto.js.map