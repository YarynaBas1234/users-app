export type IAuthStore = {
  isLoggedIn: boolean;
  currentUser: string | null
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

export type IHandleRegistrationAction = (registrationData: IRegistrationActionValues) => void;

