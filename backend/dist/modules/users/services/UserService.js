"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const ClientService_1 = require("@/modules/clients/services/ClientService");
const DeveloperService_1 = require("@/modules/developers/services/DeveloperService");
class UserService {
    constructor(repo = new UserRepository_1.UserRepository(), clientService = new ClientService_1.ClientService(), developerService = new DeveloperService_1.DeveloperService()) {
        this.repo = repo;
        this.clientService = clientService;
        this.developerService = developerService;
    }
    async create(data) {
        if (data.email) {
            const existing = await this.repo.findOne({ email: data.email });
            if (existing) {
                const err = new Error('Email already exists');
                err.field = 'email';
                throw err;
            }
        }
        const toCreate = { ...data };
        if (data.password) {
            toCreate.passwordHash = await bcryptjs_1.default.hash(data.password, 10);
            delete toCreate.password;
        }
        const user = await this.repo.create(toCreate);
        if (user.role === 'CLIENT') {
            await this.clientService.create({ userId: user._id });
        }
        if (user.role === 'DEVELOPER') {
            await this.developerService.create({ userId: user._id });
        }
        return user;
    }
    get(id) {
        return this.repo.findById(id);
    }
    async list(q, role, status, page = 1, limit = 20) {
        const filter = {};
        if (q) {
            filter.$or = [
                { email: new RegExp(q, 'i') },
                { phone: new RegExp(q, 'i') },
                { name: new RegExp(q, 'i') }
            ];
        }
        if (role) {
            filter.role = role.toUpperCase();
        }
        if (status) {
            filter.status = status.toUpperCase();
        }
        const [items, total] = await Promise.all([
            this.repo.find(filter, page, limit),
            this.repo.count(filter)
        ]);
        return { items, total, page, limit };
    }
    async update(id, data) {
        const { name, email, phone } = data;
        const toUpdate = { name, email, phone };
        return this.repo.update(id, toUpdate);
    }
    remove(id) {
        return this.repo.delete(id);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map