export interface Package {
    _id: string;
    code: string;
    prices: Record<string, number>;
    projectsPerMonth: number | null;
    contactClicksPerProject: number | null;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

export interface PackageListResponse {
    items: Package[];
    total: number;
    page: number;
    limit: number;
}

export type CreatePackageRequest = Omit<
    Package,
    "_id" | "createdAt" | "updatedAt"
>;

export type UpdatePackageRequest = Omit<
    Package,
    "_id" | "createdAt" | "updatedAt"
> & { id: string };

export interface PricePair {
    currency: string;
    amount: number;
}

export type PackageFormValues = Omit<
    UpdatePackageRequest,
    "prices"
> & { pricePairs: PricePair[] };
