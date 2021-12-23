import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { styled } from '../../styles';
import { H4, H5 } from '../../components';
import { IUser } from '../../store/users';
import { RoutePathConst } from '../../consts';

const CardWrapper = styled(Link)`
  max-width: 344px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  flex-direction: column;
  padding: 16px;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme}) => theme.colors.black};
  margin: 16px 16px 0 16px;
`;

const Title = styled(H4)`
  text-align: center;
`;

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

const CardInfo: React.FC<ICardInfoProps> = (props) => {
  const { title, value } = props;
  const { t } = useTranslation();

  return (
    <CardInfoRow>
      <H5 isBold={true}>{t(title)}</H5>
      <UsersValue>{value}</UsersValue>
    </CardInfoRow>
  );
};

interface ICardProps {
  user: IUser;
}

export const Card: React.FC<ICardProps> = (props) => {
  const { user } = props;

  return (
    <CardWrapper to={RoutePathConst.Profile}>
      <Title>{user.name}</Title>
      <CardInfo title='HOME_PAGE.EMAIL' value={user.email}/>
      <CardInfo title='HOME_PAGE.PHONE_NUMBER' value={user.phone}/>
    </CardWrapper>
  );
};