import { apiService } from 'services';

import { IGetApiData } from '../../types';

import { IUser } from './types';

type IGetUsersData = () => IGetApiData<IUser[]>;

export const getUsersApi: IGetUsersData = () => {
  return apiService.get('/users');
};
