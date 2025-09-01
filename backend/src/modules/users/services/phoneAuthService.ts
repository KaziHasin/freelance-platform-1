import { IUser } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";
import crypto from "crypto";
import { AuthService } from "./AuthService";


export interface OtpResponse {
    message: string;
    otp: string;
};

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

export interface VerifyOtpResponse {
    user: IUser;
    tokens: AuthTokens;
}


export class PhoneAuthService {
    private userRepo = new UserRepository();
    private authService = new AuthService();

    /**
     * Step 1: Request OTP (for both signup & login)
     * @param data { phone, role }
     * @returns { message, otp } 
     */
    async requestOtp(data: any): Promise<OtpResponse> {
        const { phone, role } = data;
        let user = await this.userRepo.findByPhone(phone);

        if (!user) {
            user = await this.userRepo.create({
                name: "Unknown",
                phone,
                provider: "phone",
                role: role as any,
                status: "PENDING",
            });
        }


        const otp = (crypto.randomInt(100000, 999999)).toString();

        await this.userRepo.update(user._id.toString(), {
            otp,
            otpExpiresAt: new Date(Date.now() + 5 * 60 * 1000),
        });

        // TODO: send otp via SMS provider later
        return { message: "OTP generated", otp }; // return otp for dev only
    }

    /**
     * Step 2: Verify OTP (signup/login combined)
     * @param data {phone, otp}
     * @returns IUser
     */
    async verifyOtp(data: any): Promise<VerifyOtpResponse> {
        const { phone, otp } = data;
        const user = await this.userRepo.findByPhone(phone);
        if (!user) throw new Error("Phone not registered");

        if (!user.otp || !user.otpExpiresAt) throw new Error("OTP not requested");
        if (user.otpExpiresAt < new Date()) throw new Error("OTP expired");
        if (user.otp !== otp) throw new Error("Invalid OTP");

        await this.userRepo.update(user._id.toString(), {
            otp: null,
            otpExpiresAt: null,
            status: "ACTIVE",
            lastLoginAt: new Date(),
        });

        const tokens = this.authService.generateTokens(user);

        return { user, tokens };
    }
}
