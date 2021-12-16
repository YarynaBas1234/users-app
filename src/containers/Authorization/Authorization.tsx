import React from 'react';

import { styled } from '../../styles';
import { Container } from '../../components';
import backgroundImage from '../../images/background.jpg';
import { IHandleLoginAction, IHandleRegistrationAction } from '../../store/auth';
import { IFunctionTemplate } from '../../types';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { Navigation } from './Navigation';
import { ISetActiveTab, TabConst, ILoginError } from './types';

const AuthorizationWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContainerStyled = styled(Container)`
  width: 100%;
  max-width: 400px;
  min-height: 100px;
  border-radius: 8px;
  justify-content: center;
  padding: 32px;
`;

interface IAuthorization {
  setActiveTab: ISetActiveTab;
  activeTab: TabConst;
  switchOnSignInTab: IFunctionTemplate;
  onRegistrationClick: IHandleRegistrationAction;
  onLoginClick: IHandleLoginAction;
  loginError: ILoginError;
}

export const Authorization: React.FC<IAuthorization> = (props) => {
  const {
    setActiveTab,
    activeTab,
    switchOnSignInTab,
    onRegistrationClick,
    onLoginClick,
    loginError
  } = props;

  return (
    <AuthorizationWrapper>
      <ContainerStyled>
        {activeTab === TabConst.SignIn
          ? <SignInForm onLoginClick={onLoginClick} loginError={loginError} />
          : <SignUpForm switchOnSignInTab={switchOnSignInTab} onRegistrationClick={onRegistrationClick} />
        }
        <Navigation setActiveTab={setActiveTab} activeTab={activeTab} />
      </ContainerStyled>
    </AuthorizationWrapper>
  );
};
