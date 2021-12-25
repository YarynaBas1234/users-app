import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import { RoutePathConst } from '../../consts';
import { ISimpleFunction, ISelectEventFunction } from '../../types';

import { HomeContainer } from '../Home';
import { Header } from '../Header';
import { ICurrentUser } from '../types';
import { Profile } from '../Profile';

interface IAuthorizedRoot {
  currentUser: ICurrentUser;
  onLogOutClick: ISimpleFunction;
  onSelectOptionChange: ISelectEventFunction;
}

export const AuthorizedRoot: React.FC<IAuthorizedRoot> = (props) => {
  const { currentUser, onLogOutClick, onSelectOptionChange } = props;

  return (
    <>
      <Header currentUser={currentUser} onLogOutClick={onLogOutClick} onSelectOptionChange={onSelectOptionChange}/>
      <Switch>
        <Route exact path={RoutePathConst.Home} component={HomeContainer} />
        <Route exact path={RoutePathConst.Profile} component={Profile} />
      </Switch>
    </>
  );
};
