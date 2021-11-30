import React from 'react';

import styled from 'styled-components';

import { ButtonText } from '../../components';
import { TabConst } from './Authorization';

const Menu = styled.div`
    padding: 0 40px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 430px) {
        padding: 0 10px;
    }
`;

const Tab = styled.div<ITabProps>`
    ${({ isActive, theme }) => isActive && `
        border-bottom: 1px solid ${theme.colors.black};
    `}
`;

interface INavigationProps {
    setActiveTab: (value: TabConst) => void;
    activeTab: TabConst;
}

interface ITabProps {
    isActive: boolean;
}

export const Navigation: React.FC<INavigationProps> = ({ setActiveTab, activeTab }) => {

    return (
        <Menu>
            <Tab isActive={activeTab === TabConst.SignIn} onClick={() => setActiveTab(TabConst.SignIn)}>
                <ButtonText>Sign In</ButtonText>
            </Tab>
            <Tab isActive={activeTab === TabConst.SignUp} onClick={() => setActiveTab(TabConst.SignUp)}>
                <ButtonText>Sign Up</ButtonText>
            </Tab>
        </Menu>
    );
}