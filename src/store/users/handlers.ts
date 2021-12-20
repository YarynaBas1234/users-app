import { Dispatch } from 'redux';

import usersAction from './slice';
import { getUsersApi } from './api';

type IHandleGetUsersAction = () => (dispatch: Dispatch) => void;

export const handleGetUsersAction: IHandleGetUsersAction = () => async (dispatch) => {
  const users = await getUsersApi();
  await dispatch(usersAction.saveUsers(users.data));
};
