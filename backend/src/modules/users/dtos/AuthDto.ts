import { z } from "zod";

export const EmailSignupDto = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["CLIENT", "DEVELOPER"]).default("CLIENT"),
});

export const EmailLoginDto = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const PhoneRequestDto = z.object({
    phone: z.string().min(10).max(15),
    role: z.enum(["CLIENT", "DEVELOPER"]).default("CLIENT"),
});

export const PhoneOtpVerifyDto = z.object({
    phone: z.string().min(10).max(15),
    otp: z.string().length(6),
});


export const GoogleAuthDto = z.object({
    token: z.string(),
    role: z.enum(["CLIENT", "DEVELOPER"]).default("CLIENT"),
});

export const RefreshTokenDto = z.object({
    refreshToken: z.string(),
});
