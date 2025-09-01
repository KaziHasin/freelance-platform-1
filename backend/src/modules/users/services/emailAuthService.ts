import bcrypt from "bcryptjs";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "./AuthService";

export class EmailAuthService {
    private userRepo = new UserRepository();
    private authService = new AuthService();

    async signup(data: { name: string; email: string; password: string; role: string }) {
        const existing = await this.userRepo.findByEmail(data.email);
        if (existing) throw new Error("Email already exists");

        const hash = await bcrypt.hash(data.password, 10);
        const user = await this.userRepo.create({
            name: data.name,
            email: data.email,
            passwordHash: hash,
            provider: "local",
            role: data.role as any,
            status: "ACTIVE",
        });

        const tokens = this.authService.generateTokens(user);
        return { user, tokens };
    }

    async login(data: { email: string; password: string }) {
        const user = await this.userRepo.findByEmail(data.email);
        if (!user) throw new Error("Invalid credentials");

        const match = await bcrypt.compare(data.password, user.passwordHash!);
        if (!match) throw new Error("Invalid credentials");

        await this.userRepo.update(user._id.toString(), { lastLoginAt: new Date() });

        const tokens = this.authService.generateTokens(user);

        return { user, tokens };
    }
}
