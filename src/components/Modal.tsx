import React from 'react';
import ReactDOM from 'react-dom';

import { styled } from 'styles';

import { CrossIcon } from './icons';
import { H2 } from './Text';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
  z-index: 101;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  left: 0;
  top: 0;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 48px 32px;
  z-index: 102;
  border-radius: 8px;
`;

const CrossIconWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const Title = styled(H2)`
  margin-bottom: 16px;
`;

interface IModalProps {
  onCrossClick?: () => void;
  title?: string;
  isVisible: boolean;
  isClosable?: boolean;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const { children, onCrossClick, title, isVisible, isClosable } = props;
  const el: HTMLElement | React.DetailedReactHTMLElement<{ className: string }, HTMLElement> = document.getElementById('modals')
    || React.createElement('div', { className: "modals" }, null);
  return ReactDOM.createPortal(
    (<>
      {isVisible ? (
        <Wrapper>
          <ModalContent>
            {title && <Title isBold={true}>{title}</Title>}
            {children}
            {isClosable && (
              <CrossIconWrapper onClick={onCrossClick}>
                <CrossIcon/>
              </CrossIconWrapper>
            )}
          </ModalContent>
        </Wrapper>
      ) : null}
    </>), el as HTMLElement
  );
};
