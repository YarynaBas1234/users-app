import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';

import { Home } from '../Home';
import { Header } from '../Header';
import { ICurrentUser, IOnLogOutClick } from '../types';

interface IAuthorizedRoot {
  currentUser: ICurrentUser;
  onLogOutClick: IOnLogOutClick;
}

export const AuthorizedRoot: React.FC<IAuthorizedRoot> = (props) => {
  const { currentUser, onLogOutClick } = props;

  return (
    <>
      <Header currentUser={currentUser} onLogOutClick={onLogOutClick} />
      <Switch>
        <Route exact path={RoutePathConst.Home} component={Home} />
      </Switch>
    </>
  );
};