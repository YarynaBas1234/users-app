import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`;

export const backgroundDefaultConfig = css`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
