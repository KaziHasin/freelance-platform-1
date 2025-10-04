import { PackageCode } from '@/common/types/enums';
import { Document } from 'mongoose';
export type PriceMap = {
    [currencyCode: string]: number;
};
export interface IPackage extends Document {
    code: PackageCode;
    prices: PriceMap;
    projectsPerMonth: number | null;
    contactClicksPerProject: number | null;
    notes?: string;
    shortDescription?: string;
    footerText?: string;
    badge?: string;
    features: string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const Package: import("mongoose").Model<IPackage, {}, {}, {}, Document<unknown, {}, IPackage, {}, {}> & IPackage & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=Package.d.ts.map