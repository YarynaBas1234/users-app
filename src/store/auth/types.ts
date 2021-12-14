export type IAuthStore = {
  isLoggedIn: boolean;
}

export interface IRegistrationActionValues {
  userName: string,
  password: string,
}

export type IHandlerRegistrationAction = (
  registrationData: IRegistrationActionValues
) => void;
