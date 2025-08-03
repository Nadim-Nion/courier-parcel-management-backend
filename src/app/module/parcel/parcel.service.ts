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

const updateParcelIntoDB = async (
  parcelId: string,
  payload: Partial<TParcel>,
) => {
  const parcel = await Parcel.findById(parcelId);
  if (!parcel) {
    throw new AppError(status.NOT_FOUND, 'Parcel is not found');
  }

  const result = await Parcel.findByIdAndUpdate(parcelId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const ParcelServices = {
  createParcelIntoDB,
  getAllParcelsFromDB,
  getSingleParcelFromDB,
  updateParcelIntoDB,
};
