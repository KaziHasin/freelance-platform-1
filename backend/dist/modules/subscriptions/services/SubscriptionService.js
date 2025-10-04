"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const enums_1 = require("@/common/types/enums");
const SubscriptionRepository_1 = require("../repositories/SubscriptionRepository");
class SubscriptionService {
    constructor(repo = new SubscriptionRepository_1.SubscriptionRepository()) {
        this.repo = repo;
    }
    create(data) {
        return this.repo.create(data);
    }
    get(id) {
        return this.repo.findById(id);
    }
    async list(q, page = 1, limit = 20) {
        const filter = q ? { '': { $regex: q, $options: 'i' } } : {};
        const [items, total] = await Promise.all([this.repo.find(filter, page, limit), this.repo.count(filter)]);
        return { items, total, page, limit };
    }
    async listByClient(clientId, status, page = 1, limit = 20) {
        const filter = { clientId };
        if (status) {
            if (status === enums_1.SubscriptionStatus.ACTIVE) {
                filter.$or = [
                    { status: enums_1.SubscriptionStatus.ACTIVE },
                    { isTrial: true }
                ];
            }
            else {
                filter.status = status;
            }
        }
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
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=SubscriptionService.js.map