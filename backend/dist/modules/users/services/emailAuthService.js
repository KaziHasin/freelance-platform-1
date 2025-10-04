"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserRepository_1 = require("../repositories/UserRepository");
const AuthService_1 = require("./AuthService");
const DeveloperService_1 = require("@/modules/developers/services/DeveloperService");
const ClientService_1 = require("@/modules/clients/services/ClientService");
class EmailAuthService {
    constructor() {
        this.userRepo = new UserRepository_1.UserRepository();
        this.authService = new AuthService_1.AuthService();
        this.developerService = new DeveloperService_1.DeveloperService();
        this.clientService = new ClientService_1.ClientService();
    }
    async signup(data) {
        const existing = await this.userRepo.findByEmail(data.email);
        if (existing)
            throw new Error("Email already exists");
        const hash = await bcryptjs_1.default.hash(data.password, 10);
        const user = await this.userRepo.create({
            name: data.name,
            email: data.email,
            passwordHash: hash,
            provider: "local",
            role: data.role,
            status: "ACTIVE",
        });
        if (user.role === 'DEVELOPER') {
            await this.developerService.create({ userId: user._id });
        }
        if (user.role === 'CLIENT') {
            await this.clientService.create({ userId: user._id });
        }
        const tokens = this.authService.generateTokens(user);
        const { passwordHash, __v, ...safeUser } = user.toObject();
        return { user: safeUser, tokens };
    }
    async login(data) {
        const user = await this.userRepo.findByEmail(data.email);
        if (!user)
            throw new Error("Invalid credentials");
        const match = await bcryptjs_1.default.compare(data.password, user.passwordHash);
        if (!match)
            throw new Error("Invalid credentials");
        await this.userRepo.update(user._id.toString(), { lastLoginAt: new Date() });
        const tokens = this.authService.generateTokens(user);
        const { passwordHash, __v, ...safeUser } = user.toObject();
        return { user: safeUser, tokens };
    }
}
exports.EmailAuthService = EmailAuthService;
//# sourceMappingURL=emailAuthService.js.map