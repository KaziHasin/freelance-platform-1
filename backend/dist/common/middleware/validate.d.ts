import { ZodTypeAny } from 'zod';
import { Request, Response, NextFunction } from 'express';
export declare const validate: (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
//# sourceMappingURL=validate.d.ts.map