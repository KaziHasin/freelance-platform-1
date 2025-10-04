"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillMatchingService = void 0;
const enums_1 = require("@/common/types/enums");
const DeveloperRepository_1 = require("@/modules/developers/repositories/DeveloperRepository");
class SkillMatchingService {
    constructor() {
        this.devRepo = new DeveloperRepository_1.DeveloperRepository();
    }
    async getOrderedCandidates(requiredSkillIds, preferredLevel, excludeIds = []) {
        // 1) Try preferred level if provided; else try all levels in order Expert→Mid→Fresher
        const levels = preferredLevel ? [preferredLevel] : [enums_1.DevLevel.EXPERT, enums_1.DevLevel.MID, enums_1.DevLevel.FRESHER];
        for (const lvl of levels) {
            const list = await this.devRepo.candidates(requiredSkillIds, lvl, excludeIds);
            if (list.length)
                return list; // return first non-empty level bucket
        }
        // Fallback: any level
        return this.devRepo.candidates(requiredSkillIds, undefined, excludeIds);
    }
}
exports.SkillMatchingService = SkillMatchingService;
//# sourceMappingURL=SkillMatchingService.js.map