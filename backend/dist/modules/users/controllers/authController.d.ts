import { Request, Response } from 'express';
export declare const emailSignup: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const emailLogin: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const requestOtp: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const verifyPhoneOtp: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const googleAuth: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const authMe: ((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>)[];
export declare const refreshToken: ((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>)[];
export declare const logout: ((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>)[];
//# sourceMappingURL=authController.d.ts.map