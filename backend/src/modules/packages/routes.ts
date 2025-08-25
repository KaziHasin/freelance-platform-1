import { Router } from 'express';
import * as PackageController from './controllers/PackageController';

const router = Router();

router
    .route('/packages')
    .get(PackageController.listPackages)
    .post(PackageController.createPackage);

router
    .route('/packages/:id')
    .get(PackageController.getPackage)
    .put(PackageController.updatePackage)
    .delete(PackageController.deletePackage);

export default router;
