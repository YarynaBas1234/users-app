import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';

import { styled } from '../../styles';
import { validationUtil } from '../../utils';
import { RoutePathConst } from '../../consts';
import { IHandleAuthorisationAction } from '../../store/auth';
import {
  ButtonLong,
  FormWrapper,
  InputField,
  PasswordInputField,
  H6
} from '../../components';

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 16px;
`;

const Error = styled(H6)`
  color: ${({ theme }) => theme.colors.red};
`;

interface ISignInForm {
  onLoginAction: IHandleAuthorisationAction;
  loginError: string | null;
}

export const SignInForm: React.FC<ISignInForm> = (props) => {
  const { onLoginAction, loginError } = props;
  const { t } = useTranslation();

  return (
    <FormWrapper text={t('AUTH.TITLE_LOGIN_FORM')}>
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={({ userName, password }) => onLoginAction({ userName, password })}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <Field
              name='userName'
              validate={ validationUtil.required }
              label={t('LABELS.NAME')}
              component={InputField}
            />
            <Field
              name='password'
              validate={ validationUtil.required }
              label={t('LABELS.PASSWORD')}
              component={PasswordInputField}
            />
            <ButtonLong
              text={t('AUTH.LOGIN')}
              onClick={handleSubmit}
              isDisabled={!isValid || !dirty}
            />
            <ErrorWrapper>
              {loginError && <Error>{t(loginError)}</Error>}
            </ErrorWrapper>
            <LinkWrapper>
              <Link to={RoutePathConst.ForgotPassword}>{t('AUTH.FORGOT_PASSWORD')}</Link>
            </LinkWrapper>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
