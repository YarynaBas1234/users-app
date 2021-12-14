import React from 'react';

import { styled } from '../../styles';
import backgroundImage from '../../images/background.jpg';
import { IHandlerRegistrationAction } from '../../store/auth/types';

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

const Container = styled.div`
    width: 100%;
    max-width: 400px;
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

interface IAuthorization {
  setActiveTab: ISetActiveTab;
  activeTab: TabConst;
  switchOnSignInTab: () => void;
  onRegisterAction: IHandlerRegistrationAction;
}

export const Authorization: React.FC<IAuthorization> = (props) => {
  const { setActiveTab, activeTab, switchOnSignInTab, onRegisterAction } = props;

  return (
    <Main>
      <Container>
        {activeTab === TabConst.SignIn
          ? <SignInForm />
          : <SignUpForm switchOnSignInTab={switchOnSignInTab} onRegisterAction={onRegisterAction}/>
        }
        <Navigation setActiveTab={setActiveTab} activeTab={activeTab} />
      </Container>
    </Main>
  );
};
