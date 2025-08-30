import { Subscription, ISubscription } from "../models/Subscription";
import { FilterQuery, Types } from "mongoose";

export class SubscriptionRepository {
    async create(data: Partial<ISubscription>) {
        return await Subscription.create(data);
    }

    async findById(id: string) {
        return await Subscription.findById(id).populate("clientId packageId");
    }

    find(filter: any, page = 1, limit = 20) {
        return Subscription.find(filter).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 });
    }
    count(filter: any) {
        return Subscription.countDocuments(filter);
    }
    async update(id: string, data: FilterQuery<ISubscription>) {
        return await Subscription.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string) {
        return await Subscription.findByIdAndDelete(id);
    }
}
