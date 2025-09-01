import { asyncHandler } from "@/common/utils/asyncHandler";
import { EmailLoginDto, EmailSignupDto, GoogleAuthDto, PhoneRequestDto, PhoneOtpVerifyDto, RefreshTokenDto, } from "../dtos/AuthDto";
import { Request, Response } from 'express';
import { validate } from "@/common/middleware/validate";
import { EmailAuthService } from "../services/emailAuthService";
import { PhoneAuthService } from "../services/phoneAuthService";
import { GoogleAuthService } from "../services/googleAuthService";
import { setAuthCookies } from "@/common/utils/cookieHelper";
import { AuthService } from "../services/AuthService";

const emailService = new EmailAuthService();
const phoneService = new PhoneAuthService();
const googleService = new GoogleAuthService();
const authService = new AuthService();


export const emailSignup = [
    validate(EmailSignupDto),
    asyncHandler(async (req: Request, res: Response) => {
        const { user, tokens } = await emailService.signup(req.body);
        setAuthCookies(res, tokens);
        res.json({ success: true, user });
    }),
];

export const emailLogin = [
    validate(EmailLoginDto),
    asyncHandler(async (req: Request, res: Response) => {
        const user = await emailService.login(req.body);
        res.json({ success: true, user });
    }),
];

export const requestOtp = [
    validate(PhoneRequestDto),
    asyncHandler(async (req: Request, res: Response) => {
        const user = await phoneService.requestOtp(req.body);
        res.json({ success: true, user });
    })
]

export const verifyPhoneOtp = [
    validate(PhoneOtpVerifyDto),
    asyncHandler(async (req: Request, res: Response) => {
        const { user, tokens } = await phoneService.verifyOtp(req.body);
        setAuthCookies(res, tokens);
        res.json({ success: true, user });
    })
]

export const googleAuth = [
    validate(GoogleAuthDto),
    asyncHandler(async (req: Request, res: Response) => {
        const { user, tokens } = await googleService.loginOrSignup(req.body);
        setAuthCookies(res, tokens);
        res.json({ success: true, user });
    })
]

export const refreshToken = [
    validate(RefreshTokenDto),
    asyncHandler(async (req: Request, res: Response) => {
        const { refreshToken } = req.body;
        const decoded = authService.verifyRefreshToken(refreshToken);
        if (!decoded) {
            return res.status(403).json({ message: "Invalid refresh token" });
        }

        const newTokens = authService.generateTokens(decoded as any);

        res.json(newTokens);
    })
]


export const logout = [
    asyncHandler(async (req: Request, res: Response) => {
        res.clearCookie("accessToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        // Optionally: if you store refresh tokens in DB, invalidate/remove them here
        // await authService.invalidateRefreshToken(userId);

        res.json({ success: true, message: "Logged out successfully" });
    }),
];





