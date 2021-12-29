import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '../../styles';
import { H4, CardInfo } from '../../components';
import { IUser } from '../../store/users';
import { ResponseScreen, RoutePathConst } from '../../consts';

const CardWrapper = styled(Link)`
  max-width: 432px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  flex-direction: column;
  padding: 16px;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme}) => theme.colors.black};
  margin: 16px 16px 0 16px;
  @media screen and (${ResponseScreen.maxWidth700}) {
    max-width: unset;
  };
`;

const Title = styled(H4)`
  text-align: center;
`;

interface ICardProps {
  user: IUser;
}

export const Card: React.FC<ICardProps> = (props) => {
  const { user } = props;
  const { name, email, phone } = user;

  return (
    <CardWrapper to={RoutePathConst.Profile + name}>
      <Title>{user.name}</Title>
      <CardInfo title='HOME_PAGE.EMAIL' value={email}/>
      <CardInfo title='HOME_PAGE.PHONE_NUMBER' value={phone}/>
    </CardWrapper>
  );
};