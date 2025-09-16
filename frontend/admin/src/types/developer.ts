export interface Developer {
    _id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    status: string;


    verification: {
        status: "APPROVED" | "REJECTED" | "PENDING";
        reviewedBy: {
            _id: string;
            name: string;
            email: string;
        };
    };

}

export interface DeveloperListResponse {
    items: Developer[];
    total: number;
    page: number;
    limit: number;
}

