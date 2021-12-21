import { IDispatchAction } from '../../types';

import { getUsersApi } from './api';
import usersAction from './slice';

export const handleGetUsersAction: IDispatchAction = async (dispatch) => {
  const users = await getUsersApi();
  dispatch(usersAction.saveUsers(users.data));
};
