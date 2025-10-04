"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthService {
    constructor() {
        this.accessTokenSecret = process.env.JWT_ACCESS_SECRET || "access_secret";
        this.refreshTokenSecret = process.env.JWT_REFRESH_SECRET || "refresh_secret";
        this.accessTokenExpiry = "15m";
        this.refreshTokenExpiry = "2d";
    }
    generateTokens(user) {
        const payload = {
            id: user._id,
            email: user.email,
            role: user.role,
        };
        const accessToken = jsonwebtoken_1.default.sign(payload, String(this.accessTokenSecret), {
            expiresIn: this.accessTokenExpiry,
        });
        const refreshToken = jsonwebtoken_1.default.sign(payload, String(this.refreshTokenSecret), {
            expiresIn: this.refreshTokenExpiry,
        });
        return { accessToken, refreshToken };
    }
    verifyAccessToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, this.accessTokenSecret);
        }
        catch {
            return null;
        }
    }
    verifyRefreshToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, this.refreshTokenSecret);
        }
        catch {
            return null;
        }
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map