import usersAction from './slice';

import { ISimpleDispatchAction } from '../../types';

import { getUsersApi } from './api';

export const handleGetUsersAction: ISimpleDispatchAction = async (dispatch) => {
  const users = await getUsersApi();
  dispatch(usersAction.saveUsers(users.data));
};
