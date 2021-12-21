import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IStore } from 'store';
import { languageService } from '../../services';
import { LanguagesConst } from '../../consts';
import { handleLogoutAction } from '../../store/auth';

import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from './UnauthorizedRoot';

export const Root: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, currentUser } = useSelector((state: IStore) => state.auth);

  languageService.changeLanguage(LanguagesConst.English);

  const onLogOutClick = () => dispatch(handleLogoutAction);

  return (
    <>
      {isLoggedIn
        ? <AuthorizedRoot currentUser={currentUser} onLogOutClick={onLogOutClick} />
        : <UnauthorizedRoot />}
    </>
  );
};
