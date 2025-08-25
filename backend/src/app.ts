import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
// import morgan from 'morgan';
// import rateLimiter from './config/rateLimiter';
// import { errorMiddleware } from './common/errors/errorMiddleware';

// Routes
import usersRoutes from "./modules/users/routes";
import projectRoutes from "./modules/project/routes";
import { errorMiddleware } from "./common/middleware/errorMiddleware";

const app = express();

// --- Global Middleware ---
app.use(helmet()); // Security headers
app.use(cors()); // Allow cross-origin (configure for prod)
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
// app.use(morgan('dev')); // HTTP request logger (dev only)
// app.use(rateLimiter); // Rate limiter for brute-force protection

// --- Health Check ---
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));

// --- API Routes ---
app.use("/api/v1", usersRoutes);
app.use("/api/v1", projectRoutes);

app.use(errorMiddleware);

// --- Error Handling ---
// app.use(errorMiddleware);

export default app;
