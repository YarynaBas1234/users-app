import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';

import { styled } from '../../styles';
import { validationUtil } from '../../utils';
import { RoutePathConst } from '../../consts';
import {
  ButtonLong,
  FormWrapper,
  InputField,
  PasswordInputField
} from '../../components';

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
`;

export const SignInForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <FormWrapper text={t('AUTH.TITLE_LOGIN_FORM')}>
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={(_, { resetForm }) => {
          resetForm();
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <Field
              name='userName'
              validate={
                validationUtil.combineValidators(
                validationUtil.required,
              )}
              label={t('LABELS.NAME')}
              component={InputField}
            />
            <Field
              name='password'
              validate={validationUtil.combineValidators(
                validationUtil.required,
              )}
              label={t('LABELS.PASSWORD')}
              component={PasswordInputField}
            />
            <ButtonLong text={t('AUTH.LOGIN')} onClick={handleSubmit} isDisabled={!isValid || !dirty}/>
            <LinkWrapper>
              <Link to={RoutePathConst.ForgotPassword}>{t('AUTH.FORGOT_PASSWORD')}</Link>
            </LinkWrapper>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
