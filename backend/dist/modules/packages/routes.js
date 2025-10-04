"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PackageController = __importStar(require("./controllers/PackageController"));
const enums_1 = require("@/common/types/enums");
const authorizeMiddleware_1 = require("@/common/middleware/authorizeMiddleware");
const authMiddleware_1 = require("@/common/middleware/authMiddleware");
const router = (0, express_1.Router)();
router
    .route('/packages')
    .get(authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN, enums_1.Role.CLIENT), PackageController.listPackages)
    .post(authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), PackageController.createPackage);
router
    .route('/packages/:id')
    .get(authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN, enums_1.Role.CLIENT), PackageController.getPackage)
    .put(authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), PackageController.updatePackage)
    .delete(authMiddleware_1.authMiddleware, (0, authorizeMiddleware_1.authorize)(enums_1.Role.ADMIN), PackageController.deletePackage);
exports.default = router;
//# sourceMappingURL=routes.js.map