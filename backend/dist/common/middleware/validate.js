"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const http_status_codes_1 = require("http-status-codes");
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({ body: req.body, query: req.query, params: req.params });
        return next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            const errorMessages = error.issues.map((issue) => ({
                field: issue.path.join('.'),
                message: issue.message,
            }));
            return res
                .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ error: 'ValidationError', details: errorMessages });
        }
        return res
            .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ error: 'Internal Server Error' });
    }
};
exports.validate = validate;
//# sourceMappingURL=validate.js.map