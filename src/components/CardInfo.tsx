import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../styles';
import { ResponseScreen } from 'consts';

import { H5 } from './Text';

const CardInfoRow = styled.div`
  display: flex;
  :not(:first-child) {
    margin-top: 16px;
  };
  @media screen and (${ResponseScreen.maxWidth370}) {
    flex-direction: column;
    :not(:first-child) {
      margin-top: 8px;
    };
  };
`;

const UsersValue = styled(H5)`
  margin-left: 8px;
`;

interface ICardInfoProps {
  title: string;
  value: string;
}

export const CardInfo: React.FC<ICardInfoProps> = (props) => {
  const { title, value } = props;
  const { t } = useTranslation();

  return (
    <CardInfoRow>
      <H5 isBold={true}>{t(title)}</H5>
      <UsersValue>{value}</UsersValue>
    </CardInfoRow>
  );
};
