"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = errorMiddleware;
const http_status_codes_1 = require("http-status-codes");
function errorMiddleware(err, _req, res, _next) {
    console.error(err);
    // Handle known errors
    if (err.name === 'ValidationError') {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            error: 'ValidationError',
            details: [
                {
                    message: err.errors || err.message,
                }
            ]
        });
    }
    // Handle duplicate key error from Mongo
    if (err.code === 11000) {
        return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({
            error: 'DuplicateKeyError',
            details: [
                {
                    field: `body.${err?.field}`,
                    message: err.keyValue
                }
            ]
        });
    }
    // Handle custom errors (like Email already exists)
    if (err.message && err.message.includes('exists')) {
        return res.status(http_status_codes_1.StatusCodes.CONFLICT).json({
            error: 'Conflict',
            details: [
                {
                    field: `body.${err.field}`,
                    message: err.message
                }
            ]
        });
    }
    // Default: Internal Server Error
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: 'InternalServerError',
        details: [
            {
                message: err.message || 'Something went wrong',
            }
        ]
    });
}
//# sourceMappingURL=errorMiddleware.js.map