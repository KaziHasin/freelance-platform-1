import { Developer } from '../models/Developer';
import type { IDeveloper } from '../models/Developer';

export class DeveloperRepository {
    create(data: Partial<IDeveloper>) {
        return Developer.create(data);
    }
    findById(id: string) {
        return Developer.findById(id).populate('userId', 'email phone roles status');
    }
    find(filter: any, page = 1, limit = 20) {
        return Developer.find(filter)
            .populate('userId', 'email phone roles status')
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });
    }
    count(filter: any) {
        return Developer.countDocuments(filter);
    }
    update(id: string, data: Partial<IDeveloper>) {
        return Developer.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id: string) {
        return Developer.findByIdAndDelete(id);
    }
}
