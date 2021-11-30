import React from 'react';

import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Authorization } from '../Authorization/Authorization';

export const UnauthorizedRoot = () => {

  return (
    <Switch>
      <Route exact path='/' component={Authorization} />
    </Switch>
  );
}