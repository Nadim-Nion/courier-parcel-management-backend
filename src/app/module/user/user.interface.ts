/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { USERS_SPECIFIC_ROLES } from './user.constant';

export type TRole = 'admin' | 'agent' | 'customer';

export type TUser = {
   _id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: TRole;
};

export type TUserRole = keyof typeof USERS_SPECIFIC_ROLES;

export interface UserModelType extends Model<TUser> {
  isUserExistsByEmail(email: string | undefined): Promise<TUser>;
  isCheckPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
