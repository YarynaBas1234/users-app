import { SwitchTabConst } from './index';

export type IOnRegisterAction = (
  userName: string,
  email: string,
  password: string,
  repeatPassword: string
) => void;

export type ISetActiveTab = (value: SwitchTabConst) => void;
