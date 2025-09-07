import { SkillService } from '@/modules/projects/services/SkillService';
import { DeveloperRepository } from '../repositories/DeveloperRepository';

export class DeveloperService {
    constructor(private repo = new DeveloperRepository(), private skillService = new SkillService()) { }

    async create(data: any) {
        const skills = await this.skillService.resolveSkillIds(data.profile.skills);
        const toCreate = {
            ...data,
            profile: {
                ...data.profile,
                skills: skills,
            },
        };
        return this.repo.create(toCreate);
    }
    get(id: string) {
        return this.repo.findById(id);
    }
    async list(q?: string, page = 1, limit = 20) {
        const filter = q ? { 'profile.skills': { $regex: q, $options: 'i' } } : {};
        const [items, total] = await Promise.all([this.repo.find(filter, page, limit), this.repo.count(filter)]);
        return { items, total, page, limit };
    }
    async update(id: string, data: any) {
        const skills = await this.skillService.resolveSkillIds(data.profile.skills);
        const toCreate = {
            ...data,
            profile: {
                ...data.profile,
                skills: skills,
            },
        };
        return this.repo.update(id, toCreate);
    }
    remove(id: string) {
        return this.repo.delete(id);
    }
}
