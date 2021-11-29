import React, { useState } from 'react';

import { Modal as ModalComponent } from 'components';

interface IModalProps {
  onCrossClick?: () => void;
  title?: string;
  isClosable?: boolean;
}

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => setIsVisible(true);

  const closeModal = () => setIsVisible(false);

  const Modal: React.FC<IModalProps> = React.useMemo(
    () => ({ children, onCrossClick, ...rest }) => (
      <ModalComponent isVisible={isVisible} onCrossClick={onCrossClick || closeModal} {...rest}>
        {children}
      </ModalComponent>
    ),
    [isVisible]
  );

  return {
    openModal,
    closeModal,
    Modal,
  }
}
