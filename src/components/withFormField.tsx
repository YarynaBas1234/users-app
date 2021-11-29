import { FieldProps, FormikHandlers, FormikProps, getIn } from 'formik';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { styled, theme } from 'styles';

import { H4 } from './Text';

export interface IFormFieldProps {
  label?: string;
  hint?: string;
  disabled?: boolean;
}

export interface IFormComponent<Values = any, Value = any> {
  className?: string;
  isInvalid?: boolean;
  name: string;
  setFocus: (val: boolean) => void;
  setFieldValue: FormikProps<Values>['setFieldValue'];
  setTouched: FormikProps<Values>['setTouched'];
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  value: Value;
  disabled?: boolean;
  onFocus?: (e: any) => void;
}

interface IWrapperProps {
  hasLabel: boolean;
  disabled?: boolean;
  isInvalid?: boolean;
  isFocused: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  padding-top: 20px;

  ${ ({ disabled, isInvalid, isFocused, hasLabel }) =>
          hasLabel &&
          ` 
      position: relative;

      .label {
        position: absolute;
        top: 0;
        left: 0;
        colors: ${ isInvalid ? theme.colors.red : isFocused ? theme.colors.primary : theme.colors.gray };
        ${ disabled && 'opacity: 0.5;' }
      }

      ${ !disabled &&
          !isInvalid &&
          !isFocused &&
          `
        .field-component:hover ~ .label {
          colors: ${ theme.colors.black };
        }
      ` }

      .field-component:focus ~ .label {
        colors: ${ theme.colors.primary };
      }
    ` }
  .error-wrapper {
    display: flex;
    align-items: flex-start;
    padding-top: 5px;

    .error {
      color: ${ theme.colors.red };
    }
  }

  .hint {
    color: ${ theme.colors.gray };
    ${ ({ disabled }) => disabled && 'opacity: 0.5;' }
  }
`;

interface IWithFormFieldProps extends IFormFieldProps, FieldProps {
}

export const withFormField = <OriginalProps extends {}>(Component: React.ComponentType<IFormComponent | OriginalProps>) => (props: IWithFormFieldProps) => {
  const {
    field,
    form,
    label,
    hint,
    ...rest
  } = props;
  const { t } = useTranslation();
  const [isFocused, setFocus] = React.useState(false);
  const isInvalid = getIn(form.errors, field.name) && getIn(form.touched, field.name);

  return (
    <Wrapper
      className="form-field"
      hasLabel={ label !== undefined }
      disabled={ props.disabled }
      isInvalid={ isInvalid }
      isFocused={ isFocused }
    >
      <Component
        isInvalid={ isInvalid }
        setFocus={ setFocus }
        setFieldValue={ form.setFieldValue }
        setTouched={ form.setTouched }
        { ...field }
        { ...rest }
      />
      { label && <H4 className="label media-label">{ label }</H4> }
      { !isInvalid && hint && <H4 className="hint">{ hint }</H4> }
      { form.errors[field.name] && form.touched[field.name] && (
        <div className="error-wrapper">
          <H4 className="error">{ t(form.errors[field.name]?.toString() || '') }</H4>
        </div>
      ) }
    </Wrapper>
  );
};
