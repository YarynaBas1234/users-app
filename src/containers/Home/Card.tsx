import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { H4, H5 } from '../../components';
import { IUser } from '../../store/users';

const CardWrapper = styled.div`
  max-width: 344px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 16px 16px 0 0;
`;

const UserName = styled(H4)`
  text-align: center;
`;

const Data = styled(H5)`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const DataTitle = styled(H5)`
  margin-right: 8px;
`;

interface ICard {
  item: IUser;
}

export const Card: React.FC<ICard> = (props) => {
  const { item } = props;
  const { t } = useTranslation();

  return (
    <CardWrapper>
      <UserName>{item.name}</UserName>
      <Data>
        <DataTitle isBold={true}>{t('HOME_PAGE.EMAIL')}</DataTitle>
        <H5>{item.email}</H5>
      </Data>
      <Data>
        <DataTitle isBold={true}>{t('HOME_PAGE.PHONE_NUMBER')}</DataTitle>
        <H5>{item.phone}</H5>
      </Data>
    </CardWrapper>
  );
};
