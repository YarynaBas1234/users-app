export enum TabConst {
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP',
}

export type ISetActiveTab = (value: TabConst) => void;
