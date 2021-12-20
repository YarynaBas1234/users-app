import React from 'react';

import { styled } from '../../styles';

import { Card } from './Card';

const HomeWrapper = styled.div`
  display: flex;
  padding: 8px;
  margin-top: 16px;
  border-radius: 8px;
`;

export const Home: React.FC = () => {

  return (
    <HomeWrapper>
      <Card />
    </HomeWrapper>
  );
};
