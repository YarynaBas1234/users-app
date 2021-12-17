import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  H1,
  H3,
  H4,
  H5,
  Container,
  ContainerWrapper
} from '../../components';
import { styled } from '../../styles';
import { envConfigs } from '../../services';
import backgroundImage from '../../images/about-us-background.jpg';

const ContainerWrapperStyled = styled(ContainerWrapper)`
  background-image: url(${backgroundImage});
`;

const ContainerStyled = styled(Container)`
  max-width: 600px;
  height: 100%;
  justify-content: space-between;
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

const Contact = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
`;

interface IContactData {
  title: string;
  data?: string;
}

const ContactData: React.FC<IContactData> = (props) => {
  const { title, data } = props;
  const { t } = useTranslation();

  return (
    <Contact>
      <H5 isBold={true}>{t(title)}</H5>
      <H5>{data}</H5>
    </Contact>
  );
};

export const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const { FACEBOOK_LINK, SKYPE, PHONE } = envConfigs;

  return (
    <ContainerWrapperStyled>
      <ContainerStyled>
        <AboutOurCompany>
          <H1 isBold={true}>{t('ABOUT_US_PAGE.TITLE_1')}</H1>
          <AboutUsContainer>
            <Description>{t('ABOUT_US_PAGE.PARAGRAPH_1')}</Description>
            <Description>{t('ABOUT_US_PAGE.PARAGRAPH_2')}</Description>
          </AboutUsContainer>
          <AboutUsContainer>
            <TitleToDescription isBold={true}>{t('ABOUT_US_PAGE.SUBTITLE_1')}</TitleToDescription>
            <Description>{t('ABOUT_US_PAGE.PARAGRAPH_3')}</Description>
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
    </ContainerWrapperStyled>
  );
};
