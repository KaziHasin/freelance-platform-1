import { z } from 'zod';
export declare const RoleEnum: z.ZodEnum<{
    CLIENT: "CLIENT";
    DEVELOPER: "DEVELOPER";
    ADMIN: "ADMIN";
}>;
export declare const ProviderEnum: z.ZodEnum<{
    local: "local";
    google: "google";
    phone: "phone";
}>;
export declare const StatusEnum: z.ZodEnum<{
    ACTIVE: "ACTIVE";
    INACTIVE: "INACTIVE";
    PENDING: "PENDING";
}>;
export declare const CreateUserDto: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        provider: z.ZodEnum<{
            local: "local";
            google: "google";
            phone: "phone";
        }>;
        role: z.ZodDefault<z.ZodEnum<{
            CLIENT: "CLIENT";
            DEVELOPER: "DEVELOPER";
            ADMIN: "ADMIN";
        }>>;
        status: z.ZodDefault<z.ZodEnum<{
            ACTIVE: "ACTIVE";
            INACTIVE: "INACTIVE";
            PENDING: "PENDING";
        }>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const UpdateUserDto: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>;
    body: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodEnum<{
            CLIENT: "CLIENT";
            DEVELOPER: "DEVELOPER";
            ADMIN: "ADMIN";
        }>>;
        status: z.ZodOptional<z.ZodEnum<{
            ACTIVE: "ACTIVE";
            INACTIVE: "INACTIVE";
            PENDING: "PENDING";
        }>>;
        lastLoginAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const ListQueryDto: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        search: z.ZodOptional<z.ZodString>;
        role: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
        status: z.ZodPipe<z.ZodOptional<z.ZodString>, z.ZodTransform<string | undefined, string | undefined>>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=UserDto.d.ts.map