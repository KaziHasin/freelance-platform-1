"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillRepository = void 0;
const Skill_1 = require("../models/Skill");
class SkillRepository {
    create(data) {
        return Skill_1.Skill.create(data);
    }
    createMany(data) {
        return Skill_1.Skill.insertMany(data);
    }
    findByNamesLower(namesLower) {
        return Skill_1.Skill.find({ name: { $in: namesLower } }).lean();
    }
    find(filter, page = 1, limit = 20) {
        return Skill_1.Skill.find(filter).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 });
    }
    count(filter) {
        return Skill_1.Skill.countDocuments(filter);
    }
    delete(id) {
        return Skill_1.Skill.findByIdAndDelete(id);
    }
}
exports.SkillRepository = SkillRepository;
//# sourceMappingURL=SkillRepository.js.map