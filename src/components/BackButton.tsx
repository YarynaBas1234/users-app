import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { styled } from '../styles';

import { H5 } from './Text';

const LinkStyled = styled(Link)`
  width: 96px;
  height: 40px;
  border-radius: 8px 0 0 8px;
  background-color: ${({ theme }) => theme.colors.lightGray1};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray2};
  }
`;

interface IBackButton {
  path: string;
}

export const BackButton: React.FC<IBackButton> = (props) => {
  const { path } = props;
  const { t } = useTranslation();

  return (
    <LinkStyled to={path}>
      <H5>{t('BACK')}</H5>
    </LinkStyled>
  );
};
