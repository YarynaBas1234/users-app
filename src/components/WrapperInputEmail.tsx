import React from 'react';
import { FormikHandlers } from 'formik';

import styled from 'styled-components';

import { InputBase } from '../components';

const InputStyled = styled.div`
    margin-top: 16px;
`;

interface IWrapperInputEmail {
  label: string;
  id: string;
  name: string;
  onChange: FormikHandlers['handleChange'];
  value: string;
}

export const WrapperInputEmail: React.FC<IWrapperInputEmail> = ({ label, id, name, onChange, value }) => {
  return (
    <InputStyled>
      <label htmlFor="password">{label}</label>
      <InputBase
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      />

    </InputStyled>
  );
};
