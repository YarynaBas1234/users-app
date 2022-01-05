import { IDispatchAction } from '../../types';

import * as api from './api';
import authActions from './slice';

import { IHandleRegistrationAction, ILoginActionValues } from './types';

type IHandleLoginAction = (loginData: ILoginActionValues) => IDispatchAction;

export const handleLoginAction: IHandleLoginAction = ({userName, password}) => dispatch => {
  return api.loginApi({userName, password}).then(() => dispatch(authActions.loginSuccess()));
};

type IHandleLogoutAction = IDispatchAction;

export const handleLogoutAction: IHandleLogoutAction = (dispatch) => {
  api.logoutApi().then(() => dispatch(authActions.logoutSuccess()));
};

export const handleRegistrationAction: IHandleRegistrationAction = ({userName, password}, users) => {
  return api.registerApi({userName, password}, users);
};
