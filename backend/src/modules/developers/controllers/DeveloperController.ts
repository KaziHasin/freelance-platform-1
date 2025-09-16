import { Request, Response } from 'express';
import { asyncHandler } from '../../../common/utils/asyncHandler';
import { validate } from '../../../common/middleware/validate';
import { CreateDeveloperDto, UpdateDeveloperDto, ListQueryDto } from '../dtos/DeveloperDto';
import { DeveloperService } from '../services/DeveloperService';
import { Types } from 'mongoose';
import { UpdateUserDto } from '@/modules/users/dtos/UserDto';
import { UserService } from '@/modules/users/services/UserService';
import { upload } from '@/common/utils/upload';

const service = new DeveloperService();
const userService = new UserService();

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
        const { page, limit, search, status } = req.query as any;
        const result = await service.list(search, status, Number(page), Number(limit));
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
    validate(UpdateUserDto),
    upload.fields([
        { name: "docFile", maxCount: 1 },
        { name: "idType", maxCount: 1 }
    ]),
    asyncHandler(async (req: Request, res: Response) => {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const { id } = req.params;

        await userService.update(req.user.id, req.body);

        const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;
        const docFile = files?.docFile?.[0];
        const idFile = files?.idType?.[0];

        const updated = await service.update(id as string, req.body, { docFile, idFile });

        res.json(updated);
    }),
];


export const deleteDeveloper = asyncHandler(async (req: Request, res: Response) => {
    const deleted = await service.remove(req.params.id as string);
    if (!deleted) return res.status(404).json({ error: 'Not Found' });
    res.status(204).send();
});

export const reviewStatus = asyncHandler(async (req: Request, res: Response) => {
    if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const adminId = new Types.ObjectId(req.user.id);
    const updated = await service.updateVerificationStatus(req.params.id as string, req.body, adminId);
    if (!updated) return res.status(404).json({ error: 'Not Found' });
    res.json(updated);
});

