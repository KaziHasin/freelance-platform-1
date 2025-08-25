import { ProjectRepository } from "../repositories/ProjectRepository";

export class ProjectService {
  private projectRepo = new ProjectRepository();

  async createProject(data: any) {
    // Add business logic if needed
    return this.projectRepo.create(data);
  }

  async getProject(id: string) {
    return this.projectRepo.findById(id);
  }

  async listProjects(q?: string, page = 1, limit = 20) {
    const filter = q
      ? {
          $or: [
            { title: new RegExp(q, "i") },
            { description: new RegExp(q, "i") },
          ],
        }
      : {};
    const [items, total] = await Promise.all([
      this.projectRepo.find(filter, page, limit),
      this.projectRepo.count(filter),
    ]);
    return { items, total, page, limit };
  }

  async updateProject(id: string, data: any) {
    return this.projectRepo.update(id, data);
  }

  async deleteProject(id: string) {
    return this.projectRepo.delete(id);
  }
}
