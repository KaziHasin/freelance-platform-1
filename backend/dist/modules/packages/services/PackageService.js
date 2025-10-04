"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageService = void 0;
const PackageRepository_1 = require("../repositories/PackageRepository");
class PackageService {
    constructor(repo = new PackageRepository_1.PackageRepository()) {
        this.repo = repo;
    }
    async create(data) {
        const existing = await this.repo.findOne({ code: data.code });
        if (existing) {
            const err = new Error('Code already exists');
            err.field = 'code';
            throw err;
        }
        return this.repo.create(data);
    }
    get(id) {
        return this.repo.findById(id);
    }
    async list(q, page = 1, limit = 20) {
        const filter = q
            ? { $or: [{ code: new RegExp(q, 'i') }, { notes: new RegExp(q, 'i') }] }
            : {};
        const [items, total] = await Promise.all([
            this.repo.find(filter, page, limit),
            this.repo.count(filter),
        ]);
        return { items, total, page, limit };
    }
    update(id, data) {
        return this.repo.update(id, data);
    }
    remove(id) {
        return this.repo.delete(id);
    }
}
exports.PackageService = PackageService;
//# sourceMappingURL=PackageService.js.map