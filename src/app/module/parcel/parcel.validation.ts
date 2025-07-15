import { z } from 'zod';
import {
  PARCEL_PAYMENT_TYPE,
  PARCEL_SIZE,
  PARCEL_STATUS,
} from './parcel.constant';

const createParcelValidationSchema = z.object({
  body: z.object({
    customer: z.string({ error: 'Customer ID is required' }),

    agent: z.string({ error: 'Agent ID is required' }),

    pickupAddress: z
      .string({ error: 'Pickup address is required' })
      .trim()
      .min(1, 'Pickup address is required'),

    deliveryAddress: z
      .string({ error: 'Delivery address is required' })
      .trim()
      .min(1, 'Delivery address is required'),

    size: z.enum([...PARCEL_SIZE]).optional(),

    paymentType: z.enum([...PARCEL_PAYMENT_TYPE]).optional(),

    status: z.enum([...PARCEL_STATUS]).optional(),
  }),
});

export const ParcelValidations = {
  createParcelValidationSchema,
};
