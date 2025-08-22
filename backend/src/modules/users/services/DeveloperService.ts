// src/modules/users/services/DeveloperService
import { DeveloperRepository } from '../repositories/DeveloperRepository';

export class DeveloperService {
    constructor(private repo = new DeveloperRepository()) { }

    create(data: any) {
        return this.repo.create(data);
    }
    get(id: string) {
        return this.repo.findById(id);
    }
    async list(q?: string, page = 1, limit = 20) {
        const filter = q ? { 'profile.skills': { $regex: q, $options: 'i' } } : {};
        const [items, total] = await Promise.all([this.repo.find(filter, page, limit), this.repo.count(filter)]);
        return { items, total, page, limit };
    }
    update(id: string, data: any) {
        return this.repo.update(id, data);
    }
    remove(id: string) {
        return this.repo.delete(id);
    }
}
