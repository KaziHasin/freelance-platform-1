"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const AdminRepository_1 = require("../repositories/AdminRepository");
class AdminService {
    constructor() {
        this.repo = new AdminRepository_1.AdminRepository();
    }
    async getDashboard() {
        return this.repo.getDashboard();
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=AdminService.js.map