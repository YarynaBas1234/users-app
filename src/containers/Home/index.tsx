import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { IStore } from 'store';
import { handleGetUsersAction } from 'store/users';

import { Home } from './Home';

export const HomeContainer: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleGetUsersAction());
  }, []);

  return (
    <Home />
  );
}