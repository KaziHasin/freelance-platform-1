"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkill = exports.listSkills = exports.resolve = void 0;
const SkillService_1 = require("../services/SkillService");
const SkillRepository_1 = require("../repositories/SkillRepository");
const asyncHandler_1 = require("@/common/utils/asyncHandler");
const http_status_codes_1 = require("http-status-codes");
const SkillDto_1 = require("../dtos/SkillDto");
const validate_1 = require("@/common/middleware/validate");
const skillService = new SkillService_1.SkillService();
const skillRepo = new SkillRepository_1.SkillRepository();
exports.resolve = [
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { tags } = req.body;
        const ids = await skillService.resolveSkillIds(tags || []);
        res.status(http_status_codes_1.StatusCodes.OK).json({ skillIds: ids });
    }),
];
exports.listSkills = [
    (0, validate_1.validate)(SkillDto_1.ListSkillDto),
    (0, asyncHandler_1.asyncHandler)(async (req, res) => {
        const { page, limit, search } = req.query;
        const result = await skillService.list(search, Number(page), Number(limit));
        res.json(result);
    }),
];
exports.deleteSkill = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const deleted = await skillService.remove(req.params.id);
    if (!deleted)
        return res.status(404).json({ error: 'Not Found' });
    res.status(204).send();
});
//# sourceMappingURL=SkillController.js.map