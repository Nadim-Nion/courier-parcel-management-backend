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

export const ParcelServices = {
  createParcelIntoDB,
  getAllParcelsFromDB,
};
