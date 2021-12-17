import React from 'react';

import { styled, backgroundDefaultConfig } from '../../styles';
import { Container, ContainerWrapper } from '../../components';
import backgroundImage from '../../images/background.jpg';
import { IHandleLoginAction, IHandleRegistrationAction } from '../../store/auth';
import { ISimpleFunction } from '../../types';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { Navigation } from './Navigation';
import { ISetActiveTab, TabConst, ILoginError } from './types';

const ContainerWrapperStyled = styled(ContainerWrapper)`
  background-image: url(${backgroundImage});
  ${backgroundDefaultConfig}
`;

const ContainerStyled = styled(Container)`
  max-width: 400px;
  min-height: 400px;
  border-radius: 8px;
  justify-content: center;
`;

interface IAuthorization {
  setActiveTab: ISetActiveTab;
  activeTab: TabConst;
  switchOnSignInTab: ISimpleFunction;
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
    <ContainerWrapperStyled>
      <ContainerStyled>
        {activeTab === TabConst.SignIn
          ? <SignInForm onLoginClick={onLoginClick} loginError={loginError} />
          : <SignUpForm switchOnSignInTab={switchOnSignInTab} onRegistrationClick={onRegistrationClick} />
        }
        <Navigation setActiveTab={setActiveTab} activeTab={activeTab} />
      </ContainerStyled>
    </ContainerWrapperStyled>
  );
};
