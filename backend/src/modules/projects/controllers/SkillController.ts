import { Request, Response } from 'express';
import { SkillService } from '../services/SkillService';
import { SkillRepository } from '../repositories/SkillRepository';
import { asyncHandler } from '@/common/utils/asyncHandler';
import { StatusCodes } from 'http-status-codes';



const skillService = new SkillService();
const skillRepo = new SkillRepository();


export const resolve = [

    asyncHandler(async (req: Request, res: Response) => {
        const { tags } = req.body as { tags: string[] };
        const ids = await skillService.resolveSkillIds(tags || []);
        res.status(StatusCodes.OK).json({ skillIds: ids });
    }),
];

export const search = [
    asyncHandler(async (req: Request, res: Response) => {
        const q = String(req.query.search || '').toLowerCase();
        if (!q) return res.json([]);
        const items = await skillRepo.find({ name: { $regex: `^${q}` } }).limit(20).lean();
        res.status(StatusCodes.OK).json(items);
    }),
];
