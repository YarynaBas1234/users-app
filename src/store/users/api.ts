import { apiService } from 'services';

import { IApiResult } from '../../types';

import { IUser } from './types';

type IGetUsersData = () => IApiResult<IUser[]>;

export const getUsersApi: IGetUsersData = () => {
  return apiService.get('/users');
};
