export type IAuthStore = {
  isLoggedIn: boolean;
  currentUser: string | null
}

export interface IAuthorisationActionValues {
  userName: string,
  password: string,
}

export type IHandleRegistrationAction = (registrationData: IAuthorisationActionValues) => void;
