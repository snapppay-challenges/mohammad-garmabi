import passengerController from '@/apis/controller/passenger';
import { IPassengerRequestAction } from '@/apis/dto/passenger';
import { GET_PASSENGER_BY_ID_KEY, GET_PASSENGER_KEY } from '@/constants/react-query.keys';
import { usePassengerStore } from '@/stores/usePassengerStore';
import { useQuery } from '@tanstack/react-query';
import { validateParams } from 'url-validation-query';
import { useParams } from 'react-router-dom';

const useGetPassenger = () => {
  const { filter } = usePassengerStore();

  const paramsRequest: Partial<IPassengerRequestAction> = {
    ...filter,
    where: validateParams(filter.where),
  };

  return useQuery({
    queryKey: GET_PASSENGER_KEY(paramsRequest),
    queryFn: () => passengerController.getPassengerList(paramsRequest),
  });
};

const useGetByIdPassenger = () => {
  const { id } = useParams();

  return useQuery({
    queryKey: GET_PASSENGER_BY_ID_KEY(id!),
    queryFn: () =>
      passengerController.getPassengerById({
        passengerId: id!,
      }),
    enabled: !!id,
  });
};

export { useGetPassenger, useGetByIdPassenger };
