import React from 'react';
import { useDispatch } from 'react-redux';

import { handleRegistrationAction, handleLoginAction, IHandleRegistrationAction } from '../../store/auth';

import { Authorization } from './Authorization';
import { TabConst } from './types';

export const AuthorizationContainer = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState<TabConst>(TabConst.SignIn);
  const [loginError, setLoginError] = React.useState('');

  const switchOnSignInTab = React.useCallback(() => {
    setActiveTab(TabConst.SignIn);
  }, []);

  const onRegisterAction: IHandleRegistrationAction = React.useCallback(({userName, password}) => {
    handleRegistrationAction({userName, password});
  }, []);

  const onLoginAction: IHandleRegistrationAction = React.useCallback(({userName, password}) => {
    // @ts-ignore
    dispatch(handleLoginAction({ userName, password })).then(() => setLoginError('')).catch(error => setLoginError(error));
  }, []);

  return (
    <Authorization
      setActiveTab={setActiveTab}
      activeTab={activeTab}
      onRegisterAction={onRegisterAction}
      onLoginAction={onLoginAction}
      switchOnSignInTab={switchOnSignInTab}
      loginError={loginError}
    />
  );
};
