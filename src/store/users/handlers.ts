import { IDispatchAction } from '../../types';

import { getUsersApi } from './api';
import usersAction from './slice';

type IHandleGetUsersAction = () => IDispatchAction;

export const handleGetUsersAction: IHandleGetUsersAction = () => async (dispatch) => {
  const users = await getUsersApi();
  dispatch(usersAction.saveUsers(users.data));
};
