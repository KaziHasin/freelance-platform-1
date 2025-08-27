import { Router } from "express";
import {
  createProject,
  listProjects,
  getProject,
  updateProject,
  deleteProject,
  assignProject,
  revealContact,
  leaveReview,
} from "./controllers/ProjectController";
import { resolve, search } from "./controllers/SkillController";

const router = Router();

router.post("/projects", ...createProject);
router.get("/projects", ...listProjects);
router.get("/projects/:id", getProject);
router.put("/projects/:id", ...updateProject);
router.delete("/projects/:id", deleteProject);

// Assignment and contact reveal
router.post("/projects/:id/assign", assignProject);
router.post("/projects/:id/reveal-contact", revealContact);

// Reviews
router.post("/projects/:id/review", leaveReview);

router.post('/skills/resolve', resolve);
router.get('/skills', search);

export default router;
