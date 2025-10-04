"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperService = void 0;
const SkillService_1 = require("@/modules/projects/services/SkillService");
const DeveloperRepository_1 = require("../repositories/DeveloperRepository");
const enums_1 = require("@/common/types/enums");
class DeveloperService {
    constructor(repo = new DeveloperRepository_1.DeveloperRepository(), skillService = new SkillService_1.SkillService()) {
        this.repo = repo;
        this.skillService = skillService;
    }
    async create(data) {
        // const skills = await this.skillService.resolveSkillIds(data.profile.skills);
        // const toCreate = {
        //     ...data,
        //     profile: {
        //         ...data.profile,
        //         skills: skills,
        //     },
        // };
        return this.repo.create(data);
    }
    get(id) {
        return this.repo.findById(id);
    }
    async list(q, status, page = 1, limit = 20) {
        const filter = {};
        if (q) {
            filter.$or = [
                { email: new RegExp(q, 'i') },
                { phone: new RegExp(q, 'i') },
                { name: new RegExp(q, 'i') }
            ];
        }
        if (status) {
            filter.status = status.toUpperCase();
        }
        const [items, total] = await Promise.all([this.repo.find(filter, page, limit), this.repo.count(filter)]);
        return { items, total, page, limit };
    }
    async update(id, data, files) {
        const skills = await this.skillService.resolveSkillIds(data.profile?.skills || []);
        let verification = {};
        if (data.verification) {
            verification = { ...data.verification };
            if (files?.docFile) {
                verification.docFile = `/uploads/${files.docFile.filename}`;
                verification.docUrl = undefined;
            }
            else if (data.verification.docUrl) {
                verification.docUrl = data.verification.docUrl;
                verification.docFile = undefined;
            }
            if (files?.idFile) {
                verification.idType = `/uploads/${files.idFile.filename}`;
            }
            else if (data.verification.idType) {
                verification.idType = data.verification.idType;
            }
        }
        const toUpdate = {
            ...data,
            verification,
            profile: {
                ...data.profile,
                skills,
            },
        };
        const updated = await this.repo.update(id, toUpdate);
        return updated;
    }
    async updateVerificationStatus(id, status, adminId) {
        const update = {
            $set: {
                "verification.status": enums_1.VerificationStatus[status],
                "verification.reviewedBy": adminId,
                "verification.reviewedAt": new Date(),
            }
        };
        return this.repo.update(id, update);
    }
    remove(id) {
        return this.repo.delete(id);
    }
}
exports.DeveloperService = DeveloperService;
//# sourceMappingURL=DeveloperService.js.map