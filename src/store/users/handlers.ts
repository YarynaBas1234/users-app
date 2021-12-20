import { Dispatch } from 'redux';

import userAction from './slice';
import { getUsersApi } from './api';

type IHandleGetUsersAction = () => (dispatch: Dispatch) => void;

export const handleGetUsersAction: IHandleGetUsersAction = () => async (dispatch) => {
  const users = await getUsersApi();
  await dispatch(userAction.saveUsers(users.data));
};
