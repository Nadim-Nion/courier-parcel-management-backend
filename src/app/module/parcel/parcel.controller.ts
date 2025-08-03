import status from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ParcelServices } from './parcel.service';

const createParcel = catchAsync(async (req, res) => {
  const result = await ParcelServices.createParcelIntoDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Parcel is created successfully',
    data: result,
  });
});

const getAllParcels = catchAsync(async (req, res) => {
  const result = await ParcelServices.getAllParcelsFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'All Parcels are retrieved successfully',
    data: result,
  });
});

const getSingleParcel = catchAsync(async (req, res) => {
  const { parcelId } = req.params;
  const result = await ParcelServices.getSingleParcelFromDB(parcelId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Parcel is retrieved successfully',
    data: result,
  });
});

const updateParcel = catchAsync(async (req, res) => {
  const { parcelId } = req.params;
  const result = await ParcelServices.updateParcelIntoDB(parcelId, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Parcel is updated successfully',
    data: result,
  });
});

export const ParcelControllers = {
  createParcel,
  getAllParcels,
  getSingleParcel,
  updateParcel,
};
