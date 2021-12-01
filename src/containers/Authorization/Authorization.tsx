import React from 'react';

import { styled } from '../../styles';
import backgroundImage from '../../images/background.jpg';

import { RegistrationForm } from './RegistrationForm';
import { LoginForm } from './LoginForm';
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

const Container = styled.div`
    min-width: 400px;
    min-height: 100px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.85;
    border-radius: 8px;
    box-shadow: 0 0 24px rgba(119,92,58, 0.4);
    padding: 40px;

    @media screen and (max-width: 430px) {
      min-width: 250px;
      padding: 30px;
    }
`;

export enum TabConst {
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP',
}

export const Authorization = () => {
  const [activeTab, setActiveTab] = React.useState<TabConst>(TabConst.SignIn);
  
  return (
    <Main>
      <Container>
        {activeTab === TabConst.SignIn
          ? <LoginForm />
          : <RegistrationForm />
        }
        <Navigation setActiveTab={setActiveTab} activeTab={activeTab} />
      </Container>
    </Main>
  );
}
