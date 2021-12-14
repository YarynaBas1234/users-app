import { styled } from 'styles';

export const Container = styled.div`
  box-shadow: 0 0 24px ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.colors.white};
`;
