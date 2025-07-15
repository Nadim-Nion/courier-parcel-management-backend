import { z } from 'zod';
import { USER_ROLES } from './user.constant';

const createUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ error: 'Name is required' })
      .trim()
      .min(1, 'Name is required'),

    email: z
      .string({ error: 'Email is required' })
      .trim()
      .toLowerCase()
      .email('Invalid email format'),

    password: z
      .string({ error: 'Password is required' })
      .min(1, 'Password is required'),

    role: z.enum([...USER_ROLES]).optional(),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};
