import { createGlobalStyle } from 'styled-components';

import { styled } from '../styles';

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  },
`;

export const Container = styled.div`
  box-shadow: 0 0 24px rgba(119,92,58, 0.4);
  display: flex;
  flex-direction: column;
  padding: 40px;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.colors.white};
`;
