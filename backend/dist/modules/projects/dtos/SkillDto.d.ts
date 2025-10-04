import { z } from "zod";
export declare const ListSkillDto: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
        search: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
}, z.core.$strip>;
//# sourceMappingURL=SkillDto.d.ts.map