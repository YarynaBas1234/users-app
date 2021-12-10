import React from 'react';
import { useTranslation } from 'react-i18next';

import { H1, H3, H5 } from '../../components';
import { styled, Container } from '../../styles';
import backgroundImage from '../../images/about-us-background.jpg';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContainerStyles = styled(Container)`
  width: 100%;
  max-width: 600px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const ContactUS = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const FooterTitle = styled(H3)`
  display: flex;
  justify-content: center;
`;

const AboutOurCompany = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Description = styled(H5)`
  margin-top: 8px;
`;

const Contact = styled(H5)`
  padding: 0 8px;
`;

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <ContainerStyles>
        <AboutOurCompany>
          <H1 isBold={true}>{t('ABOUT_US_PAGE.TITLE')}</H1>
          <Description>{t('ABOUT_US_PAGE.ABOUT_OUR_COMPANY')}</Description>
        </AboutOurCompany>
        <ContactUS>
          <FooterTitle isBold={true}>{t('ABOUT_US_PAGE.CONTACT_US')}</FooterTitle>
          <Footer>
            <Contact>{t('ABOUT_US_PAGE.PHONE')}</Contact>
            <Contact>{t('ABOUT_US_PAGE.SKYPE')}</Contact>
            <Contact>{t('ABOUT_US_PAGE.FACEBOOK')}</Contact>
          </Footer>
        </ContactUS>
      </ContainerStyles>
    </Main>
  );
};
