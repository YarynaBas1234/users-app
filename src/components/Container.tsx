import { styled } from 'styles';

export const ContainerWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFixedImage = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 24px ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.colors.white};
`;
