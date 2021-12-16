import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';

import { Home } from '../Home';

export const AuthorizedRoot: React.FC = () => {
  return (
    <Switch>
      <Route exact path={RoutePathConst.Home} component={Home} />
    </Switch>
  );
};