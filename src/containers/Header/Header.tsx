import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { H5, ButtonText } from '../../components';
import logo from '../../images/logo.jpg';

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
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

const RightNav = styled.div`
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
  currentUser: string | null;
};

export const Header: React.FC<IHeaderProps> = (props) => {
  const { currentUser } = props;
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <Logo />
      <RightNav>
        <H5>Welcome, {currentUser}</H5>
        <LogoutButton>
          <LogoutText onClick={() => console.log('ok')}>{t('LOGOUT')}</LogoutText>
        </LogoutButton>
      </RightNav>
    </HeaderWrapper>
  );
};
