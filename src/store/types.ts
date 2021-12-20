import { Dispatch } from 'redux';

import { IAuthStore } from './auth';
import { IUsersStore } from './users';

export type IStore = {
  auth: IAuthStore;
  users: IUsersStore;
};

export type IDataApi = {
  data<Type>(): Type;
  config: object;
  headers: object;
  request: object;
  status: number;
  statusText: string;
};

export type IResultApi = () => Promise<IDataApi>;

export type ISimpleDispatchAction = (dispatch: Dispatch) => void;
