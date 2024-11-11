import { validateParams } from 'url-validation-query';
import apis from '@/apis';
import endpoints from '@/apis/config/endpoints';
import {
  IPassengerByIdRequestAction,
  IPassengerRequestAction,
  IPassengerResponseAction,
} from '@/apis/dto/passenger';
import { IGeneralResponse } from '@/types/global';

const passengerController = {
  // get all
  getPassengerList: async (data: Partial<IPassengerRequestAction>) => {
    const buildQuery = (params: typeof data) => {
      const searchParams = new URLSearchParams();

      if (params.limit) searchParams.append('limit', params.limit.toString());
      if (params.offset) searchParams.append('skip', params.offset.toString());
      if (params.sort) searchParams.append('sort', params.sort);

      if (params.where) {
        const whereParam = JSON.stringify(params.where);
        searchParams.append('where', whereParam);
      }

      return searchParams.toString();
    };

    const response = await apis.get<IGeneralResponse<IPassengerResponseAction[]>>(
      `${endpoints.passenger}?${buildQuery(validateParams(data))}`
    );

    return response.data;
  },

  // get by id
  getPassengerById: async (data: IPassengerByIdRequestAction) => {
    const response = await apis.get<IPassengerResponseAction>(
      `${endpoints.passenger}/${data.passengerId}`
    );

    return response?.data;
  },
};
export default passengerController;
