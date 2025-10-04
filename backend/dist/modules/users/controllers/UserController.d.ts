import { Request, Response } from 'express';
export declare const createUser: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const listUsers: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const getUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
export declare const updateUser: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const deleteUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
export declare const updateStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
//# sourceMappingURL=UserController.d.ts.map