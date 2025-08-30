import { Client } from '../models/Client';
import type { IClient } from '../models/Client';

export class ClientRepository {
    create(data: Partial<IClient>) {
        return Client.create(data);
    }
    findById(id: string) {
        return Client.findById(id).populate('userId', 'email phone roles status');
    }
    find(filter: any, page = 1, limit = 20) {
        return Client.find(filter)
            .populate('userId', 'email phone roles status')
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });
    }
    count(filter: any) {
        return Client.countDocuments(filter);
    }
    update(id: string, data: Partial<IClient>) {
        return Client.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id: string) {
        return Client.findByIdAndDelete(id);
    }
}
