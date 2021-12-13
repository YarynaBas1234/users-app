import { Dispatch } from 'redux';

import * as api from './api';
import authActions from './slice';

import { IOnRegisterAction } from '../../containers/Authorization';

type IHandleLoginActionType = (email: string, password: string) => (dispatch: Dispatch) => void;

export const handleLoginAction: IHandleLoginActionType = (email, password) => dispatch => {
  api.loginApi(email, password).then(() => authActions.loginSuccess({ email, password }));
};

type IHandleLogoutActionType = () => void;

export const handleLogoutAction: IHandleLogoutActionType = () => {
  api.logoutApi().then(() => authActions.logoutSuccess());
};

export const handleRegisterAction: IOnRegisterAction = (userName, password) => {
  api.registerApi(userName, password);
};
