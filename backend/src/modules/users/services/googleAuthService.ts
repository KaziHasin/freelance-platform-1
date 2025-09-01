import { OAuth2Client, LoginTicket } from "google-auth-library";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "./AuthService";

export class GoogleAuthService {
    private userRepo = new UserRepository();
    private client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    private authService = new AuthService();

    async loginOrSignup(data: { token: string; role: string }) {
        const ticket: LoginTicket = await this.client.verifyIdToken({
            idToken: data.token,
            audience: process.env.GOOGLE_CLIENT_ID as string,
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
                role: data.role as any,
                status: "ACTIVE",
            });
        }

        await this.userRepo.update(user._id.toString(), {
            lastLoginAt: new Date(),
        });

        const tokens = this.authService.generateTokens(user);

        return { user, tokens };
    }
}
