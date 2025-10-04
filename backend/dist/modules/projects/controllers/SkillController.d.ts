import { Request, Response } from 'express';
export declare const resolve: ((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>)[];
export declare const listSkills: (((req: Request, res: Response, next: import("express").NextFunction) => Promise<any>) | ((req: Request, res: Response, next: import("express").NextFunction) => void | Response<any, Record<string, any>>))[];
export declare const deleteSkill: (req: Request, res: Response, next: import("express").NextFunction) => Promise<any>;
//# sourceMappingURL=SkillController.d.ts.map