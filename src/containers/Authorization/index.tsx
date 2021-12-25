import React from 'react';
import { useDispatch } from 'react-redux';

import {
  handleRegistrationAction,
  handleLoginAction, 
  IHandleLoginAction,
  IHandleRegistrationAction
} from '../../store/auth';
import { ISelectEventFunction } from '../../types';

import { Authorization } from './Authorization';
import { TabConst } from './types';

interface IAuthorizationContainerProps {
  onSelectOptionChange: ISelectEventFunction;
}

export const AuthorizationContainer: React.FC<IAuthorizationContainerProps> = (props) => {
  const { onSelectOptionChange } = props;
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState<TabConst>(TabConst.SignIn);
  const [loginError, setLoginError] = React.useState(null);

  const switchOnSignInTab = React.useCallback(() => {
    setActiveTab(TabConst.SignIn);
  }, []);

  const onRegistrationClick: IHandleRegistrationAction = React.useCallback(({ userName, password }) => {
    handleRegistrationAction({ userName, password });
  }, []);

  const onLoginClick: IHandleLoginAction = React.useCallback(({ userName, password }) => {
    // @ts-ignore
    dispatch(handleLoginAction({ userName, password })).then(() => setLoginError(null)).catch(error => setLoginError(error));
  }, []);

  return (
    <Authorization
      setActiveTab={setActiveTab}
      activeTab={activeTab}
      onRegistrationClick={onRegistrationClick}
      onLoginClick={onLoginClick}
      switchOnSignInTab={switchOnSignInTab}
      loginError={loginError}
      onSelectOptionChange={onSelectOptionChange}
    />
  );
};
