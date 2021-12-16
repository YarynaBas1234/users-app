import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';

const Main = styled.div`
  display: flex;
  padding: 8px;
`;

const CardWrapper = styled.div`
  width: 296px;
  height: 296px;
  background-color: #f2f4f5;
  display: flex;
  flex-direction: column;
  padding: 16px;
  
  :not(:last-child) { 
    margin-right: 8px;
   }
`;

export const Card: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <CardWrapper>{t('HOME.USERS_CARD')}</CardWrapper>
    </Main>
  );
}
