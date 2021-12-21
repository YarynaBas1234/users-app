import usersAction from './slice';

import { IDispatchAction } from '../../types';

import { getUsersApi } from './api';

export const handleGetUsersAction: IDispatchAction = async (dispatch) => {
  const users = await getUsersApi();
  dispatch(usersAction.saveUsers(users.data));
};
