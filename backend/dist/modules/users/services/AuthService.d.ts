import jwt from "jsonwebtoken";
import { IUser } from "../models/User";
export declare class AuthService {
    private accessTokenSecret;
    private refreshTokenSecret;
    private accessTokenExpiry;
    private refreshTokenExpiry;
    generateTokens(user: IUser): {
        accessToken: string;
        refreshToken: string;
    };
    verifyAccessToken(token: string): string | jwt.JwtPayload | null;
    verifyRefreshToken(token: string): string | jwt.JwtPayload | null;
}
//# sourceMappingURL=AuthService.d.ts.map