import { apiService } from 'services';

import { IResponseApi } from '../../types';

import { IUser } from './types';

type IGetUsersApi = () => Promise<IResponseApi<IUser[]>>;

export const getUsersApi: IGetUsersApi = () => {
  return apiService.get('/users');
};
