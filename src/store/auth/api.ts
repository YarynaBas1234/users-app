import { mockApiService, localStorageService } from '../../services';

import { ILoginActionValues, IRegistrationActionValues } from './types';

type ILoginApiType = (loginData: ILoginActionValues) => Promise<any>;

export const loginApi: ILoginApiType = ({ userName, password }) => {
  const userPassword = localStorageService.getFromLocalStorage<string | null>(userName);

  if (userPassword && userPassword === password) {
    localStorageService.addToLocalStorage('currentUser', userName);
    localStorageService.addToLocalStorage('isLoggedIn', true);
    return mockApiService({ userName, password });
  }
  return mockApiService({ error: 'ERRORS.USER_NOT_EXIST' });
};

type ILogoutApiType = () => Promise<any>;

export const logoutApi: ILogoutApiType = () => {
  localStorageService.deleteFromLocalStorage('currentUser');
  localStorageService.addToLocalStorage('isLoggedIn', false);
  return mockApiService({});
};

type IRegistrationApiType = (registrationData: IRegistrationActionValues) => Promise<any>;

export const registerApi: IRegistrationApiType = ({ userName, password }) => {
  localStorageService.addToLocalStorage(userName, password);
  return mockApiService({ userName, password });
};
