import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IStore } from 'store';
import { languageService, localStorageService } from '../../services';
import { LanguagesConst, defaultLanguage } from '../../consts';
import { handleLogoutAction } from '../../store/auth';
import { ISelectEventFunction } from '../../types';

import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from './UnauthorizedRoot';

export const Root: React.FC = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  React.useEffect(() => {
    const currentLanguage = localStorageService.getFromLocalStorage('language');

    !currentLanguage && localStorageService.addToLocalStorage('language', defaultLanguage);
    languageService.changeLanguage(currentLanguage as LanguagesConst);
  }, []);

  const { isLoggedIn, currentUser } = useSelector(
    (state: IStore) => state.auth
  );

  const onSelectOptionChange: ISelectEventFunction = React.useCallback(event => {
    localStorageService.addToLocalStorage('language', event.currentTarget.value);
    languageService.changeLanguage(event.currentTarget.value as LanguagesConst);
  }, []);

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
          onSelectOptionChange={onSelectOptionChange}
        />
      ) : (
        <UnauthorizedRoot onSelectOptionChange={onSelectOptionChange} />
      )}
    </>
  );
};
