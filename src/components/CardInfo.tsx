import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../styles';

import { H5 } from './Text';

const CardInfoRow = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
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
