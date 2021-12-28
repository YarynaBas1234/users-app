import React from 'react';

import { IUser } from '../../store/users';
import { styled } from '../../styles';
import { H3, CardInfo, BackButton } from '../../components';
import { ResponseScreen, RoutePathConst } from '../../consts';

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  @media screen and (${ResponseScreen.maxWidth700}) {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  };
`;

const ProfileCard = styled.div`
  max-width: 600px;
  width: 100%;
  height: 400px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  box-shadow: 0 0 16px ${({ theme }) => theme.colors.lightGray2};
  @media screen and (${ResponseScreen.maxWidth700}) {
    max-width: unset;
  };
`;

const Title = styled(H3)`
  margin-top: 24px;
  text-align: center;
  @media screen and (${ResponseScreen.maxHeight414}) {
    margin-top: 0;
  };
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (${ResponseScreen.maxWidth700}) {
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
    margin: 32px 0;
  };
`;

const RightBlock = styled.div`
  margin-left: 8px;
  @media screen and (${ResponseScreen.maxWidth700}) {
    margin-top: 16px;
    margin-left: 0;
  };
  @media screen and (${ResponseScreen.maxWidth370}) {
    margin-top: 8px;
  };
`;

interface IProfileProps {
  user: IUser;
}

export const Profile: React.FC<IProfileProps> = (props) => {
  const { user } = props;
  const { name, username, company, website, address, email, phone } = user;
  const fullAddress = address.city + ', ' + address.street;

  return (
    <ProfileWrapper>
      <BackButton path={RoutePathConst.Home} />
      <ProfileCard>
        <Title>{name}</Title>
        <ProfileInfo>
          <div>
            <CardInfo title='HOME_PAGE.USERNAME' value={username} />
            <CardInfo title='HOME_PAGE.COMPANY_NAME' value={company.name} />
            <CardInfo title='HOME_PAGE.WEBSITE' value={website} />
          </div>
          <RightBlock>
            <CardInfo title='HOME_PAGE.ADDRESS' value={fullAddress} />
            <CardInfo title='HOME_PAGE.EMAIL' value={email} />
            <CardInfo title='HOME_PAGE.PHONE_NUMBER' value={phone} />
          </RightBlock>
        </ProfileInfo>
      </ProfileCard>
    </ProfileWrapper>
  );
};
