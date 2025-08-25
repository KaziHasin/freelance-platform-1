import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import usersRoutes from "./modules/users/routes";
import projectRoutes from "./modules/project/routes";
import packagesRoutes from './modules/packages/routes';
import { errorMiddleware } from "./common/middleware/errorMiddleware";

const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Health Check ---
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));

app.use("/api/v1", usersRoutes);
app.use('/api/v1', packagesRoutes);
app.use("/api/v1", projectRoutes);

app.use(errorMiddleware);


export default app;
