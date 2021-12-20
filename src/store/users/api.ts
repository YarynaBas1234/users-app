import { apiService } from 'services';

import { IDataApi } from './types';

type IGetUsersApi = () => Promise<IDataApi>;

export const getUsersApi: IGetUsersApi = () => {
  return apiService.get('/users');
}
