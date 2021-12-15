import { Dispatch } from 'redux';

import * as api from './api';
import authActions from './slice';

import { IHandleAuthorisationAction, IAuthorisationActionValues } from './types';

type IHandleLoginActionType = (authorisationData: IAuthorisationActionValues) => (dispatch: Dispatch) => void;

export const handleLoginAction: IHandleLoginActionType = ({userName, password}) => dispatch => {
  return api.loginApi(userName, password).then(() => dispatch(authActions.loginSuccess({ userName, password })));
};

type IHandleLogoutActionType = () => void;

export const handleLogoutAction: IHandleLogoutActionType = () => {
  api.logoutApi().then(() => authActions.logoutSuccess());
};

export const handleRegistrationAction: IHandleAuthorisationAction = ({userName, password}) => {
  api.registerApi({userName, password});
};
