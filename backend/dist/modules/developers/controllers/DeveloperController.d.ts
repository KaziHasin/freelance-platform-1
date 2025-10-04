import { Request, Response } from 'express';
export declare const createDeveloper: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const listDevelopers: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const getDeveloper: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
export declare const updateDeveloper: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>) | import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>)[];
export declare const deleteDeveloper: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
export declare const reviewStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
//# sourceMappingURL=DeveloperController.d.ts.map