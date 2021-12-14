import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from 'formik';

import { validationUtil } from '../../utils';
import { CommonConst } from '../../consts';
import {
  FormWrapper,
  ButtonLong,
  InputField,
  PasswordInputField
} from '../../components';

import { IRegistrationActionValues, IHandleRegistrationAction } from '../../store/auth';

interface ISignUpForm {
  switchOnSignInTab: () => void;
  onRegisterAction: IHandleRegistrationAction;
}

export const SignUpForm: React.FC<ISignUpForm> = (props) => {
  const { switchOnSignInTab, onRegisterAction } = props;
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
          onRegisterAction({userName, password});
          resetForm();
          switchOnSignInTab();
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
          </Form>
        }
      </Formik>
    </FormWrapper>
  );
};
