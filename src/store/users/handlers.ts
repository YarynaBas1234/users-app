import usersAction from './slice';
import { getUsersApi } from './api';
import { ISimpleDispatchAction } from '../types';

export const handleGetUsersAction: ISimpleDispatchAction = async (dispatch) => {
  const users = await getUsersApi();
  await dispatch(usersAction.saveUsers(users.data));
};
