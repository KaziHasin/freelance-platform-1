import { IProjectAssignment } from "../models/ProjectAssignment";
export declare class ProjectAssignmentRepository {
    create(data: Partial<IProjectAssignment>): Promise<import("mongoose").Document<unknown, {}, IProjectAssignment, {}, {}> & IProjectAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findByProjectId(projectId: string): Promise<(import("mongoose").Document<unknown, {}, IProjectAssignment, {}, {}> & IProjectAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    updateStatus(id: string, status: string): Promise<(import("mongoose").Document<unknown, {}, IProjectAssignment, {}, {}> & IProjectAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
//# sourceMappingURL=ProjectAssignmentRepository.d.ts.map