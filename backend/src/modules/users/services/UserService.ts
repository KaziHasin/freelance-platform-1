import { ClientRepository } from '../repositories/ClientRepository';
import { UserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcryptjs';

export class UserService {
    constructor(private repo = new UserRepository(), private clientRepo = new ClientRepository()) { }

    async create(data: any) {
        if (data.email) {
            const existing = await this.repo.findOne({ email: data.email });
            if (existing) {
                const err: any = new Error('Email already exists');
                err.field = 'email';
                throw err;
            }
        }
        const toCreate = { ...data };
        if (data.password) {
            toCreate.passwordHash = await bcrypt.hash(data.password, 10);
            delete toCreate.password;
        }
        const user = await this.repo.create(toCreate);
        if (user.role === 'CLIENT') {
            this.clientRepo.create({
                userId: user._id,
                activePackageSnapshot: {
                    code: 'FREE',
                    projectsPerMonth: null,
                    contactClicksPerProject: null
                }
            });
        }
        return user;
    }

    get(id: string) {
        return this.repo.findById(id);
    }

    async list(q?: string, page = 1, limit = 20) {
        const filter = q
            ? { $or: [{ email: new RegExp(q, 'i') }, { phone: new RegExp(q, 'i') }] }
            : {};
        const [items, total] = await Promise.all([this.repo.find(filter, page, limit), this.repo.count(filter)]);
        return { items, total, page, limit };
    }

    async update(id: string, data: any) {
        const toUpdate = { ...data };
        if (data.password) {
            toUpdate.passwordHash = await bcrypt.hash(data.password, 10);
            delete toUpdate.password;
        }
        return this.repo.update(id, toUpdate);
    }

    remove(id: string) {
        return this.repo.delete(id);
    }
}
