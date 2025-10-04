import { Request, Response, NextFunction } from "express";
import { Role } from "../types/enums";
export declare const authorize: (...allowedRoles: Role[]) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
//# sourceMappingURL=authorizeMiddleware.d.ts.map