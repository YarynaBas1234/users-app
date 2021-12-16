import React from 'react';
import { useSelector } from 'react-redux';

import { IStore } from 'store';
import { languageService } from '../../services';
import { LanguagesConst } from '../../consts';

import { Header } from './Header';
import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from './UnauthorizedRoot';

export const Root: React.FC = () => {
  const { isLoggedIn, currentUser } = useSelector((state: IStore) => state.auth);

  languageService.changeLanguage(LanguagesConst.English);

  return (
    <>
      {isLoggedIn
        ? <>
          <Header currentUser={currentUser} />
          <AuthorizedRoot />
        </>
        : <UnauthorizedRoot />}
    </>
  );
};
