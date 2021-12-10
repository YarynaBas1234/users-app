import React from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '../../styles';
import { ButtonText } from '../../components';

import { SwitchTabConst } from './Authorization';

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
  cursor: pointer;
  ${({ isActive, theme }) => isActive && `
      border-bottom: 1px solid ${theme.colors.black};
      font-weight: bold;
  `}
`;

interface INavigationProps {
  setActiveTab: (value: SwitchTabConst) => void;
  activeTab: SwitchTabConst;
}

interface ITabProps {
  isActive: boolean;
}

export const Navigation: React.FC<INavigationProps> = ({ setActiveTab, activeTab }) => {
  const { t } = useTranslation();
  
  return (
    <Menu>
      <Tab isActive={activeTab === SwitchTabConst.SignIn} onClick={() => setActiveTab(SwitchTabConst.SignIn)}>
        <ButtonText>{t('AUTH.SIGN_IN')}</ButtonText>
      </Tab>
      <Tab isActive={activeTab === SwitchTabConst.SignUp} onClick={() => setActiveTab(SwitchTabConst.SignUp)}>
        <ButtonText>{t('AUTH.SIGN_UP')}</ButtonText>
      </Tab>
    </Menu>
  );
};
