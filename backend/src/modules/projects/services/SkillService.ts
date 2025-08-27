import { SkillRepository } from '../repositories/SkillRepository';

export class SkillService {
    private repo = new SkillRepository();

    // Tag-input behavior: upsert skills and return ids
    async resolveSkillIds(tags: string[]) {
        const normalized = tags
            .map(t => t.trim())
            .filter(Boolean)
            .map(t => ({ name: t.toLowerCase(), label: t }));

        const namesLower = [...new Set(normalized.map(n => n.name))];
        const existing = await this.repo.findByNamesLower(namesLower);
        const existingMap = new Map(existing.map(s => [s.name, s]));

        const toCreate = normalized.filter(n => !existingMap.has(n.name));

        const created = toCreate.length ? await this.repo.createMany(toCreate) : [];

        const all = [...existing, ...created];
        const idByName = new Map(all.map(s => [s.name, s._id.toString()]));

        return namesLower.map(n => idByName.get(n)!);
    }
}
