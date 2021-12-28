import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { LanguagesConst } from 'consts';
import { en, ua } from 'translations';

export const changeLanguage = (language: LanguagesConst) => {
  i18n.changeLanguage(language);
};

const resources = { en, ua };

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    lng: 'en',
    resources,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });
