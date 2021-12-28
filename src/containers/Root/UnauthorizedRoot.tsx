import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';

import { AuthorizationContainer } from '../Authorization';
import { AboutUs } from '../AboutUs';

export const UnauthorizedRoot: React.FC = () => {

  return (
    <Switch>
      <Route exact path={RoutePathConst.Login} component={AuthorizationContainer} />
      <Route exact path={RoutePathConst.AboutUs} component={AboutUs} />
    </Switch>
  );
};
