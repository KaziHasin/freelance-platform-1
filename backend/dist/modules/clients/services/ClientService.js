"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const PackageRepository_1 = require("@/modules/packages/repositories/PackageRepository");
const ClientRepository_1 = require("../repositories/ClientRepository");
const SubscriptionRepository_1 = require("@/modules/subscriptions/repositories/SubscriptionRepository");
class ClientService {
    constructor(repo = new ClientRepository_1.ClientRepository(), packageRepo = new PackageRepository_1.PackageRepository(), subscriptionRepo = new SubscriptionRepository_1.SubscriptionRepository()) {
        this.repo = repo;
        this.packageRepo = packageRepo;
        this.subscriptionRepo = subscriptionRepo;
    }
    async create(data) {
        const client = await this.repo.create(data);
        const freePackage = await this.packageRepo.findOne({ code: 'FREE' });
        if (freePackage) {
            const subscriptionData = {
                clientId: client._id,
                packageId: freePackage._id,
                startDate: new Date(),
                isTrial: true,
            };
            await this.subscriptionRepo.create(subscriptionData);
        }
        return client;
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
        const [items, total] = await Promise.all([
            this.repo.find(filter, page, limit),
            this.repo.count(filter)
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
exports.ClientService = ClientService;
//# sourceMappingURL=ClientService.js.map