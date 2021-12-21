import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';
import { ISimpleFunction } from '../../types';

import { HomeContainer } from '../Home';
import { Header } from '../Header';
import { ICurrentUser } from '../types';

interface IAuthorizedRoot {
  currentUser: ICurrentUser;
  onLogOutClick: ISimpleFunction;
}

export const AuthorizedRoot: React.FC<IAuthorizedRoot> = (props) => {
  const { currentUser, onLogOutClick } = props;

  return (
    <>
      <Header currentUser={currentUser} onLogOutClick={onLogOutClick} />
      <Switch>
        <Route exact path={RoutePathConst.Home} component={HomeContainer} />
      </Switch>
    </>
  );
};