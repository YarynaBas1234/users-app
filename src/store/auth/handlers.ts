import { Dispatch } from 'redux';

import * as api from './api';
import authActions from './slice';

import { IHandleRegistrationAction, ILoginActionValues } from './types';

type IHandleLoginAction = (loginData: ILoginActionValues) => (dispatch: Dispatch) => void;

export const handleLoginAction: IHandleLoginAction = ({userName, password}) => dispatch => {
  return api.loginApi({userName, password}).then(() => dispatch(authActions.loginSuccess({ userName, password })));
};

type IHandleLogoutAction = () => void;

export const handleLogoutAction: IHandleLogoutAction = () => {
  api.logoutApi().then(() => authActions.logoutSuccess());
};

export const handleRegistrationAction: IHandleRegistrationAction = ({userName, password}) => {
  api.registerApi({userName, password});
};
