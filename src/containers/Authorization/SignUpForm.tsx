import React from 'react';
import { useTranslation } from "react-i18next";
import { Field, Formik, Form } from 'formik';

import {
  FormWrapper,
  ButtonLong,
  InputField,
  PasswordInputField
} from '../../components';

export const SignUpForm = () => {
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
        onSubmit={(_, { resetForm }) => {
          resetForm();
        }}
      >
        {({ handleSubmit }) =>
          <Form>
            <Field
              name='userName'
              label={t('LABELS.NAME')}
              component={InputField}
            />
            <Field
              name='email'
              label={t('LABELS.EMAIL')}
              component={InputField}
            />
            <Field
              name='password'
              label={t('LABELS.PASSWORD')}
              component={PasswordInputField}
            />
            <Field
              name='repeatPassword'
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
