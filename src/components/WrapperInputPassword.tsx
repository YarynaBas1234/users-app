import React from 'react';
import { FormikHandlers } from 'formik';

import styled from 'styled-components';

import { PasswordInput } from '../components';

const InputStyled = styled.div`
    margin-top: 16px;
`;

interface IWrapperInputPassword {
  label: string;
  id: string;
  name: string;
  onChange: FormikHandlers['handleChange'];
  value: string;
}

export const WrapperInputPassword: React.FC<IWrapperInputPassword> = ({ label, id, name, onChange, value }) => {
  return (
    <InputStyled>
      <label htmlFor="userName">{label}</label>
      <PasswordInput
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputStyled>
  );
};
