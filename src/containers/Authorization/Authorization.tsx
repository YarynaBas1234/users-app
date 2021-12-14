import React from 'react';

import { styled } from '../../styles';
import { Container } from '../../components';
import backgroundImage from '../../images/background.jpg';
import { IHandleRegistrationAction } from '../../store/auth';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { Navigation } from './Navigation';
import { ISetActiveTab, TabConst } from './types';

const Main = styled.div`
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
  switchOnSignInTab: () => void;
  onRegisterAction: IHandleRegistrationAction;
}

export const Authorization: React.FC<IAuthorization> = (props) => {
  const { setActiveTab, activeTab, switchOnSignInTab, onRegisterAction } = props;

  return (
    <Main>
      <ContainerStyled>
        {activeTab === TabConst.SignIn
          ? <SignInForm />
          : <SignUpForm switchOnSignInTab={switchOnSignInTab} onRegisterAction={onRegisterAction}/>
        }
        <Navigation setActiveTab={setActiveTab} activeTab={activeTab} />
      </ContainerStyled>
    </Main>
  );
};
