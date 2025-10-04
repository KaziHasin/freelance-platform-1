import { Request, Response } from 'express';
export declare const createSubscription: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const listSubscriptions: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const listClientSubscriptions: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const getSubscription: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
export declare const updateSubscription: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const deleteSubscription: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
//# sourceMappingURL=SubscriptionController.d.ts.map