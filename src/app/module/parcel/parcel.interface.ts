import { Types } from 'mongoose';

export type TSize = 'small' | 'medium' | 'large';
export type TPaymentType = 'COD' | 'prepaid';
export type TStatus =
  | 'booked'
  | 'picked up'
  | 'in transit'
  | 'delivered'
  | 'failed';

export type TParcel = {
  customer: Types.ObjectId;
  agent: Types.ObjectId;
  pickupAddress: string;
  deliveryAddress: string;
  size: TSize;
  paymentType: TPaymentType;
  status: TStatus;
};
