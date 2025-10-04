import type { Request, Response } from 'express';
export declare const createPackage: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const listPackages: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const getPackage: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
export declare const updatePackage: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const deletePackage: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
//# sourceMappingURL=PackageController.d.ts.map