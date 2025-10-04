"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rejectAssignment = exports.acceptAssignment = void 0;
const asyncHandler_1 = require("@/common/utils/asyncHandler");
const AssignmentRotationService_1 = require("../services/AssignmentRotationService");
const AssignmentRotationDto_1 = require("../dtos/AssignmentRotationDto");
const validate_1 = require("@/common/middleware/validate");
const assignmentRotationService = new AssignmentRotationService_1.AssignmentRotationService();
exports.acceptAssignment = [
    (0, validate_1.validate)(AssignmentRotationDto_1.acceptOrRejectAssignmentRequest),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { projectId, developerId } = req.params;
        const updated = await assignmentRotationService.accept(projectId, developerId);
        if (!updated)
            return res.status(404).json({ error: 'Not Found or not pending' });
        res.json(updated);
    }),
];
exports.rejectAssignment = [
    (0, validate_1.validate)(AssignmentRotationDto_1.acceptOrRejectAssignmentRequest),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { projectId, developerId } = req.params;
        const updated = await assignmentRotationService.reject(projectId, developerId);
        if (!updated)
            return res.status(404).json({ error: 'Not Found or not pending' });
        res.json(updated);
    }),
];
//# sourceMappingURL=AssignmentRotationController.js.map