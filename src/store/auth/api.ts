import { mockApiService, localStorageService } from "services";

import { IHandlerRegistrationAction } from './types';

type ILoginApiType = (email: string, password: string) => Promise<any>;

export const loginApi: ILoginApiType = (email, password) =>
  mockApiService({ email, password });

type ILogoutApiType = () => Promise<any>;

export const logoutApi: ILogoutApiType = () =>
  mockApiService({});

export const registerApi: IHandlerRegistrationAction = ({userName, password}) => {
  localStorageService.addToLocalStorage(userName, password);
};
