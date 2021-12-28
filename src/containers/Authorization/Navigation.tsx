import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { ButtonText } from '../../components';

import { ISetActiveTab, TabConst } from './types';

const Menu = styled.div`
    padding: 0 40px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 400px) {
      padding: 0 8px;
    }
`;

const Tab = styled.div<ITabProps>`
  cursor: pointer;
  ${({ isActive, theme }) => isActive && `
      border-bottom: 1px solid ${theme.colors.black};
      font-weight: bold;
  `}
`;

interface INavigationProps {
  setActiveTab: ISetActiveTab;
  activeTab: TabConst;
}

interface ITabProps {
  isActive: boolean;
}

export const Navigation: React.FC<INavigationProps> = (props) => {
  const { setActiveTab, activeTab } = props;
  const { t } = useTranslation();
  
  return (
    <Menu>
      <Tab isActive={activeTab === TabConst.SignIn} onClick={() => setActiveTab(TabConst.SignIn)}>
        <ButtonText>{t('AUTH.SIGN_IN')}</ButtonText>
      </Tab>
      <Tab isActive={activeTab === TabConst.SignUp} onClick={() => setActiveTab(TabConst.SignUp)}>
        <ButtonText>{t('AUTH.SIGN_UP')}</ButtonText>
      </Tab>
    </Menu>
  );
};
