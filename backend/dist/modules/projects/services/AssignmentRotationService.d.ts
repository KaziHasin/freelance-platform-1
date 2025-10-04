import { SkillMatchingService } from './SkillMatchingService';
import { ProjectRepository } from '../repositories/ProjectRepository';
export declare class AssignmentRotationService {
    private skillMatching;
    private projectRepo;
    constructor(skillMatching?: SkillMatchingService, projectRepo?: ProjectRepository);
    private ROTATION_WINDOW_MS;
    assignOrRotate(projectId: string, requiredSkillIds: string[], preferredLevel?: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Assignment").IAssignment, {}, {}> & import("../models/Assignment").IAssignment & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    accept(projectId: string, developerId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Assignment").IAssignment, {}, {}> & import("../models/Assignment").IAssignment & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    reject(projectId: string, developerId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/Assignment").IAssignment, {}, {}> & import("../models/Assignment").IAssignment & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
    cronRotateExpired(): Promise<void>;
    private getProjectSkillIds;
    private getProjectPreferredLevel;
}
//# sourceMappingURL=AssignmentRotationService.d.ts.map