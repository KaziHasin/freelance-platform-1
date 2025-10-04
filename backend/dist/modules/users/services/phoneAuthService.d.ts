import { IUser } from "../models/User";
export interface OtpResponse {
    message: string;
    otp: string;
}
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}
export interface VerifyOtpResponse {
    user: IUser;
    tokens: AuthTokens;
}
export declare class PhoneAuthService {
    private userRepo;
    private authService;
    private developerService;
    private clientService;
    /**
     * Step 1: Request OTP (for both signup & login)
     * @param data { phone, role }
     * @returns { message, otp }
     */
    requestOtp(data: any): Promise<OtpResponse>;
    /**
     * Step 2: Verify OTP (signup/login combined)
     * @param data {phone, otp}
     * @returns IUser
     */
    verifyOtp(data: any): Promise<VerifyOtpResponse>;
}
//# sourceMappingURL=phoneAuthService.d.ts.map