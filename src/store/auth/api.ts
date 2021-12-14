import { mockApiService, localStorageService } from "services";

import { IRegistrationActionValues } from './types';

type ILoginApiType = (email: string, password: string) => Promise<any>;

export const loginApi: ILoginApiType = (email, password) =>
  mockApiService({ email, password });

type ILogoutApiType = () => Promise<any>;

export const logoutApi: ILogoutApiType = () =>
  mockApiService({});

type IRegistrationApiType = (registrationData: IRegistrationActionValues) => Promise<any>;

export const registerApi: IRegistrationApiType = ({ userName, password }) => {
  localStorageService.addToLocalStorage(userName, password);
  return mockApiService({ userName, password });
};
