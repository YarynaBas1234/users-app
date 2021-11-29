import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { apiService } from 'services';
import { IStore } from 'store';

import { AuthorizedRoot } from './AuthorizedRoot';
import { UnauthorizedRoot } from './UnauthorizedRoot';

export const Root = () => {
  const { isLoggedIn } = useSelector((state: IStore) => state.auth);
  const { data, error, status, isError, isFetched, isLoading } = useQuery('testkey', () =>
  apiService.get("https://jsonplaceholder.typicode.com/users"));

  console.log(data, 'data');
  console.log(error, 'error');
  console.log(status, 'status');
  console.log(isError, 'isError');
  console.log(isFetched, 'isFetched');
  console.log(isLoading, 'isLoading');

  return (
    <>
      { isLoggedIn ? (
        <AuthorizedRoot/>
      ) : (
        <UnauthorizedRoot/>
      ) }
    </>
  );
};
