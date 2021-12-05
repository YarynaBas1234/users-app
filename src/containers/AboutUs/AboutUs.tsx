import React from 'react';
import { useTranslation } from "react-i18next";

import { H2 } from '../../components';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <H2 isBold={true}>{t('ABOUT_US_PAGE')}</H2>
  );
};
