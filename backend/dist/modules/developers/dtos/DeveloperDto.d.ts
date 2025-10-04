import { z } from 'zod';
export declare const VerificationStatusEnum: z.ZodEnum<{
    PENDING: "PENDING";
    REJECTED: "REJECTED";
    APPROVED: "APPROVED";
}>;
export declare const DeveloperLevelEnum: z.ZodEnum<{
    EXPERT: "EXPERT";
    MID: "MID";
    FRESHER: "FRESHER";
}>;
export declare const CreateDeveloperDto: z.ZodObject<{
    body: z.ZodObject<{
        userId: z.ZodString;
        verification: z.ZodDefault<z.ZodObject<{
            docUrl: z.ZodString;
            status: z.ZodDefault<z.ZodEnum<{
                PENDING: "PENDING";
                REJECTED: "REJECTED";
                APPROVED: "APPROVED";
            }>>;
            reviewedBy: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        profile: z.ZodObject<{
            photoUrl: z.ZodOptional<z.ZodString>;
            bio: z.ZodOptional<z.ZodString>;
            experienceYears: z.ZodOptional<z.ZodNumber>;
            skills: z.ZodDefault<z.ZodArray<z.ZodString>>;
            linkedin: z.ZodOptional<z.ZodString>;
            portfolio: z.ZodOptional<z.ZodString>;
            whatsapp: z.ZodString;
        }, z.core.$strip>;
        level: z.ZodDefault<z.ZodEnum<{
            EXPERT: "EXPERT";
            MID: "MID";
            FRESHER: "FRESHER";
        }>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const UpdateDeveloperDto: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodObject<{
        verification: z.ZodOptional<z.ZodObject<{
            docUrl: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<{
                PENDING: "PENDING";
                REJECTED: "REJECTED";
                APPROVED: "APPROVED";
            }>>;
            reviewedBy: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        profile: z.ZodOptional<z.ZodObject<{
            photoUrl: z.ZodOptional<z.ZodString>;
            bio: z.ZodOptional<z.ZodString>;
            experienceYears: z.ZodOptional<z.ZodNumber>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            linkedin: z.ZodOptional<z.ZodString>;
            portfolio: z.ZodOptional<z.ZodString>;
            whatsapp: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        level: z.ZodOptional<z.ZodEnum<{
            EXPERT: "EXPERT";
            MID: "MID";
            FRESHER: "FRESHER";
        }>>;
        isActive: z.ZodOptional<z.ZodBoolean>;
        rating: z.ZodOptional<z.ZodObject<{
            avg: z.ZodOptional<z.ZodNumber>;
            count: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ListQueryDto: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        search: z.ZodOptional<z.ZodString>;
        status: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=DeveloperDto.d.ts.map