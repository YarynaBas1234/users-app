import React from 'react';

import { styled, backgroundDefaultConfig } from '../../styles';
import { Container, ContainerWrapper, ContainerFixedImage } from '../../components';
import backgroundImage from '../../images/background.jpg';
import { IHandleLoginAction, IHandleRegistrationAction } from '../../store/auth';
import { ISimpleFunction } from '../../types';
import { ResponseScreen } from '../../consts';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { Navigation } from './Navigation';
import { ISetActiveTab, TabConst, ILoginError } from './types';

const ContainerImageStyled = styled(ContainerFixedImage)`
  background-image: url(${backgroundImage});
  ${backgroundDefaultConfig}
`;

const ContainerStyled = styled(Container)`
  max-width: 400px;
  min-height: 300px;
  border-radius: 8px;
  padding: 32px;
  @media screen and (${ResponseScreen.maxHeight370}), screen and (${ResponseScreen.maxWidth400}) {
    padding: 16px;
  };
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
    loginError,
  } = props;

  return (
    <>
      <ContainerImageStyled />
      <ContainerWrapper>
        <ContainerStyled>
          {activeTab === TabConst.SignIn
            ? <SignInForm onLoginClick={onLoginClick} loginError={loginError} />
            : <SignUpForm switchOnSignInTab={switchOnSignInTab} onRegistrationClick={onRegistrationClick} />
          }
          <Navigation setActiveTab={setActiveTab} activeTab={activeTab} />
        </ContainerStyled>
      </ContainerWrapper>
    </>
  );
};
