import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { Path } from '../../consts';

import { Authorization } from '../Authorization';

export const UnauthorizedRoot = () => {

  return (
    <Switch>
      <Route exact path={Path.Authorization} component={Authorization} />
    </Switch>
  );
}
