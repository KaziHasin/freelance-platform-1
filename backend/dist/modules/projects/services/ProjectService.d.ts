import { ProjectRepository } from "../repositories/ProjectRepository";
import { AssignmentRotationService } from "./AssignmentRotationService";
import { SkillService } from "./SkillService";
import { SubscriptionRepository } from "@/modules/subscriptions/repositories/SubscriptionRepository";
import { Types } from "mongoose";
export declare class ProjectService {
    private projectRepo;
    private skillService;
    private subscriptionRepo;
    private assignmentRotation;
    constructor(projectRepo?: ProjectRepository, skillService?: SkillService, subscriptionRepo?: SubscriptionRepository, assignmentRotation?: AssignmentRotationService);
    createProject(data: any): Promise<{
        project: import("mongoose").Document<unknown, {}, import("../models/Project").IProject, {}, {}> & import("../models/Project").IProject & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        assignment: (import("mongoose").Document<unknown, {}, import("../models/Assignment").IAssignment, {}, {}> & import("../models/Assignment").IAssignment & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        }) | null;
    }>;
    getProject(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Project").IProject, {}, {}> & import("../models/Project").IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    listProjects(q?: string, page?: number, limit?: number): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("../models/Project").IProject, {}, {}> & import("../models/Project").IProject & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    updateProject(id: string, data: any): Promise<(import("mongoose").Document<unknown, {}, import("../models/Project").IProject, {}, {}> & import("../models/Project").IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteProject(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Project").IProject, {}, {}> & import("../models/Project").IProject & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
//# sourceMappingURL=ProjectService.d.ts.map