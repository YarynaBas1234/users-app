import React from 'react';

import { css, styled } from 'styles';

import { EyeCrossedIcon, EyeIcon } from './icons';
import { IFormComponent, withFormField } from './withFormField';

type IInputProps = React.ComponentPropsWithoutRef<'input'> & IFormComponent;

export const inputStyles = css<IFormComponent>`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  box-shadow: none;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  border: solid 1px ${({ theme, isInvalid }) => (isInvalid ? theme.colors.error : theme.colors.gray2)};
  border-radius: 8px;

  &:disabled {
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.white};
  }

  ${({ theme, disabled, isInvalid }) =>
  !disabled &&
  `
    &:hover {
      border: solid 1px ${isInvalid ? theme.colors.error : theme.colors.gray5};
    }
  `}
  &:focus {
    border: solid 1px ${({ theme, isInvalid }) => (isInvalid ? theme.colors.error : theme.colors.primary)};
    caret-color: ${({ theme }) => theme.colors.primary};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

export const InputBase = styled.input<IInputProps>`
  ${inputStyles}
`;

type ITextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & IFormComponent;


export const TextAreaBase = styled.textarea<ITextAreaProps>`
  ${inputStyles};
  min-height: 120px;
`;


export const Input: React.FC<IInputProps & IFormComponent> = props => {
  return (
    <InputBase {...props}/>
  );
};

const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;

  .right-icon {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

export const PasswordInput: React.FC<IInputProps & IFormComponent> = props => {

  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  return (
    <PasswordInputWrapper>
      <InputBase {...props} type={isPasswordVisible ? 'text' : 'password'}/>
      <div className="right-icon" onClick={() => setIsPasswordVisible(prevState => !prevState)}>
        {isPasswordVisible ? <EyeIcon/> : <EyeCrossedIcon/>}
      </div>
    </PasswordInputWrapper>
  )
};

export const TextAreaInput: React.FC<ITextAreaProps & IFormComponent> = props => {
  return (
    <TextAreaBase {...props} />
  );
};

export const InputField = withFormField(Input);
export const PasswordInputField = withFormField(PasswordInput);
export const TextAreaInputField = withFormField(TextAreaInput);
