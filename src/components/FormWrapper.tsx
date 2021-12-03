import React from 'react';

import { H2 } from './Text';

interface IFormWrapper {
  text: string;
}

export const FormWrapper: React.FC<IFormWrapper> = props => {
  const { children, text } = props;

  return (
    <>
      <H2 isBold={true}>{text}</H2>
      { children}
    </>
  );
};