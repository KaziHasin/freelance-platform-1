"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneAuthService = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
const crypto_1 = __importDefault(require("crypto"));
const AuthService_1 = require("./AuthService");
const DeveloperService_1 = require("@/modules/developers/services/DeveloperService");
const ClientService_1 = require("@/modules/clients/services/ClientService");
;
class PhoneAuthService {
    constructor() {
        this.userRepo = new UserRepository_1.UserRepository();
        this.authService = new AuthService_1.AuthService();
        this.developerService = new DeveloperService_1.DeveloperService();
        this.clientService = new ClientService_1.ClientService();
    }
    /**
     * Step 1: Request OTP (for both signup & login)
     * @param data { phone, role }
     * @returns { message, otp }
     */
    async requestOtp(data) {
        const { phone, role } = data;
        let user = await this.userRepo.findByPhone(phone);
        if (!user) {
            user = await this.userRepo.create({
                name: "Unknown",
                phone,
                provider: "phone",
                role: role,
                status: "ACTIVE",
            });
        }
        const otp = (crypto_1.default.randomInt(100000, 999999)).toString();
        await this.userRepo.update(user._id.toString(), {
            otp,
            otpExpiresAt: new Date(Date.now() + 5 * 60 * 1000),
        });
        if (user.role === 'DEVELOPER') {
            await this.developerService.create({ userId: user._id });
        }
        if (user.role === 'CLIENT') {
            await this.clientService.create({ userId: user._id });
        }
        // TODO: send otp via SMS provider later
        return { message: "OTP generated", otp }; // return otp for dev only
    }
    /**
     * Step 2: Verify OTP (signup/login combined)
     * @param data {phone, otp}
     * @returns IUser
     */
    async verifyOtp(data) {
        const { phone, otp } = data;
        const user = await this.userRepo.findByPhone(phone);
        if (!user)
            throw new Error("Phone not registered");
        if (!user.otp || !user.otpExpiresAt)
            throw new Error("OTP not requested");
        if (user.otpExpiresAt < new Date())
            throw new Error("OTP expired");
        if (user.otp !== otp)
            throw new Error("Invalid OTP");
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
exports.PhoneAuthService = PhoneAuthService;
//# sourceMappingURL=phoneAuthService.js.map