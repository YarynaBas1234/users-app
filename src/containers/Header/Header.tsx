import React from 'react';

import { styled, BackgroundImageStyled } from '../../styles';
import { H5 } from '../../components';
import logo from '../../images/logo.jpg';

import { currentUser } from '../types';

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:  ${({ theme }) => theme.colors.lightBlue};
`;

const Logo = styled(BackgroundImageStyled)`
  width: 72px;
  height: 72px;
  background-image: url(${logo});
  border-radius: 50%;
`;

type IHeaderProps = {
  currentUser: currentUser;
};

export const Header: React.FC<IHeaderProps> = (props) => {
  const { currentUser } = props;

  return (
    <HeaderWrapper>
      <Logo />
      <H5>{currentUser}</H5>
    </HeaderWrapper>
  );
};
