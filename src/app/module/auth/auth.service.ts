import status from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLogin } from './auth.interface';
import createToken from './auth.utils';
import { Types } from 'mongoose';
import config from '../../config';

const loginUser = async (payload: TLogin) => {
  // Check the user is exists ot not
  const user = await User.isUserExistsByEmail(payload?.email);
  // console.log('user:', user);
  if (!user) {
    throw new AppError(status.UNAUTHORIZED, 'Invalid Credentials');
  }

  // Check the password is correct or not
  const isPasswordMatched = await User.isCheckPassword(
    payload?.password,
    user?.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(status.UNAUTHORIZED, 'Invalid Credentials');
  }

  // Generates Access Token after login
  const jwtPayload = {
    id: user?._id as Types.ObjectId,
    email: user?.email,
    role: user?.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  // Generates Refresh token after login
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return { accessToken, refreshToken };
};

export const AuthServices = {
  loginUser,
};
