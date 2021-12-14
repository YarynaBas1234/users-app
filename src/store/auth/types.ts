export type IAuthStore = {
  isLoggedIn: boolean;
}

export interface IRegistrationActionValues {
  userName: string,
  password: string,
}

export type IHandleRegistrationAction = (
  registrationData: IRegistrationActionValues
) => void;
