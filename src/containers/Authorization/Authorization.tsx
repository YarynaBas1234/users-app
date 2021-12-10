import React from 'react';

import { styled, Container } from '../../styles';
import backgroundImage from '../../images/background.jpg';

import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { Navigation } from './Navigation';

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

const ContainerStyles = styled(Container)`
  width: 100%;
  max-width: 400px;
  min-height: 100px;
  border-radius: 8px;
  justify-content: center;
`;

export enum TabConst {
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP',
}

export const Authorization = () => {
  const [activeTab, setActiveTab] = React.useState<TabConst>(TabConst.SignIn);

  return (
    <Main>
      <ContainerStyles>
        {activeTab === TabConst.SignIn
          ? <SignInForm />
          : <SignUpForm />
        }
        <Navigation setActiveTab={setActiveTab} activeTab={activeTab} />
      </ContainerStyles>
    </Main>
  );
};
