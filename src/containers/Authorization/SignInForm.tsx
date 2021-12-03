import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';

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

export const SignInForm = () => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ userName: '', password: '' }}
      onSubmit={( _, { resetForm }) => {
        resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <FormWrapper text={t('AUTH.TITLE_LOGIN_FORM')}>
          <Form >
            <Field name='userName' label={t('LABELS.NAME')} component={InputField} />
            <Field name='password' label={t('LABELS.PASSWORD')} component={PasswordInputField} />
            <ButtonLong text={t('AUTH.LOGIN')} onClick={handleSubmit}/>
            <LinkWrapper>
              <Link to={RoutePathConst.ForgotPassword}>{t('AUTH.FORGOT_PASSWORD')}</Link>
            </LinkWrapper>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};
