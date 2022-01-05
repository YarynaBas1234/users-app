import { IUsers } from '../../store/users';

export type IAuthStore = {
  isLoggedIn: boolean;
}

export interface ILoginActionValues {
  userName: string,
  password: string,
}

export interface IRegistrationActionValues {
  userName: string,
  password: string,
}

export type IHandleLoginAction = (loginData: ILoginActionValues) => void;

export type IHandleRegistrationClick = (registrationData: IRegistrationActionValues) => void;

export type IHandleRegistrationAction = (registrationData: IRegistrationActionValues, users: IUsers) => void;
