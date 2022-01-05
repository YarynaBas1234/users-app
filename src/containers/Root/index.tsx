import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IStore } from 'store';
import { handleLogoutAction } from '../../store/auth';
import { localStorageService } from '../../services';

import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from './UnauthorizedRoot';
import { ICurrentUser } from '../types';

export const Root: React.FC = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { isLoggedIn } = useSelector((state: IStore) => state.auth);
  const currentUser = localStorageService.getFromLocalStorage<ICurrentUser>('currentUser');

  const onLogOutClick = React.useCallback(() => {
    dispatch(handleLogoutAction);
    history.push('/');
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <AuthorizedRoot
          currentUser={currentUser}
          onLogOutClick={onLogOutClick}
        />
      ) : (
        <UnauthorizedRoot />
      )}
    </>
  );
};
