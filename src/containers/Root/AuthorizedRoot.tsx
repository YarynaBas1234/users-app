import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RoutePathConst } from '../../consts';
import { ISimpleFunction } from '../../types';
import { IStore } from '../../store';
import { IUser } from '../../store/users';

import { HomeContainer } from '../Home';
import { Header } from '../Header';
import { ICurrentUser } from '../types';
import { Profile } from '../Profile';

interface IAuthorizedRoot {
  currentUser: ICurrentUser;
  onLogOutClick: ISimpleFunction;
}

export const AuthorizedRoot: React.FC<IAuthorizedRoot> = (props) => {
  const { currentUser, onLogOutClick } = props;
  const { users } = useSelector((state: IStore) => state.users);

  return (
    <>
      <Header currentUser={currentUser} onLogOutClick={onLogOutClick} />
      <Switch>
        <Route exact path={RoutePathConst.Home} component={HomeContainer} />
        {users?.map((user: IUser) => (
          <Route path={RoutePathConst.Profile + user.name}><Profile user={user} /></Route>
        ))}
      </Switch>
    </>
  );
};
