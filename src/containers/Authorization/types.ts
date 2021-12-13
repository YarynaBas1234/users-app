import { TabConst } from '.';

export interface IRegisterActionValues {
  userName: string,
  password: string,
}

export type IOnRegisterAction = (
  userName: string,
  password: string,
) => void;

export type ISetActiveTab = (value: TabConst) => void;
