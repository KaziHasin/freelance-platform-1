"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionRepository = void 0;
const enums_1 = require("@/common/types/enums");
const Subscription_1 = require("../models/Subscription");
class SubscriptionRepository {
    async create(data) {
        return await Subscription_1.Subscription.create(data);
    }
    async findById(id) {
        return await Subscription_1.Subscription.findById(id).populate("clientId packageId");
    }
    async findOne(filter, sort = {}) {
        return await Subscription_1.Subscription.findOne(filter).sort(sort).exec();
    }
    async getActiveSubscription(clientId) {
        return Subscription_1.Subscription.findOne({
            clientId,
            status: enums_1.SubscriptionStatus.ACTIVE,
            $or: [
                { endDate: null },
                { endDate: { $gte: new Date() } }
            ]
        }).populate('packageId');
    }
    find(filter, page = 1, limit = 20) {
        return Subscription_1.Subscription.find(filter).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 }).populate([{ path: 'packageId' }, { path: 'paymentId' }]);
    }
    count(filter) {
        return Subscription_1.Subscription.countDocuments(filter);
    }
    async update(id, data) {
        return await Subscription_1.Subscription.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id) {
        return await Subscription_1.Subscription.findByIdAndDelete(id);
    }
}
exports.SubscriptionRepository = SubscriptionRepository;
//# sourceMappingURL=SubscriptionRepository.js.map