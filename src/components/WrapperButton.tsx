import React from 'react';

import styled from 'styled-components';

import { Button } from '../components';

const ButtonContainer = styled.div`
    margin-top: 16px;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const ButtonStyled = styled(Button)`
    width: 100%;
`;

interface IWrapperButtonProps {
  text: string;
}

export const WrapperButton: React.FC<IWrapperButtonProps> = ({ text }) => {
  return (
    <ButtonContainer>
      <ButtonStyled text={text} />
    </ButtonContainer>
  );
};
