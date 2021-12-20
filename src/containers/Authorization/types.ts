export enum TabConst {
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP',
}

export type ILoginError = string | null;

export type ISetActiveTab = (value: TabConst) => void;
