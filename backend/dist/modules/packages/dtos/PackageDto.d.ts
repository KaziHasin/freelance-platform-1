import { PackageCode } from '@/common/types/enums';
import { z } from 'zod';
export declare const CreatePackageDto: z.ZodObject<{
    body: z.ZodObject<{
        code: z.ZodEnum<typeof PackageCode>;
        prices: z.ZodRecord<z.ZodString, z.ZodNumber>;
        projectsPerMonth: z.ZodPipe<z.ZodUnion<readonly [z.ZodNumber, z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodNull]>, z.ZodTransform<number | null, string | number | null>>;
        contactClicksPerProject: z.ZodPipe<z.ZodUnion<readonly [z.ZodNumber, z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodNull]>, z.ZodTransform<number | null, string | number | null>>;
        shortDescription: z.ZodString;
        footerText: z.ZodString;
        badge: z.ZodOptional<z.ZodString>;
        features: z.ZodArray<z.ZodString>;
        notes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const UpdatePackageDto: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodObject<{
        prices: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>>;
        code: z.ZodOptional<z.ZodEnum<typeof PackageCode>>;
        projectsPerMonth: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodNumber, z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodNull]>, z.ZodTransform<number | null, string | number | null>>>;
        contactClicksPerProject: z.ZodOptional<z.ZodPipe<z.ZodUnion<readonly [z.ZodNumber, z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>, z.ZodNull]>, z.ZodTransform<number | null, string | number | null>>>;
        shortDescription: z.ZodOptional<z.ZodString>;
        footerText: z.ZodOptional<z.ZodString>;
        badge: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        features: z.ZodOptional<z.ZodArray<z.ZodString>>;
        notes: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ListQueryDto: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        q: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=PackageDto.d.ts.map