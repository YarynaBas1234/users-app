import React from 'react';

import { styled } from '../../styles';

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  justify-content: space-around;
`;

interface IHome {
  createUsersCard: JSX.Element[] | undefined;
}

export const Home: React.FC<IHome> = (props) => {
  const { createUsersCard } = props;

  return (
    <HomeWrapper>
      {createUsersCard}
    </HomeWrapper>
  );
};
