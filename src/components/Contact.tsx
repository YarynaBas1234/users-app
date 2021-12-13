import React from 'react';
import { useTranslation } from 'react-i18next';

import { H5 } from '../components';
import { styled } from '../styles';

const Contact = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
`;

interface IContactData {
  title: string;
  data?: string;
}

export const ContactData: React.FC<IContactData> = (props) => {
  const { title, data } = props;
  const { t } = useTranslation();

  return (
    <Contact>
      <H5 isBold={true}>{t(title)}</H5>
      <H5>{data}</H5>
    </Contact>
  );
};
