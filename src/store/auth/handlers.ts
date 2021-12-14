import { Dispatch } from 'redux';

import * as api from './api';
import authActions from './slice';

import { IHandlerRegistrationAction } from './types';

type IHandleLoginActionType = (email: string, password: string) => (dispatch: Dispatch) => void;

export const handleLoginAction: IHandleLoginActionType = (email, password) => dispatch => {
  api.loginApi(email, password).then(() => authActions.loginSuccess({ email, password }));
};

type IHandleLogoutActionType = () => void;

export const handleLogoutAction: IHandleLogoutActionType = () => {
  api.logoutApi().then(() => authActions.logoutSuccess());
};

export const handleRegisterAction: IHandlerRegistrationAction = ({userName, password}) => {
  api.registerApi({userName, password});
};
