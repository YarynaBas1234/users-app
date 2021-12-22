import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleGetUsersAction, IUser } from '../../store/users';
import { IStore } from '../../store';

import { Home } from './Home';
import { Card } from './Card';

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: IStore) => state.users);

  React.useEffect(() => {
    dispatch(handleGetUsersAction);
  }, []);

  const createUsersCard = React.useMemo(() => {  
    return users?.map((user: IUser) => <Card key={user.id} user={user} />);
  }, [users]);

  return <Home createUsersCard={createUsersCard}/>;
};
