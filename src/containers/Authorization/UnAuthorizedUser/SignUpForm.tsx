import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Field, Formik, Form } from 'formik';

import { validationUtil } from '../../../utils';
import { CommonConst } from '../../../consts';
import {
  FormWrapper,
  ButtonLong,
  InputField,
  PasswordInputField
} from '../../../components';

interface IValues {
  userName: string,
  email: string,
  password: string,
  repeatPassword: string,
}

export const SignUpForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <FormWrapper text={t('AUTH.TITLE_REGISTRATION_FORM')}>
      <Formik
        initialValues={{
          userName: '',
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={(_, { resetForm }) => {
          resetForm();
        }}
      >
        {({ handleSubmit, values }) =>
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
            <ButtonLong text={t('AUTH.SIGN_UP')} onClick={handleSubmit} />
          </Form>
        }
      </Formik>
    </FormWrapper>
  );
};
