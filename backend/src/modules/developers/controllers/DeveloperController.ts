import { Request, Response } from 'express';
import { asyncHandler } from '../../../common/utils/asyncHandler';
import { validate } from '../../../common/middleware/validate';
import { CreateDeveloperDto, UpdateDeveloperDto } from '../dtos/DeveloperDto';
import { ListQueryDto } from '../../users/dtos/UserDto';
import { DeveloperService } from '../services/DeveloperService';

const service = new DeveloperService();

export const createDeveloper = [
    validate(CreateDeveloperDto),
    asyncHandler(async (req: Request, res: Response) => {
        const created = await service.create(req.body);
        res.status(201).json(created);
    }),
];

export const listDevelopers = [
    validate(ListQueryDto),
    asyncHandler(async (req: Request, res: Response) => {
        const { page, limit, q } = req.query as any;
        const result = await service.list(q, Number(page), Number(limit));
        res.json(result);
    }),
];

export const getDeveloper = asyncHandler(async (req: Request, res: Response) => {
    const item = await service.get(req.params.id as string);
    if (!item) return res.status(404).json({ error: 'Not Found' });
    res.json(item);
});

export const updateDeveloper = [
    validate(UpdateDeveloperDto),
    asyncHandler(async (req: Request, res: Response) => {
        const updated = await service.update(req.params.id as string, req.body);
        if (!updated) return res.status(404).json({ error: 'Not Found' });
        res.json(updated);
    }),
];

export const deleteDeveloper = asyncHandler(async (req: Request, res: Response) => {
    const deleted = await service.remove(req.params.id as string);
    if (!deleted) return res.status(404).json({ error: 'Not Found' });
    res.status(204).send();
});
