import { model, Schema } from 'mongoose';
import { TUser, UserModelType } from './user.interface';
import { USER_ROLES } from './user.constant';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser, UserModelType>(
  {
    _id: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: {
        values: USER_ROLES,
        message: 'Role must be either admin, agent, or customer',
      },
      default: 'customer',
    },
  },
  {
    timestamps: true,
  },
);

// Hashing the password before saving to the DB using Pre Hook Middleware
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// Check whether the user is exists or not
userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

// Check whether the password is correct or not
userSchema.statics.isCheckPassword = async function (
  plainTextPassword: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const User = model<TUser, UserModelType>('User', userSchema);
