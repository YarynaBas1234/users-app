import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  H1,
  H3,
  H5,
  H6,
  Container,
  ContainerWrapper,
  BackButton,
} from '../../components';
import { styled, backgroundDefaultConfig } from '../../styles';
import { envConfigs } from '../../services';
import backgroundImage from '../../images/about-us-background.jpg';
import { ResponseScreen, RoutePathConst } from '../../consts';

const ContainerWrapperStyled = styled(ContainerWrapper)`
  background-image: url(${backgroundImage});
  ${backgroundDefaultConfig};
  @media screen and (${ResponseScreen.maxWidth700}) {
    flex-direction: column;
  };
`;

const ContainerStyled = styled(Container)`
  max-width: 600px;
  height: 100%;
  justify-content: space-between;
  overflow-y: auto;
  @media screen and (${ResponseScreen.maxWidth700}) {
    max-width: unset;
    justify-content: space-between;
    flex-grow: 3;
  };
`;

const FooterWrapper = styled.div`
  width: ${({ theme }) => theme.maxPercentWithoutMargin};
  padding: 8px;
  margin: 16px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  @media screen and (${ResponseScreen.maxWidth700}) {
    margin: 0;
  };
`;

const ContactUsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterTitle = styled(H3)`
  display: flex;
  justify-content: center;
`;

const CompanyDescriptionBlock = styled.div`
  width: ${({ theme }) => theme.maxPercentWithoutMargin};
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const TitleDescription = styled(H5)`
  display: block;
  margin-bottom: 8px;
`;

const AboutUsContainer = styled.div`
  margin-top: 8px;
`;

const Description = styled(H6)`
  text-indent: 20px;
`;

const Contact = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  width: 100%;
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

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { FACEBOOK_LINK, SKYPE, PHONE } = envConfigs;

  return (
    <FooterWrapper>
      <FooterTitle isBold={true}>{t('ABOUT_US_PAGE.CONTACT_US')}</FooterTitle>
      <ContactUsBlock>
        <ContactData title='ABOUT_US_PAGE.PHONE_NUMBER' data={PHONE} />
        <ContactData title='ABOUT_US_PAGE.SKYPE' data={SKYPE} />
        <ContactData title='ABOUT_US_PAGE.FACEBOOK' data={FACEBOOK_LINK} />
      </ContactUsBlock>
    </FooterWrapper>
  );
};

export const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ContainerWrapperStyled>
      <BackButton path={RoutePathConst.Login} />
      <ContainerStyled>
        <CompanyDescriptionBlock>
          <H1 isBold={true}>{t('ABOUT_US_PAGE.TITLE_1')}</H1>
          <AboutUsContainer>
            <Description>{t('ABOUT_US_PAGE.PARAGRAPH_1')}</Description>
            <Description>{t('ABOUT_US_PAGE.PARAGRAPH_2')}</Description>
          </AboutUsContainer>
          <AboutUsContainer>
            <TitleDescription isBold={true}>{t('ABOUT_US_PAGE.SUBTITLE_1')}</TitleDescription>
            <Description>{t('ABOUT_US_PAGE.PARAGRAPH_3')}</Description>
          </AboutUsContainer>
        </CompanyDescriptionBlock>
        <Footer />
      </ContainerStyled>
    </ContainerWrapperStyled>
  );
};
