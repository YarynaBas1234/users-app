import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { H5, ButtonText } from '../../components';
import logo from '../../images/logo.jpg';
import { ISimpleFunction } from '../../types';

import { ICurrentUser } from '../types';

const HeaderWrapper = styled.div`
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
  border-radius: 50%;
`;

const RightNavigation = styled.div`
  display: flex;
`;

const LogoutButton = styled.div`
  min-width: 96px;
  display: flex;
  justify-content: flex-end;
  margin-top: 0;
  cursor: pointer;

  :active {
    font-weight: bold;
  }
`;

const LogoutText = styled(ButtonText)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

type IHeaderProps = {
  currentUser: ICurrentUser;
  onLogOutClick: ISimpleFunction;
};

export const Header: React.FC<IHeaderProps> = (props) => {
  const { currentUser, onLogOutClick } = props;
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <Logo />
      <RightNavigation>
        <H5>Welcome, {currentUser}</H5>
        <LogoutButton>
          <LogoutText onClick={onLogOutClick}>{t('LOGOUT')}</LogoutText>
        </LogoutButton>
      </RightNavigation>
    </HeaderWrapper>
  );
};
