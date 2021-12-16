import React from 'react';

import { styled } from '../../styles';

const CardWrapper = styled.div`
  width: 296px;
  height: 296px;
  background-color:  ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  flex-direction: column;
  padding: 16px;
  
  :not(:last-child) { 
    margin-right: 8px;
   }
`;

export const Card: React.FC = () => {

  return (
    <CardWrapper>User`s card</CardWrapper>
  );
}
