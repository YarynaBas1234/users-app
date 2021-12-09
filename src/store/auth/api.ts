import { mockApiService, localStorageService } from "services";

type ILoginApiType = (email: string, password: string) => Promise<any>;

export const loginApi: ILoginApiType = (email, password) =>
  mockApiService({ email, password });

type ILogoutApiType = () => Promise<any>;

export const logoutApi: ILogoutApiType = () =>
  mockApiService({});

type IRegisterApi = (userName: string, password: string) => void;

export const registerApi: IRegisterApi = (userName, password) => {
  localStorageService.addToLocalStorage(userName, password);
};
