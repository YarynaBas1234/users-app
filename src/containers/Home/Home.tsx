import React from 'react';

import { styled } from '../../styles';
import { IUser } from '../../store/users';

import { Card } from './Card';

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
`;

interface IHome {
  users: IUser[] | null;
}

export const Home: React.FC<IHome> = (props) => {
  const { users } = props;

  return (
    <HomeWrapper>
      {users?.map(item => {
        return <Card key={item.id} item={item}/>;
      })}
    </HomeWrapper>
  );
};
