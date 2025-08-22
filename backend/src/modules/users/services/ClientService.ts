// src/modules/users/services/ClientService
import { ClientRepository } from '../repositories/ClientRepository';

export class ClientService {
    constructor(private repo = new ClientRepository()) { }

    create(data: any) {
        return this.repo.create(data);
    }
    get(id: string) {
        return this.repo.findById(id);
    }
    async list(q?: string, page = 1, limit = 20) {
        const filter = q
            ? {
                $or: [
                    { 'activePackageSnapshot.code': new RegExp(q, 'i') },
                    // allow searching by project id presence if q looks like an ObjectId
                ],
            }
            : {};
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
