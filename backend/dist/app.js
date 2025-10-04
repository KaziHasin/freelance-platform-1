"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./modules/users/routes"));
const routes_2 = __importDefault(require("./modules/clients/routes"));
const routes_3 = __importDefault(require("./modules/developers/routes"));
const routes_4 = __importDefault(require("./modules/subscriptions/routes"));
const routes_5 = __importDefault(require("./modules/projects/routes"));
const routes_6 = __importDefault(require("./modules/packages/routes"));
const routes_7 = __importDefault(require("./modules/payments/routes"));
const errorMiddleware_1 = require("./common/middleware/errorMiddleware");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// --- Health Check ---
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));
app.use("/api/v1", routes_1.default);
app.use("/api/v1", routes_2.default);
app.use("/api/v1", routes_3.default);
app.use('/api/v1', routes_6.default);
app.use('/api/v1', routes_4.default);
app.use("/api/v1", routes_5.default);
app.use("/api/v1", routes_7.default);
// Serve React build
app.use(express_1.default.static(path_1.default.join(__dirname, "../frontend-build")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../frontend-build/index.html"));
});
app.use(errorMiddleware_1.errorMiddleware);
exports.default = app;
//# sourceMappingURL=app.js.map