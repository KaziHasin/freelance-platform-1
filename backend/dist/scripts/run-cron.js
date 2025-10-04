"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// scripts/run-cron.ts
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const AssignmentCronService_1 = require("../modules/projects/services/AssignmentCronService");
dotenv_1.default.config();
(async () => {
    try {
        // 1. Connect to MongoDB
        const uri = process.env.MONGO_URI || "mongodb://localhost:27017/freelancer-platform";
        await mongoose_1.default.connect(uri);
        console.log("✅ Connected to MongoDB");
        // 2. Run cron once
        const cronService = new AssignmentCronService_1.AssignmentCronService();
        await cronService.runOnce(); // your helper that calls cronRotateExpired
        console.log("✅ Cron ran successfully");
        // 3. Close DB connection
        await mongoose_1.default.disconnect();
        console.log("✅ Disconnected");
        process.exit(0);
    }
    catch (err) {
        console.error("❌ Cron failed", err);
        process.exit(1);
    }
})();
//# sourceMappingURL=run-cron.js.map