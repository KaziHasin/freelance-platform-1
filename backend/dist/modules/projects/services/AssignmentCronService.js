"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentCronService = void 0;
const AssignmentRotationService_1 = require("./AssignmentRotationService");
const node_cron_1 = __importDefault(require("node-cron"));
class AssignmentCronService {
    constructor() {
        this.assignmentRotation = new AssignmentRotationService_1.AssignmentRotationService();
    }
    boot() {
        // run every minute
        node_cron_1.default.schedule('* * * * *', async () => {
            try {
                await this.assignmentRotation.cronRotateExpired();
            }
            catch (e) {
                console.error('cron error', e);
            }
        });
    }
    async runOnce() {
        await this.assignmentRotation.cronRotateExpired();
    }
}
exports.AssignmentCronService = AssignmentCronService;
//# sourceMappingURL=AssignmentCronService.js.map