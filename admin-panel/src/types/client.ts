export interface Client {
    _id: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    freeTrialUsed: boolean;
    contactClickUsage: any[];

    verification: {
        status: "APPROVED" | "REJECTED" | "PENDING";
        reviewedBy: {
            _id: string;
            name: string;
            email: string;
        };
    };

    subscriptions: {
        _id: string;
        clientId: string;
        packageId: {
            _id: string;
            code: string;
            prices: number;
        };
        status: string;
        startDate: string;
        isTrial: boolean;
        createdAt: string;
        updatedAt: string;
        __v: number;
    }[];

    __v: number;
}

export interface ClientListResponse {
    items: Client[];
    total: number;
    page: number;
    limit: number;
}

