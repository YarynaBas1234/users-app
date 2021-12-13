import React from 'react';
import { useDispatch } from 'react-redux';

import { handleRegisterAction } from '../../store/auth';

import { Authorization } from './Authorization';
import { IOnRegisterAction } from '.';

export * from './SignInForm';
export * from './Authorization';
export * from './Navigation';
export * from './types';

export enum TabConst {
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP',
};

export const AuthorizationContainer = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState<TabConst>(TabConst.SignIn);

  const switchOnSignInTab = () => {
    setActiveTab(TabConst.SignIn);
  };

  const onRegisterAction: IOnRegisterAction = (userName, password) => {
    dispatch(handleRegisterAction(userName, password));
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
