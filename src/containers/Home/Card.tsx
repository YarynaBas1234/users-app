import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '../../styles';
import { RoutePathConst } from '../../consts';

const CardWrapper = styled(Link)`
  width: 296px;
  height: 296px;
  background-color:  ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  flex-direction: column;
  padding: 16px;
  cursor: pointer;
  text-decoration: none;
  
  :not(:last-child) { 
    margin-right: 8px;
   }
`;

export const Card: React.FC = () => {

  return (
    <CardWrapper to={RoutePathConst.Profile}>User`s card</CardWrapper>
  );
};
