import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';
import { ISelectEventFunction } from '../../types';

import { AuthorizationContainer } from '../Authorization';
import { AboutUs } from '../AboutUs';

interface IUnauthorizedRootPops {
  onSelectOptionChange: ISelectEventFunction;
}

export const UnauthorizedRoot: React.FC<IUnauthorizedRootPops> = (props) => {
  const { onSelectOptionChange } = props;

  return (
    <Switch>
      <Route exact path={RoutePathConst.Login}>
        <AuthorizationContainer onSelectOptionChange={onSelectOptionChange} />
      </Route>
      <Route exact path={RoutePathConst.AboutUs} component={AboutUs} />
    </Switch>
  );
};
