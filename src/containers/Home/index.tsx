import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleGetUsersAction } from '../../store/users';
import { IStore } from '../../store';

import { Home } from './Home';

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: IStore) => state.users);

  React.useEffect(() => {
    dispatch(handleGetUsersAction());
  }, []);

  return <Home users={users} />;
};
