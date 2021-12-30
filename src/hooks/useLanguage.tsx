import React from 'react';

import { languageService, localStorageService } from '../services';
import { defaultLanguage, LanguagesConst } from '../consts';
import { ISelectEventFunction } from '../types';

export const useChangeLanguage = () => {
  React.useEffect(() => {
    const currentLanguage = localStorageService.getFromLocalStorage<string | null>('language');

    !currentLanguage && localStorageService.addToLocalStorage('language', defaultLanguage);
    languageService.changeLanguage(currentLanguage as LanguagesConst);
  }, []);

  const onSelectOptionChange: ISelectEventFunction = React.useCallback(event => {
    localStorageService.addToLocalStorage('language', event.currentTarget.value);
    languageService.changeLanguage(event.currentTarget.value as LanguagesConst);
  }, []);

  return onSelectOptionChange;
};
