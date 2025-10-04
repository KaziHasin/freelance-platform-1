"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRepository = void 0;
const User_1 = require("@/modules/users/models/User");
const Client_1 = require("../models/Client");
class ClientRepository {
    async create(data) {
        return await Client_1.Client.create(data);
    }
    findById(id) {
        return User_1.User.findById(id)
            .populate({
            path: "client",
            populate: [
                { path: "subscriptions", populate: { path: "packageId", select: "code price" } },
                { path: "contactClickUsage.projectId", select: "name" },
                { path: "projects", select: "title description createdAt" }
            ],
        });
    }
    find(filter, page = 1, limit = 20) {
        return User_1.User.find({ ...filter, role: "CLIENT" })
            .select("name email phone status provider createdAt")
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });
    }
    count(filter) {
        return Client_1.Client.countDocuments(filter);
    }
    update(id, data) {
        return Client_1.Client.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return Client_1.Client.findByIdAndDelete(id);
    }
}
exports.ClientRepository = ClientRepository;
//# sourceMappingURL=ClientRepository.js.map