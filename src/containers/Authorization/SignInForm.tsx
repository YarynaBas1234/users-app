import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik, FormikErrors } from 'formik';

import { styled } from '../../styles';
import {
  ButtonLong,
  FormWrapper,
  InputField,
  PasswordInputField
} from '../../components';
import { RoutePathConst } from '../../consts';

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
`;

interface IFormValues {
  userName: string;
  password: string;
}

export const SignInForm = () => {
  const { t } = useTranslation();

  return (
    <FormWrapper text={t('AUTH.TITLE_LOGIN_FORM')}>
      <Formik
        initialValues={{ userName: '', password: '' }}

        validate={(values: IFormValues) => {
          let errors: FormikErrors<IFormValues> = {};

          if (!values.password) {
            errors.password = 'ERRORS.FIELD_REQUIRED';
          } else if (!/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9A-Za-z]{0,}$/g.test(values.password)) {
            errors.password = 'ERRORS.PASSWORD.INVALID_PASSWORD';
          } else if (values.password.length < 6) {
            errors.password = 'ERRORS.PASSWORD.PASSWORD_LENGTH';
          }

          if (!values.userName) {
            errors.userName = 'ERRORS.FIELD_REQUIRED';
          } else if (values.userName[0] !== values.userName[0].toUpperCase()) {
            // } else if (!/^[A-Z]/.test(values.password[0])) {
            errors.userName = 'ERRORS.USERNAME.UPPERCASE';
          }

          return errors;
        }}

        onSubmit={(_, { resetForm }) => {
          resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <Field name='userName' label={t('LABELS.NAME')} component={InputField} />
            <Field name='password' label={t('LABELS.PASSWORD')} component={PasswordInputField} />
            <ButtonLong text={t('AUTH.LOGIN')} onClick={handleSubmit} />
            <LinkWrapper>
              <Link to={RoutePathConst.ForgotPassword}>{t('AUTH.FORGOT_PASSWORD')}</Link>
            </LinkWrapper>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
