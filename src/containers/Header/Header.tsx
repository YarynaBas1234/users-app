import React from 'react';

import { styled } from '../../styles';
import logo from '../../images/logo.jpg';

const Header = styled.div`
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:  ${({ theme }) => theme.colors.lightBlue};
`;

const Logo = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

type IHeaderComponent = {
  currentUser: string | null;
};

export const HeaderComponent: React.FC<IHeaderComponent> = (props) => {
  const { currentUser } = props;

  return (
    <Header>
      <Logo />
      <div>{currentUser}</div>
    </Header>
  );
};
