import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IStore } from '../../store';
import { handleGetCurrentUserAction } from '../../store/users';

import { Profile } from './Profile';

type IUserParams = {
  id: string;
};

export const ProfileContainer: React.FC = () => {
  const dispatch = useDispatch();
  let { id } = useParams<IUserParams>();
  const { chosenUser } = useSelector((state: IStore) => state.users);

  React.useEffect(() => {
    dispatch(handleGetCurrentUserAction(id));
  }, []);

  return <Profile user={chosenUser}/>;
};
