import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Field, Form, Formik } from 'formik';

import { styled } from '../../styles';
import { validationUtil } from '../../utils';
import { RoutePathConst, languages } from '../../consts';
import { IHandleLoginAction } from '../../store/auth';
import { useChangeLanguage } from '../../hooks';
import {
  ButtonLong,
  FormWrapper,
  InputField,
  PasswordInputField,
  H5,
  DropDown,
} from '../../components';

import { ILoginError } from './types';

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const LinkStyled = styled(Link)`
  :not(:first-child) {
    margin-left: 16px;
  }
`;

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 16px;
`;

const Error = styled(H5)`
  color: ${({ theme }) => theme.colors.red};
`;

const DropDownWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface ISignInForm {
  onLoginClick: IHandleLoginAction;
  loginError: ILoginError;
}

export const SignInForm: React.FC<ISignInForm> = (props) => {
  const { onLoginClick, loginError } = props;
  const { t } = useTranslation();
  const onLanguageChange = useChangeLanguage();

  return (
    <FormWrapper text={t('AUTH.TITLE_LOGIN_FORM')}>
      <DropDownWrapper>
        <DropDown onChange={onLanguageChange} options={languages}/>
      </DropDownWrapper>
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={({ userName, password }) => onLoginClick({ userName, password })}
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
              <LinkStyled to={RoutePathConst.ForgotPassword}>
                <H5>{t('AUTH.FORGOT_PASSWORD')}</H5>
              </LinkStyled>
              <LinkStyled to={RoutePathConst.AboutUs}>
                <H5>{t('ABOUT_US_PAGE.ABOUT_US')}</H5>
              </LinkStyled>
            </LinkWrapper>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
