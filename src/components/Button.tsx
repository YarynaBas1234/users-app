import React from 'react';

import { styled } from 'styles';

import { ButtonText } from './Text';

interface IButtonTextStyledProps {
  isSecondary?: boolean;
  isDisabled?: boolean;
  isLong?: boolean;
}

const ButtonTextStyled = styled(ButtonText)<IButtonTextStyledProps>`
  color: ${({ theme, isSecondary, isDisabled }) => isDisabled
  ? theme.colors.gray2
  : isSecondary
    ? theme.colors.black
    : theme.colors.white};
`;

const ButtonBase = styled.button<IButtonTextStyledProps>`
  height: 52px;
  background-color: ${({ theme, disabled, isSecondary }) =>
  disabled
    ? theme.colors.gray5
    : isSecondary
    ? theme.colors.white
    : theme.colors.primary};
  color: ${({ theme, isDisabled, isSecondary }) =>
          isDisabled
    ? theme.colors.gray5 :
                  isSecondary
      ? theme.colors.white
      : theme.colors.black};
  border-radius: 8px;
  width: ${({ isLong }) => isLong ? '100%' : '212px'};
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  border: ${({ theme, isSecondary }) => isSecondary ? `1px solid ${theme.colors.gray5}` : '0'};
  outline: 0;
  &:hover {
    opacity: ${({ disabled }) => disabled ? '1' : '0.8'};
  }
`;

interface IButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  text: string;
  isDisabled?: boolean;
  isSecondary?: boolean;
  onClick: () => void;
  className?: string;
}

export const Button: React.FC<IButtonProps> = props => {
  const { text, isDisabled, isSecondary, onClick, className } = props;
  return (
    <ButtonBase isSecondary={isSecondary} isDisabled={isDisabled} onClick={onClick} className={className}>
      <ButtonTextStyled isSecondary={isSecondary} isDisabled={isDisabled}>{text}</ButtonTextStyled>
    </ButtonBase>
  );
};

export const ButtonLong: React.FC<IButtonProps> = props => {
  const { text, isDisabled, isSecondary, onClick, className } = props;
  return (
    <ButtonBase isSecondary={isSecondary} isDisabled={isDisabled} onClick={onClick} isLong={true} className={className}>
      <ButtonTextStyled isSecondary={isSecondary} isDisabled={isDisabled}>{text}</ButtonTextStyled>
    </ButtonBase>
  )
};

interface IConfirmationButtonWrapperProps {
  isConfirmButtonRed: boolean;
}

const ConfirmationButtonsWrapper = styled.div<IConfirmationButtonWrapperProps>`
  .confirm-button {
    margin-left: 24px;
    background-color: ${({ isConfirmButtonRed, theme }) => isConfirmButtonRed && theme.colors.error};
  }
`;

interface IConfirmationButtonProps extends IConfirmationButtonWrapperProps{
  confirmButtonText: string;
  confirmButtonOnClick: () => void;
  confirmButtonDisabled: boolean;
  denyButtonText: string;
  denyButtonOnClick: () => void;
  denyButtonDisabled: boolean;
}

export const ConfirmationButton: React.FC<IConfirmationButtonProps> = props => {
  const {
    confirmButtonText,
    confirmButtonOnClick,
    confirmButtonDisabled,
    denyButtonText,
    denyButtonOnClick,
    denyButtonDisabled,
    isConfirmButtonRed
  } = props;
  return (
    <ConfirmationButtonsWrapper
      isConfirmButtonRed={isConfirmButtonRed}
    >
      <Button
        text={denyButtonText}
        onClick={denyButtonOnClick}
        isDisabled={denyButtonDisabled}
        isSecondary={true}
        type="submit"
      />
      <Button
        text={confirmButtonText}
        onClick={confirmButtonOnClick}
        isDisabled={confirmButtonDisabled}
        className="confirm-button"
      />
    </ConfirmationButtonsWrapper>
  );
};
