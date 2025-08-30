import { Router } from 'express';
import {
    createUser, listUsers, getUser, updateUser, deleteUser,
} from './controllers/UserController';

const router = Router();

router.post('/users', ...createUser);
router.get('/users', ...listUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', ...updateUser);
router.delete('/users/:id', deleteUser);




export default router;
