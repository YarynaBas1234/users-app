import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from 'store';
import { handleGetUsersAction } from 'store/users';

import {
  handleRegistrationAction,
  handleLoginAction, 
  IHandleLoginAction,
  IHandleRegistrationClick
} from '../../store/auth';

import { Authorization } from './Authorization';
import { TabConst } from './types';

export const AuthorizationContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: IStore) => state.users);
  const [activeTab, setActiveTab] = React.useState<TabConst>(TabConst.SignIn);
  const [loginError, setLoginError] = React.useState(null);
  const [registrationError, setRegistrationError] = React.useState(null);

  const switchOnSignInTab = React.useCallback(() => {
    setActiveTab(TabConst.SignIn);
  }, []);

  React.useEffect(() => {
    dispatch(handleGetUsersAction());
  }, []);
  
  const onRegistrationClick: IHandleRegistrationClick = React.useCallback(({ userName, password }) => {
    // @ts-ignore
    handleRegistrationAction({ userName, password }, users).then(() => setRegistrationError(null)).catch((error) => setRegistrationError(error));
  }, [users]);

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
      registrationError={registrationError}
    />
  );
};
