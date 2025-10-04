"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthService = void 0;
const google_auth_library_1 = require("google-auth-library");
const UserRepository_1 = require("../repositories/UserRepository");
const AuthService_1 = require("./AuthService");
const DeveloperService_1 = require("@/modules/developers/services/DeveloperService");
const ClientService_1 = require("@/modules/clients/services/ClientService");
class GoogleAuthService {
    constructor() {
        this.userRepo = new UserRepository_1.UserRepository();
        this.client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        this.authService = new AuthService_1.AuthService();
        this.developerService = new DeveloperService_1.DeveloperService();
        this.clientService = new ClientService_1.ClientService();
    }
    async loginOrSignup(data) {
        const ticket = await this.client.verifyIdToken({
            idToken: data.token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload || !payload.email) {
            throw new Error("Invalid Google token");
        }
        let user = await this.userRepo.findByEmail(payload.email);
        if (!user) {
            user = await this.userRepo.create({
                name: payload.name || "Google User",
                email: payload.email,
                provider: "google",
                role: data.role,
                status: "ACTIVE",
            });
        }
        await this.userRepo.update(user._id.toString(), {
            lastLoginAt: new Date(),
        });
        if (user.role === 'DEVELOPER') {
            await this.developerService.create({ userId: user._id });
        }
        if (user.role === 'CLIENT') {
            await this.clientService.create({ userId: user._id });
        }
        const tokens = this.authService.generateTokens(user);
        return { user, tokens };
    }
}
exports.GoogleAuthService = GoogleAuthService;
//# sourceMappingURL=googleAuthService.js.map