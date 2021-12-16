import React from 'react';

import { styled } from '../../styles';
import { H5 } from '../../components';
import logo from '../../images/logo.jpg';

const HeaderComponent = styled.div`
  width: 100%;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:  ${({ theme }) => theme.colors.lightBlue};
`;

const Logo = styled.div`
  width: 72px;
  height: 72px;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

type IHeaderProps = {
  currentUser: string | null;
};

export const Header: React.FC<IHeaderProps> = (props) => {
  const { currentUser } = props;

  return (
    <HeaderComponent>
      <Logo />
      <H5>{currentUser}</H5>
    </HeaderComponent>
  );
};
