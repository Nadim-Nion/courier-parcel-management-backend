import express from 'express';
import { UserRoutes } from '../module/user/user.route';
import { ParcelRoutes } from '../module/parcel/parcel.route';
import { AuthRoutes } from '../module/auth/auth.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/parcels',
    route: ParcelRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((moduleRoute) =>
  router.use(moduleRoute.path, moduleRoute.route),
);

export default router;
