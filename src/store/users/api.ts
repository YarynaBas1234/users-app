import { apiService } from 'services';

import { IApiResult } from '../../types';

import { IUser } from './types';

type IGetUsersData = () => IApiResult<IUser[]>;

export const getUsersApi: IGetUsersData = () => {
  return apiService.get('/users');
};

type IGetCurrentUserApi = (id: string) => IApiResult<IUser[]>;

export const getCurrentUserApi: IGetCurrentUserApi = (id) => {
  return apiService.get(`/users/${id}`);
};
