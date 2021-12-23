import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IStore } from 'store';
import { languageService } from '../../services';
import { LanguagesConst } from '../../consts';
import { handleLogoutAction } from '../../store/auth';

import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from './UnauthorizedRoot';

export const Root: React.FC = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { isLoggedIn, currentUser } = useSelector(
    (state: IStore) => state.auth
  );

  languageService.changeLanguage(LanguagesConst.English);

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
