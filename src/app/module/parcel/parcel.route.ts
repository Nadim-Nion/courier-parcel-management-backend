import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ParcelValidations } from './parcel.validation';
import { ParcelControllers } from './parcel.controller';
import auth from '../../middlewares/auth';
import { USERS_SPECIFIC_ROLES } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-parcel',
  auth(USERS_SPECIFIC_ROLES.customer, USERS_SPECIFIC_ROLES.admin),
  validateRequest(ParcelValidations.createParcelValidationSchema),
  ParcelControllers.createParcel,
);

router.get('/', ParcelControllers.getAllParcels);

export const ParcelRoutes = router;
