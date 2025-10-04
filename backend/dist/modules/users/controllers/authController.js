"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refreshToken = exports.authMe = exports.googleAuth = exports.verifyPhoneOtp = exports.requestOtp = exports.emailLogin = exports.emailSignup = void 0;
const asyncHandler_1 = require("@/common/utils/asyncHandler");
const AuthDto_1 = require("../dtos/AuthDto");
const validate_1 = require("@/common/middleware/validate");
const emailAuthService_1 = require("../services/emailAuthService");
const phoneAuthService_1 = require("../services/phoneAuthService");
const googleAuthService_1 = require("../services/googleAuthService");
const cookieHelper_1 = require("@/common/utils/cookieHelper");
const AuthService_1 = require("../services/AuthService");
const UserService_1 = require("../services/UserService");
const emailService = new emailAuthService_1.EmailAuthService();
const phoneService = new phoneAuthService_1.PhoneAuthService();
const googleService = new googleAuthService_1.GoogleAuthService();
const authService = new AuthService_1.AuthService();
const userService = new UserService_1.UserService();
exports.emailSignup = [
    (0, validate_1.validate)(AuthDto_1.EmailSignupDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { user, tokens } = await emailService.signup(req.body);
        (0, cookieHelper_1.setAuthCookies)(res, tokens);
        res.json({ success: true, user, tokens });
    }),
];
exports.emailLogin = [
    (0, validate_1.validate)(AuthDto_1.EmailLoginDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { user, tokens } = await emailService.login(req.body);
        (0, cookieHelper_1.setAuthCookies)(res, tokens);
        res.json({ success: true, user, tokens });
    }),
];
exports.requestOtp = [
    (0, validate_1.validate)(AuthDto_1.PhoneRequestDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const user = await phoneService.requestOtp(req.body);
        res.json({ success: true, user });
    })
];
exports.verifyPhoneOtp = [
    (0, validate_1.validate)(AuthDto_1.PhoneOtpVerifyDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { user, tokens } = await phoneService.verifyOtp(req.body);
        (0, cookieHelper_1.setAuthCookies)(res, tokens);
        res.json({ success: true, user, tokens });
    })
];
exports.googleAuth = [
    (0, validate_1.validate)(AuthDto_1.GoogleAuthDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { user, tokens } = await googleService.loginOrSignup(req.body);
        (0, cookieHelper_1.setAuthCookies)(res, tokens);
        res.json({ success: true, user });
    })
];
exports.authMe = [
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const userId = req.user?.id;
        const user = await userService.get(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            id: user._id,
            email: user.email,
            name: user.name,
            role: user.role,
        });
    }),
];
exports.refreshToken = [
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const token = req.cookies?.refreshToken;
        if (!token) {
            return res.status(403).json({ message: "No refresh token provided" });
        }
        const decoded = authService.verifyRefreshToken(token);
        if (!decoded) {
            return res.status(403).json({ message: "Invalid refresh token" });
        }
        const user = await userService.get(decoded.id);
        if (!user)
            return res.status(404).json({ message: "User not found" });
        const newTokens = authService.generateTokens(user);
        (0, cookieHelper_1.setAuthCookies)(res, newTokens);
        res.json({
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });
    }),
];
exports.logout = [
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
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
        res.json({ success: true, message: "Logged out successfully" });
    }),
];
//# sourceMappingURL=authController.js.map