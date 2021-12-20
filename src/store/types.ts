import { Dispatch } from 'redux';
import { IAuthStore } from './auth';
import { IUsersStore } from './users';

export type IStore = {
  auth: IAuthStore;
  users: IUsersStore;
};

export type ISimpleDispatchAction = (dispatch: Dispatch) => void;
