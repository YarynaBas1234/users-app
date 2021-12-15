import { mockApiService, localStorageService } from 'services';

import { IAuthorisationActionValues } from './types';

type ILoginApiType = (userName: string, password: string) => Promise<any>;

export const loginApi: ILoginApiType = (userName, password) => {
  const userPassword = localStorageService.getFromLocalStorage(userName);

  if (userPassword && userPassword === password) {
    return mockApiService({ userName, password });
  }
  return mockApiService({ error: 'LABELS.USER_NOT_EXIST' });
};

type ILogoutApiType = () => Promise<any>;

export const logoutApi: ILogoutApiType = () =>
  mockApiService({});

type IRegistrationApiType = (registrationData: IAuthorisationActionValues) => Promise<any>;

export const registerApi: IRegistrationApiType = ({ userName, password }) => {
  localStorageService.addToLocalStorage(userName, password);
  return mockApiService({ userName, password });
};
