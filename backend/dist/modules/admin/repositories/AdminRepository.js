"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const Client_1 = require("../../clients/models/Client");
const Developer_1 = require("../../developers/models/Developer");
const Project_1 = require("../../projects/models/Project");
const Subscription_1 = require("../../subscriptions/models/Subscription");
class AdminRepository {
    async getDashboard() {
        const activeClients = await Client_1.Client.countDocuments({ "verification.status": "APPROVED" });
        const activeDevs = await Developer_1.Developer.countDocuments({ "verification.status": "APPROVED" });
        const fresherDevs = await Developer_1.Developer.countDocuments({ level: "FRESHER" });
        const intermediateDevs = await Developer_1.Developer.countDocuments({ level: "INTERMEDIATE" });
        const expertDevs = await Developer_1.Developer.countDocuments({ level: "EXPERT" });
        const projects = await Project_1.Project.countDocuments();
        const revenue = await Subscription_1.Subscription.aggregate([{ $group: { _id: null, total: { $sum: "$amount" } } }]);
        return { activeClients, activeDevs, fresherDevs, intermediateDevs, expertDevs, projects, revenue: revenue[0]?.total || 0 };
    }
}
exports.AdminRepository = AdminRepository;
//# sourceMappingURL=AdminRepository.js.map