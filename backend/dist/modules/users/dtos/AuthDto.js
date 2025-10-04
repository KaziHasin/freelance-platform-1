"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthDto = exports.PhoneOtpVerifyDto = exports.PhoneRequestDto = exports.EmailLoginDto = exports.EmailSignupDto = exports.StatusEnum = exports.ProviderEnum = exports.RoleEnum = void 0;
const zod_1 = require("zod");
exports.RoleEnum = zod_1.z.enum(['CLIENT', 'DEVELOPER', 'ADMIN']);
exports.ProviderEnum = zod_1.z.enum(['local', 'google', 'phone']);
exports.StatusEnum = zod_1.z.enum(['ACTIVE', 'INACTIVE', 'PENDING']);
exports.EmailSignupDto = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(3, 'Name must be at least 3 characters long').max(25),
        email: zod_1.z.string().email().optional(),
        phone: zod_1.z.string().min(6).optional(),
        password: zod_1.z.string().min(6).optional(),
        provider: exports.ProviderEnum,
        role: exports.RoleEnum.default('ADMIN'),
        status: exports.StatusEnum.default('PENDING'),
    }).refine((data) => data.email || data.phone, {
        message: "Either email or phone is required",
        path: ["email"],
    }),
});
exports.EmailLoginDto = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string(),
    })
});
exports.PhoneRequestDto = zod_1.z.object({
    phone: zod_1.z.string().min(10).max(15),
    role: zod_1.z.enum(["CLIENT", "DEVELOPER"]).default("CLIENT"),
});
exports.PhoneOtpVerifyDto = zod_1.z.object({
    phone: zod_1.z.string().min(10).max(15),
    otp: zod_1.z.string().length(6),
});
exports.GoogleAuthDto = zod_1.z.object({
    token: zod_1.z.string(),
    role: zod_1.z.enum(["CLIENT", "DEVELOPER"]).default("CLIENT"),
});
//# sourceMappingURL=AuthDto.js.map