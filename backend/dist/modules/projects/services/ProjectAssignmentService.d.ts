export declare class ProjectAssignmentService {
    private assignmentRepo;
    assignDeveloper(data: any): Promise<import("mongoose").Document<unknown, {}, import("../models/ProjectAssignment").IProjectAssignment, {}, {}> & import("../models/ProjectAssignment").IProjectAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getAssignmentsByProject(projectId: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/ProjectAssignment").IProjectAssignment, {}, {}> & import("../models/ProjectAssignment").IProjectAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    updateAssignmentStatus(id: string, status: string): Promise<(import("mongoose").Document<unknown, {}, import("../models/ProjectAssignment").IProjectAssignment, {}, {}> & import("../models/ProjectAssignment").IProjectAssignment & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
//# sourceMappingURL=ProjectAssignmentService.d.ts.map