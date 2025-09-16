
import { Router } from 'express';

import {
    createDeveloper, listDevelopers, getDeveloper, updateDeveloper, deleteDeveloper, reviewStatus
} from '../developers/controllers/DeveloperController';
import { authMiddleware } from '@/common/middleware/authMiddleware';
import { authorize } from '@/common/middleware/authorizeMiddleware';
import { Role } from '@/common/types/enums';


const router = Router();


router.post('/developers', authMiddleware, authorize(Role.ADMIN), createDeveloper);
router.get('/developers', authMiddleware, authorize(Role.ADMIN), listDevelopers);
router.get('/developers/:id', authMiddleware, authorize(Role.DEVELOPER), getDeveloper);
router.put('/developers/:id', authMiddleware, authorize(Role.DEVELOPER), updateDeveloper);
router.patch('/developers/:id/review', authMiddleware, authorize(Role.ADMIN), reviewStatus);
router.delete('/developers/:id', authMiddleware, authorize(Role.ADMIN), deleteDeveloper);

export default router;
