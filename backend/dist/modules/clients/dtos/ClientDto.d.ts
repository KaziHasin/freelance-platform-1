import { z } from 'zod';
export declare const VerificationStatusEnum: z.ZodEnum<{
    PENDING: "PENDING";
    REJECTED: "REJECTED";
    APPROVED: "APPROVED";
}>;
export declare const CreateClientDto: z.ZodObject<{
    body: z.ZodObject<{
        userId: z.ZodString;
        freeTrialUsed: z.ZodDefault<z.ZodBoolean>;
        verification: z.ZodDefault<z.ZodObject<{
            status: z.ZodDefault<z.ZodEnum<{
                PENDING: "PENDING";
                REJECTED: "REJECTED";
                APPROVED: "APPROVED";
            }>>;
            reviewedBy: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const UpdateClientDto: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodObject<{
        freeTrialUsed: z.ZodOptional<z.ZodBoolean>;
        contactClickUsage: z.ZodOptional<z.ZodArray<z.ZodObject<{
            projectId: z.ZodString;
            clicks: z.ZodNumber;
        }, z.core.$strip>>>;
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
//# sourceMappingURL=ClientDto.d.ts.map