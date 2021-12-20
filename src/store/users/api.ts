import { apiService } from 'services';

import { IDataApi } from '../../types';

import { IUser } from './types';

type IGetUsersApi = () => Promise<IDataApi<IUser[]>>;

export const getUsersApi: IGetUsersApi = () => {
  return apiService.get('/users');
};
