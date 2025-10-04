import { z } from "zod";
import { SubscriptionStatus } from "@/common/types/enums";
export declare const CreateSubscriptionDto: z.ZodObject<{
    body: z.ZodObject<{
        clientId: z.ZodString;
        packageId: z.ZodString;
        status: z.ZodOptional<z.ZodEnum<typeof SubscriptionStatus>>;
        startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        endDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        isTrial: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const UpdateSubscriptionDto: z.ZodObject<{
    body: z.ZodObject<{
        clientId: z.ZodString;
        packageId: z.ZodString;
        status: z.ZodOptional<z.ZodEnum<{
            ACTIVE: "ACTIVE";
            PENDING: "PENDING";
            EXPIRED: "EXPIRED";
            CANCELED: "CANCELED";
            SCHEDULED: "SCHEDULED";
        }>>;
        startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        endDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        isTrial: z.ZodDefault<z.ZodBoolean>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ListQueryDto: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        search: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodEnum<{
            ACTIVE: "ACTIVE";
            PENDING: "PENDING";
            EXPIRED: "EXPIRED";
            CANCELED: "CANCELED";
            SCHEDULED: "SCHEDULED";
        }>>;
    }, z.core.$strict>;
}, z.core.$strip>;
//# sourceMappingURL=SubscriptionDto.d.ts.map