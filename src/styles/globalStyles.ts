import { createGlobalStyle } from 'styled-components';

import { styled } from 'styles';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`;

export const BackgroundImageStyles = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
