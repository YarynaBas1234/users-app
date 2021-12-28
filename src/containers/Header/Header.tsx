import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled, backgroundDefaultConfig } from '../../styles';
import { H5, ButtonText, DropDown } from '../../components';
import logo from '../../images/logo.jpg';
import { languages, ResponseScreen } from '../../consts';
import { ISimpleFunction } from '../../types';
import { useChangeLanguage } from '../../hooks';

import { ICurrentUser } from '../types';

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

const Logo = styled.div`
  width: 72px;
  height: 72px;
  background-image: url(${logo});
  border-radius: 50%;
  ${backgroundDefaultConfig}
`;

const LeftNavigation = styled.div`
  display: flex;
  align-items: center;
`;

const RightNavigation = styled.div`
  display: flex;
  @media screen and (${ResponseScreen.maxWidth400}) {
    flex-direction: column;
    align-items: flex-end;
  };
`;

const DropDownWrapper = styled.div`
  margin: 0 16px;
`;

const LogoutButton = styled.div`
  min-width: 96px;
  display: flex;
  justify-content: flex-end;
  margin-top: 0;
  cursor: pointer;
  :active {
    font-weight: bold;
  };
  @media screen and (${ResponseScreen.maxWidth370}) {
    margin-top: 8px;
  };
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
  const onLanguageChange = useChangeLanguage();

  return (
    <HeaderWrapper>
      <LeftNavigation>
        <Logo />
        <DropDownWrapper>
          <DropDown onChange={onLanguageChange} options={languages}/>
        </DropDownWrapper>
      </LeftNavigation>
      <RightNavigation>
        <H5>{t('WELCOME')} {currentUser}</H5>
        <LogoutButton>
          <LogoutText onClick={onLogOutClick}>{t('LOGOUT')}</LogoutText>
        </LogoutButton>
      </RightNavigation>
    </HeaderWrapper>
  );
};
