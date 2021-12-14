import { mockApiService, localStorageService } from "services";

import { IHandleRegistrationAction } from './types';

type ILoginApiType = (email: string, password: string) => Promise<any>;

export const loginApi: ILoginApiType = (email, password) =>
  mockApiService({ email, password });

type ILogoutApiType = () => Promise<any>;

export const logoutApi: ILogoutApiType = () =>
  mockApiService({});

export const registerApi: IHandleRegistrationAction = ({userName, password}) => {
  localStorageService.addToLocalStorage(userName, password);
};
