import { Request, Response } from "express";
export declare const createProject: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const listProjects: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const getProject: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
export declare const updateProject: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const deleteProject: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
//# sourceMappingURL=ProjectController.d.ts.map