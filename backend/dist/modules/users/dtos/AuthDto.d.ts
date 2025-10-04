import { z } from "zod";
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
export declare const EmailSignupDto: z.ZodObject<{
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
export declare const EmailLoginDto: z.ZodObject<{
    body: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const PhoneRequestDto: z.ZodObject<{
    phone: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<{
        CLIENT: "CLIENT";
        DEVELOPER: "DEVELOPER";
    }>>;
}, z.core.$strip>;
export declare const PhoneOtpVerifyDto: z.ZodObject<{
    phone: z.ZodString;
    otp: z.ZodString;
}, z.core.$strip>;
export declare const GoogleAuthDto: z.ZodObject<{
    token: z.ZodString;
    role: z.ZodDefault<z.ZodEnum<{
        CLIENT: "CLIENT";
        DEVELOPER: "DEVELOPER";
    }>>;
}, z.core.$strip>;
//# sourceMappingURL=AuthDto.d.ts.map