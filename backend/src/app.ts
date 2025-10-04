import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import usersRoutes from "./modules/users/routes";
import clientRoutes from "./modules/clients/routes";
import developerRoutes from "./modules/developers/routes";
import subscriptionRoutes from "./modules/subscriptions/routes";
import projectRoutes from "./modules/projects/routes";
import packagesRoutes from './modules/packages/routes';
import paymentRoutes from "./modules/payments/routes";
import { errorMiddleware } from "./common/middleware/errorMiddleware";

const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// --- Health Check ---
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));

app.use("/api/v1", usersRoutes);
app.use("/api/v1", clientRoutes);
app.use("/api/v1", developerRoutes);
app.use('/api/v1', packagesRoutes);
app.use('/api/v1', subscriptionRoutes);
app.use("/api/v1", projectRoutes);
app.use("/api/v1", paymentRoutes);

// Serve React build
app.use(express.static(path.join(__dirname, "../frontend-build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend-build/index.html"));
});

app.use(errorMiddleware);


export default app;
