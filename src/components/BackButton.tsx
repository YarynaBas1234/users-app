import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { styled } from '../styles';

import { H5 } from './Text';

const LinkStyled = styled(Link)`
  width: 96px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  color: ${({theme}) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  border-radius: 8px;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.lightGray};
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
