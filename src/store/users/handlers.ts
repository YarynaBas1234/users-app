import { IDispatchAction } from '../../types';

import { getCurrentUserApi, getUsersApi } from './api';
import usersAction from './slice';

type IHandleGetUsersAction = () => IDispatchAction;

export const handleGetUsersAction: IHandleGetUsersAction = () => async (dispatch) => {
  const users = await getUsersApi();
  dispatch(usersAction.saveUsers(users.data));
};

type IHandleGetCurrentUserAction = (id: string) => IDispatchAction;

export const handleGetCurrentUserAction: IHandleGetCurrentUserAction = id => async (dispatch) => {
  const chosenUser = await getCurrentUserApi(id);
  dispatch(usersAction.saveChosenUser(chosenUser.data));
};
