import { Dispatch } from 'redux';

import * as api from './api';
import authActions from './slice';

import { IHandleRegistrationAction, ILoginActionValues } from './types';

type IHandleLoginActionType = (loginData: ILoginActionValues) => (dispatch: Dispatch) => void;

export const handleLoginAction: IHandleLoginActionType = ({userName, password}) => dispatch => {
  return api.loginApi({userName, password}).then(() => dispatch(authActions.loginSuccess({ userName, password })));
};

type IHandleLogoutActionType = (dispatch: Dispatch) => void;

export const handleLogoutAction: IHandleLogoutActionType = (dispatch) => {
  api.logoutApi().then(() => dispatch(authActions.logoutSuccess()));
};

export const handleRegistrationAction: IHandleRegistrationAction = ({userName, password}) => {
  api.registerApi({userName, password});
};
