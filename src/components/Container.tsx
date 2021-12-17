import { styled, BackgroundImageStyled } from 'styles';

export const ContainerWrapper = styled(BackgroundImageStyled)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 24px ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.white};
`;
