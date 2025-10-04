import { Request, Response } from 'express';
export declare const createClient: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const listClients: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const getClient: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
export declare const updateClient: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const deleteClient: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
//# sourceMappingURL=ClientController.d.ts.map