import { apiService } from 'services';

import { IResultApi } from '../types';

export const getUsersApi: IResultApi = () => {
  return apiService.get('/users');
};
