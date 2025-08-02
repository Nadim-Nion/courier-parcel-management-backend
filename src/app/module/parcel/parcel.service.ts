import status from 'http-status';
import AppError from '../../errors/AppError';
import { TParcel } from './parcel.interface';
import { Parcel } from './parcel.model';

const createParcelIntoDB = async (payload: TParcel) => {
  const result = await Parcel.create(payload);

  return result;
};

const getAllParcelsFromDB = async () => {
  const result = await Parcel.find().populate('customer agent');

  return result;
};

const getSingleParcelFromDB = async (parcelId: string) => {
  const result = await Parcel.findById(parcelId).populate('customer agent');
  if (!result) {
    throw new AppError(status.NOT_FOUND, 'Parcel is not found');
  }
  return result;
};

export const ParcelServices = {
  createParcelIntoDB,
  getAllParcelsFromDB,
  getSingleParcelFromDB,
};
