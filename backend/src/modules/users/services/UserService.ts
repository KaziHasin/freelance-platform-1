import { PackageRepository } from '@/modules/packages/repositories/PackageRepository';
import { ClientRepository } from '../../clients/repositories/ClientRepository';
import { UserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcryptjs';

export class UserService {
    constructor(private repo = new UserRepository(), private clientRepo = new ClientRepository(), private packageRepo = new PackageRepository()) { }

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
        return await this.repo.create(toCreate);
    }

    get(id: string) {
        return this.repo.findById(id);
    }
    async list(q?: string, role?: string, status?: string, page = 1, limit = 20) {
        const filter: any = {};

        // Text search on email or phone
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
