import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from 'formik';

import { validationUtil } from '../../utils';
import { CommonConst } from '../../consts';
import { IRegistrationActionValues, IHandleRegistrationClick } from '../../store/auth';
import { ISimpleFunction } from '../../types';
import { styled } from '../../styles';
import {
  FormWrapper,
  ButtonLong,
  InputField,
  PasswordInputField,
  H5
} from '../../components';

import { IAuthorizationError } from './types';

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 16px;
`;

const Error = styled(H5)`
  color: ${({ theme }) => theme.colors.red};
`;

interface ISignUpForm {
  switchOnSignInTab: ISimpleFunction;
  onRegistrationClick: IHandleRegistrationClick;
  registrationError: IAuthorizationError;
}

export const SignUpForm: React.FC<ISignUpForm> = (props) => {
  const { switchOnSignInTab, onRegistrationClick, registrationError } = props;
  const { t } = useTranslation();

  return (
    <FormWrapper text={t('AUTH.TITLE_REGISTRATION_FORM')}>
      <Formik
        initialValues={{
          userName: '',
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={({ userName, password }: IRegistrationActionValues, { resetForm }) => {
          onRegistrationClick({userName, password});
          if(registrationError){
            resetForm();
            switchOnSignInTab();
          }
        }}
      >
        {({ handleSubmit, values, isValid, dirty }) =>
          <Form>
            <Field
              name='userName'
              validate={validationUtil.combineValidators(
                validationUtil.required,
                validationUtil.startsFromUpperCase
              )}
              label={t('LABELS.NAME')}
              component={InputField}
            />
            <Field
              name='email'
              validate={validationUtil.combineValidators(
                validationUtil.required,
                validationUtil.email
              )}
              label={t('LABELS.EMAIL')}
              component={InputField}
            />
            <Field
              name='password'
              validate={validationUtil.combineValidators(
                validationUtil.required,
                validationUtil.number,
                validationUtil.upperCase,
                validationUtil.lowerCase,
                validationUtil.lengthBiggerThen(CommonConst.LENGTH_PASSWORD),
              )}
              label={t('LABELS.PASSWORD')}
              component={PasswordInputField}
            />
            <Field
              name='repeatPassword'
              validate={validationUtil.combineValidators(
                validationUtil.checkEquality(
                  values.password,
                  t('LABELS.PASSWORD'),
                  t('LABELS.REPEAT_PASSWORD')
                )
              )}
              label={t('LABELS.REPEAT_PASSWORD')}
              component={PasswordInputField}
            />
            <ButtonLong text={t('AUTH.SIGN_UP')} onClick={handleSubmit} isDisabled={!isValid || !dirty}/>
            <ErrorWrapper>
              {registrationError && <Error>{t(registrationError)}</Error>}
            </ErrorWrapper>
          </Form>
        }
      </Formik>
    </FormWrapper>
  );
};
