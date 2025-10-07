export interface Skill {
    _id: string;
    name: string;
    label: string;
}

export interface skillsResponse {
    items: Skill[];
    page: number;
    limit: number;
}

export interface ResolveSkillsRequest {
    tags: string[];
}

export interface ResolveSkillsResponse {
    skillIds: string[];
}