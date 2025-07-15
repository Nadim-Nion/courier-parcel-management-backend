import { model, Schema } from 'mongoose';
import { TParcel } from './parcel.interface';
import {
  PARCEL_PAYMENT_TYPE,
  PARCEL_SIZE,
  PARCEL_STATUS,
} from './parcel.constant';

const parcelSchema = new Schema<TParcel>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: [true, 'Customer ID is required'],
      ref: 'User', // refer to the 'Customer'
    },
    agent: {
      type: Schema.Types.ObjectId,
      required: [true, 'Agent ID is required'],
      ref: 'User', // refer to the 'Agent'
    },
    pickupAddress: {
      type: String,
      required: [true, 'Pickup address is required'],
      trim: true,
    },
    deliveryAddress: {
      type: String,
      required: [true, 'Delivery address is required'],
      trim: true,
    },
    size: {
      type: String,
      enum: {
        values: PARCEL_SIZE,
        message: 'Size must be one of: small, medium, or large',
      },
      required: [true, 'Parcel size is required'],
      default: 'small',
    },
    paymentType: {
      type: String,
      enum: {
        values: PARCEL_PAYMENT_TYPE,
        message: 'Payment type must be either COD or prepaid',
      },
      required: [true, 'Payment type is required'],
      default: 'prepaid',
    },
    status: {
      type: String,
      enum: {
        values: PARCEL_STATUS,
        message:
          'Status must be one of: booked, picked up, in transit, delivered, or failed',
      },
      default: 'booked',
    },
  },
  {
    timestamps: true,
  },
);

export const Parcel = model<TParcel>('Parcel', parcelSchema);
