import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';

import { UnAuthorizedUser } from '../Authorization/UnAuthorizedUser';

export const UnauthorizedRoot = () => {

  return (
    <Switch>
      <Route exact path={RoutePathConst.UnAuthorization} component={UnAuthorizedUser} />
    </Switch>
  );
};
