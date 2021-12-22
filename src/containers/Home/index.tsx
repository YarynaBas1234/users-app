import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleGetUsersAction } from '../../store/users';
import { IStore } from '../../store';

import { Home } from './Home';
import { Card } from './Card';

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: IStore) => state.users);

  React.useEffect(() => {
    dispatch(handleGetUsersAction);
  }, []);

  const CreateUsersCard = React.useMemo(() => {  
    return users?.map((user) => <Card key={user.id} user={user} />);
  }, [users]);

  return <Home CreateUsersCard={CreateUsersCard}/>;
};
