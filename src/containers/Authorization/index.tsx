import React from 'react';
import { useDispatch } from 'react-redux';

import { handleRegisterAction } from '../../store/auth/handlers';

import { Authorization } from './Authorization';
import { IOnRegisterAction } from './types';

export * from './SignInForm';
export * from './Authorization';
export * from './Navigation';

export enum SwitchTabConst {
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP',
};

export const AuthorizationContainer = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState<SwitchTabConst>(SwitchTabConst.SignIn);

  const switchOnSignInTab = () => {
    setActiveTab(SwitchTabConst.SignIn);
  };

  const onRegisterAction: IOnRegisterAction = (userName, email, password, repeatPassword) => {
    dispatch(handleRegisterAction(userName, email, password, repeatPassword));
  };

  return (
    <Authorization
      setActiveTab={setActiveTab}
      activeTab={activeTab}
      switchOnSignInTab={switchOnSignInTab}
      onRegisterAction={onRegisterAction}
    />
  );
};
