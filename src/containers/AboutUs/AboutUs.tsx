import React from 'react';
import { useTranslation } from 'react-i18next';

import { H1, H3, H4, H5, Container, ContactData } from '../../components';
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

const TitleToDescription = styled(H4)`
  display: block;
  margin-bottom: 8px;
`;

const AboutUsContainer = styled.div`
  margin-top: 8px;
`;

const Description = styled(H5)`
  text-indent: 20px;
`;

export const AboutUs = () => {
  const { t } = useTranslation();
  const { FACEBOOK_LINK, SKYPE, PHONE } = envConfigs;

  return (
    <Main>
      <ContainerStyled>
        <AboutOurCompany>
          <H1 isBold={true}>{t('ABOUT_US_PAGE.TITLE_1')}</H1>
          <AboutUsContainer>
            <Description>
              {t('ABOUT_US_PAGE.PARAGRAPH_1')}
            </Description>
            <Description>
              {t('ABOUT_US_PAGE.PARAGRAPH_2')}
            </Description>
          </AboutUsContainer>
          <AboutUsContainer>
            <TitleToDescription isBold={true}>
              {t('ABOUT_US_PAGE.TITLE_1_1')}
            </TitleToDescription>
            <Description>
              {t('ABOUT_US_PAGE.PARAGRAPH_3')}
            </Description>
          </AboutUsContainer>
        </AboutOurCompany>
        <Footer>
          <FooterTitle isBold={true}>{t('ABOUT_US_PAGE.CONTACT_US')}</FooterTitle>
          <ContactUs>
            <ContactData title='ABOUT_US_PAGE.CONTACT_US' data={PHONE} />
            <ContactData title='ABOUT_US_PAGE.SKYPE' data={SKYPE} />
            <ContactData title='ABOUT_US_PAGE.FACEBOOK' data={FACEBOOK_LINK} />
          </ContactUs>
        </Footer>
      </ContainerStyled>
    </Main>
  );
};
