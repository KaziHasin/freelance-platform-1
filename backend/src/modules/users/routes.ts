import { Router } from 'express';
import {
    createUser, listUsers, getUser, updateUser, deleteUser,
} from './controllers/UserController';
import {
    createDeveloper, listDevelopers, getDeveloper, updateDeveloper, deleteDeveloper,
} from './controllers/DeveloperController';
import {
    createClient, listClients, getClient, updateClient, deleteClient,
} from './controllers/ClientController';

const router = Router();

router.post('/users', ...createUser);
router.get('/users', ...listUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', ...updateUser);
router.delete('/users/:id', deleteUser);

router.post('/developers', ...createDeveloper);
router.get('/developers', ...listDevelopers);
router.get('/developers/:id', getDeveloper);
router.put('/developers/:id', ...updateDeveloper);
router.delete('/developers/:id', deleteDeveloper);

router.post('/clients', ...createClient);
router.get('/clients', ...listClients);
router.get('/clients/:id', getClient);
router.put('/clients/:id', ...updateClient);
router.delete('/clients/:id', deleteClient);

export default router;
