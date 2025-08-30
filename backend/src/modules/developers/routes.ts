
import { Router } from 'express';

import {
    createDeveloper, listDevelopers, getDeveloper, updateDeveloper, deleteDeveloper,
} from '../developers/controllers/DeveloperController';


const router = Router();


router.post('/developers', ...createDeveloper);
router.get('/developers', ...listDevelopers);
router.get('/developers/:id', getDeveloper);
router.put('/developers/:id', ...updateDeveloper);
router.delete('/developers/:id', deleteDeveloper);

export default router;
