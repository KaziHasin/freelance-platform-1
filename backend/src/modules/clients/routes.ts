
import { Router } from 'express';

import {
    createClient, listClients, getClient, updateClient, deleteClient,
} from '../clients/controllers/ClientController';

const router = Router();

router.post('/clients', ...createClient);
router.get('/clients', ...listClients);
router.get('/clients/:id', getClient);
router.put('/clients/:id', ...updateClient);
router.delete('/clients/:id', deleteClient);

export default router;