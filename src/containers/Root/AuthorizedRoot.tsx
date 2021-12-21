import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';

import { HomeContainer } from '../Home';
import { Header } from '../Header';
import { ICurrentUser } from '../types';

interface IAuthorizedRoot {
  currentUser: ICurrentUser;
}

export const AuthorizedRoot: React.FC<IAuthorizedRoot> = (props) => {
  const { currentUser } = props;

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path={RoutePathConst.Home} component={HomeContainer} />
      </Switch>
    </>
  );
};