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

const UserDataWrapper = styled(H5)`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const UserData = styled(H5)`
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
      <UserDataWrapper>
        <H5 isBold={true}>{t('HOME_PAGE.EMAIL')}</H5>
        <UserData>{user.email}</UserData>
      </UserDataWrapper>
      <UserDataWrapper>
        <H5 isBold={true}>{t('HOME_PAGE.PHONE_NUMBER')}</H5>
        <UserData>{user.phone}</UserData>
      </UserDataWrapper>
    </CardWrapper>
  );
};
