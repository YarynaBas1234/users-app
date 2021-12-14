import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';

import { Authorization } from '../Authorization';
import { AboutUs } from '../AboutUs';

export const UnauthorizedRoot = () => {

  return (
    <Switch>
      <Route exact path={RoutePathConst.Authorization} component={Authorization} />
      <Route exact path={RoutePathConst.AboutUs} component={AboutUs} />
    </Switch>
  );
};
