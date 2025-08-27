import { ClientRepository } from "@/modules/users/repositories/ClientRepository";
import { ProjectRepository } from "../repositories/ProjectRepository";
import { AssignmentRotationService } from "./AssignmentRotationService";
import { SkillService } from "./SkillService";
import { PackageRepository } from "@/modules/packages/repositories/PackageRepository";

export class ProjectService {

  constructor(private projectRepo = new ProjectRepository(), private skillService = new SkillService(), private clientRepo = new ClientRepository(), private packageRepo = new PackageRepository()) { }


  async createProject(data: any) {
    const requiredSkillIds = await this.skillService.resolveSkillIds(data.requiredSkillIds);
    const toCreate = { ...data, requiredSkillIds };
    return this.projectRepo.create(toCreate);
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
