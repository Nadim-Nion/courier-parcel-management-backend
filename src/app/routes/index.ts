import express from 'express';
import { UserRoutes } from '../module/user/user.route';
import { ParcelRoutes } from '../module/parcel/parcel.route';
import { AuthRoutes } from '../module/auth/auth.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/',
    route: ParcelRoutes,
  },
  {
    path: '/',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((moduleRoute) =>
  router.use(moduleRoute.path, moduleRoute.route),
);

export default router;
