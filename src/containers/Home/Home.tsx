import React from 'react';

import { styled } from '../../styles';
import { IUser, IUsers } from '../../store/users';

import { Card } from './Card';

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  justify-content: space-around;
`;

interface IHomeProps {
  users: IUsers;
}

export const Home: React.FC<IHomeProps> = (props) => {
  const { users } = props;

  const UserCards: React.ReactElement = React.useMemo(() => (
      <>
        {users?.map((user: IUser) => (
          <Card key={user.id} user={user} />
        ))}
      </>
    ), [users]
  );

  return <HomeWrapper>{UserCards}</HomeWrapper>;
};
