import React from 'react';

import { handleRegisterAction } from '../../store/auth';
import { IHandlerRegistrationAction } from '../../store/auth/types';

import { Authorization } from './Authorization';
import { TabConst } from './types';

export const AuthorizationContainer = () => {
  const [activeTab, setActiveTab] = React.useState<TabConst>(TabConst.SignIn);

  const switchOnSignInTab = React.useCallback(() => {
    setActiveTab(TabConst.SignIn);
  }, []);

  const onRegisterAction: IHandlerRegistrationAction = React.useCallback(({userName, password}) => {
    handleRegisterAction({userName, password});
  }, []);

  return (
    <Authorization
      setActiveTab={setActiveTab}
      activeTab={activeTab}
      onRegisterAction={onRegisterAction}
      switchOnSignInTab={switchOnSignInTab}
    />
  );
};
