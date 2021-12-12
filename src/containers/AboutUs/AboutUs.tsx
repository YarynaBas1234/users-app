import React from 'react';
import { useTranslation } from 'react-i18next';

import { H1, H3, H5, H6, Container } from '../../components';
import { styled } from '../../styles';
import { envConfigs } from '../../services';
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

const ContainerStyled = styled(Container)`
  width: 100%;
  max-width: 600px;
  height: 100%;
  justify-content: space-between;
  padding: 16px;
`;

const Footer = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

const ContactUs = styled.div`
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

const Contact = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
`;

export const AboutUs = () => {
  const { t } = useTranslation();
  const faceBook = envConfigs.FACEBOOK_LINK;
  const skype = envConfigs.SKYPE;
  const phone = envConfigs.PHONE;

  return (
    <Main>
      <ContainerStyled>
        <AboutOurCompany>
          <H1 isBold={true}>{t('ABOUT_US_PAGE.TITLE')}</H1>
          <Description>{t('ABOUT_US_PAGE.ABOUT_OUR_COMPANY')}</Description>
        </AboutOurCompany>
        <Footer>
          <FooterTitle isBold={true}>{t('ABOUT_US_PAGE.CONTACT_US')}</FooterTitle>
          <ContactUs>
            <Contact>
              <H5>{t('ABOUT_US_PAGE.PHONE')}</H5>
              <H6>{phone}</H6>
            </Contact>
            <Contact>
              <H5>{t('ABOUT_US_PAGE.SKYPE')}</H5>
              <H5>{skype}</H5>
            </Contact>
            <Contact>
              <H5>{t('ABOUT_US_PAGE.FACEBOOK')}</H5>
              <H5>{faceBook}</H5>
            </Contact>
          </ContactUs>
        </Footer>
      </ContainerStyled>
    </Main>
  );
};
