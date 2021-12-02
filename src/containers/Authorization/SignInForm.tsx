import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { useFormik } from 'formik';
import { styled } from '../../styles';

import { WrapperButton, WrapperInputBase, WrapperInputPassword } from '../../components';

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
`;

export const SignInForm = () => {
    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        onSubmit: () => {
            formik.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <WrapperInputBase
                label={t('LABELS.NAME')}
                id={'userName'}
                name={'userName'}
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            <WrapperInputPassword
                label={t('LABELS.PASSWORD')}
                id={'password'}
                name={'password'}
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <WrapperButton text={t('AUTH.LOGIN')} />
            <LinkWrapper>
                <Link to='/forgotPassword'>{t('AUTH.FORGOT_PASSWORD')}</Link>
            </LinkWrapper>
        </form>
    );
};
