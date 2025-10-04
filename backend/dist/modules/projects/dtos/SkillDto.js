"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSkillDto = void 0;
const zod_1 = require("zod");
exports.ListSkillDto = zod_1.z.object({
    query: zod_1.z.object({
        page: zod_1.z.coerce.number().min(1).default(1),
        limit: zod_1.z.coerce.number().min(1).max(100).default(20),
        search: zod_1.z.string().optional(),
    }).strict(),
});
//# sourceMappingURL=SkillDto.js.map