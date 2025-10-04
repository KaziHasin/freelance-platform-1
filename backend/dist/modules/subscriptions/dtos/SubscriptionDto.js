"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListQueryDto = exports.UpdateSubscriptionDto = exports.CreateSubscriptionDto = void 0;
const zod_1 = require("zod");
const enums_1 = require("@/common/types/enums");
const status = Object.keys(enums_1.SubscriptionStatus);
exports.CreateSubscriptionDto = zod_1.z.object({
    body: zod_1.z.object({
        clientId: zod_1.z.string().length(24),
        packageId: zod_1.z.string().length(24),
        status: zod_1.z.nativeEnum(enums_1.SubscriptionStatus).optional(),
        startDate: zod_1.z.coerce.date().optional(),
        endDate: zod_1.z.coerce.date().optional(),
        isTrial: zod_1.z.boolean().default(false),
    })
});
exports.UpdateSubscriptionDto = zod_1.z.object({
    body: zod_1.z.object({
        clientId: zod_1.z.string().length(24),
        packageId: zod_1.z.string().length(24),
        status: zod_1.z.enum(status).optional(),
        startDate: zod_1.z.coerce.date().optional(),
        endDate: zod_1.z.coerce.date().optional(),
        isTrial: zod_1.z.boolean().default(false),
    })
});
exports.ListQueryDto = zod_1.z.object({
    query: zod_1.z.object({
        page: zod_1.z.coerce.number().min(1).default(1),
        limit: zod_1.z.coerce.number().min(1).max(100).default(20),
        search: zod_1.z.string().optional(),
        status: zod_1.z.enum(status).optional(),
    }).strict(),
});
//# sourceMappingURL=SubscriptionDto.js.map