import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';

import { Authorization } from '../Authorization';

export const UnauthorizedRoot = () => {

  return (
    <Switch>
      <Route exact path={RoutePathConst.Authorization} component={Authorization} />
    </Switch>
  );
};
