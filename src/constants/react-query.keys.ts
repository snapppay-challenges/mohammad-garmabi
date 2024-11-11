import { IPassengerByIdRequestAction, IPassengerRequestAction } from '@/apis/dto/passenger';

export const GET_PASSENGER_KEY = (paramsRequest: Partial<IPassengerRequestAction>) => [
  'GET_PASSENGER',
  paramsRequest,
];

export const GET_PASSENGER_BY_ID_KEY = (dynamicId: IPassengerByIdRequestAction['passengerId']) => [
  'GET_PASSENGER_BY_ID',
  dynamicId,
];
