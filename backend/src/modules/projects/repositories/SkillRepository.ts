import { ISkill, Skill } from '../models/Skill';


export class SkillRepository {

    create(data: Partial<ISkill>) {
        return Skill.create(data);
    }

    createMany(data: Partial<ISkill>[]) {
        return Skill.insertMany(data);
    }

    findByNamesLower(namesLower: string[]) {
        return Skill.find({ name: { $in: namesLower } }).lean();
    }

    find(filter: any) {
        return Skill.find(filter);
    }
}