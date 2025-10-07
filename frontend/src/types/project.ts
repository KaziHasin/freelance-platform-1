import { AssignmentStatus, DevLevel } from "./enums";

export interface Skill {
    _id: string;
    name: string;
    label: string;
}

export interface Client {
    _id: string;
    email: string;
    name: string
};

export interface Developer {
    _id: string;
    email: string;
    name: string;
};

export interface Project {
    _id: string;
    title: string;
    description: string;
    requiredSkillIds: Skill;
    preferredLevel?: string;
    agreementFileUrl?: string;
    clientId: Client;
    createdAt: string;
    updatedAt: string;
}

export interface Assignment {
    _id: string;
    projectId: Project;
    developerId: Developer;
    status: AssignmentStatus;
    assignedAt: Date;
    respondedAt?: Date;
    triedDeveloperIds: Developer[];
}

export interface ProjectListResponse {
    items: Project[];
    total: number;
    page: number;
    limit: number;
}

export interface ProjectDetailResponse {
    project: Project;
}

export interface CreateProjectRequest {
    title: string;
    description: string;
    requiredSkillIds: { label: string; value: string }[];
    clientId: string;
    preferredLevel?: DevLevel;
    agreementFileUrl?: FileList;
}

export interface CreateProjectResponse {
    project: Project;
    assignment: Assignment
}

export interface UpdateProjectRequest extends Partial<CreateProjectRequest> {
    id: string;
}

export interface DeleteProjectResponse {
    success: boolean;
    message?: string;
}