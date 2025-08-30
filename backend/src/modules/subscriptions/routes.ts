
import { Router } from 'express';
import {
    createSubscription, listSubscriptions, getSubscription, updateSubscription, deleteSubscription,
} from '../subscriptions/controllers/SubscriptionController';

const router = Router();


router.post('/subscriptions', ...createSubscription);
router.get('/subscriptions', ...listSubscriptions);
router.get('/subscriptions/:id', getSubscription);
router.put('/subscriptions/:id', ...updateSubscription);
router.delete('/subscriptions/:id', deleteSubscription);


export default router;