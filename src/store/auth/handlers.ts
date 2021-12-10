import { Dispatch } from 'redux';

import * as api from './api';
import authActions from './slice';

type IHandleLoginActionType = (email: string, password: string) => (dispatch: Dispatch) => void;

export const handleLoginAction: IHandleLoginActionType = (email, password) => dispatch => {
  api.loginApi(email, password).then(() => authActions.loginSuccess({ email, password }));
};

type IHandleLogoutActionType = () => void;

export const handleLogoutAction: IHandleLogoutActionType = () => {
  api.logoutApi().then(() => authActions.logoutSuccess());
};

type IHandleRegisterAction = (userName: string, email: string, password: string, repeatPassword: string) => (dispatch: Dispatch) => void;

export const handleRegisterAction: IHandleRegisterAction = (userName, email, password, repeatPassword) => dispatch => {
  api.registerApi(userName, password);
};
