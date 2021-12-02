import React from 'react';
import { useTranslation } from "react-i18next";

import { styled } from '../../styles';
import { ButtonText } from '../../components';

import { TabConst } from './Authorization';

const Menu = styled.div`
    padding: 0 40px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 430px) {
        padding: 0 8px;
    }
`;

const Tab = styled.div<ITabProps>`
    ${({ isActive, theme }) => isActive && `
        border-bottom: 1px solid ${theme.colors.black};
        font-weight: bold;
    `}
`;

const ButtonTextStyled = styled(ButtonText)`
    cursor: pointer;
`;

interface INavigationProps {
  setActiveTab: (value: TabConst) => void;
  activeTab: TabConst;
}

interface ITabProps {
  isActive: boolean;
}

export const Navigation: React.FC<INavigationProps> = ({ setActiveTab, activeTab }) => {
  const { t } = useTranslation();
  return (
    <Menu>
      <Tab isActive={activeTab === TabConst.SignIn} onClick={() => setActiveTab(TabConst.SignIn)}>
      <ButtonTextStyled>{t('AUTH.SIGN_IN')}</ButtonTextStyled>
      </Tab>
      <Tab isActive={activeTab === TabConst.SignUp} onClick={() => setActiveTab(TabConst.SignUp)}>
      <ButtonTextStyled>{t('AUTH.SIGN_UP')}</ButtonTextStyled>
      </Tab>
    </Menu>
  );
};
