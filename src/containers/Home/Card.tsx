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
  margin: 16px 16px 0 16px;
`;

const Title = styled(H4)`
  text-align: center;
`;

const UsersDataWrapper = styled(H5)`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const UsersData = styled(H5)`
  margin-left: 8px;
`;

interface ICard {
  user: IUser;
}

export const Card: React.FC<ICard> = (props) => {
  const { user } = props;
  const { t } = useTranslation();

  return (
    <CardWrapper>
      <Title>{user.name}</Title>
      <UsersDataWrapper>
        <H5 isBold={true}>{t('HOME_PAGE.EMAIL')}</H5>
        <UsersData>{user.email}</UsersData>
      </UsersDataWrapper>
      <UsersDataWrapper>
        <H5 isBold={true}>{t('HOME_PAGE.PHONE_NUMBER')}</H5>
        <UsersData>{user.phone}</UsersData>
      </UsersDataWrapper>
    </CardWrapper>
  );
};
