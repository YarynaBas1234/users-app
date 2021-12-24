import React from 'react';

import { IUser } from '../../store/users';
import { styled } from '../../styles';
import { H3, CardInfo, BackButton } from '../../components';
import { RoutePathConst } from '../../consts';

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const ProfileCard = styled.div`
  width: 600px;
  max-width: 100%;
  height: 400px;
  max-height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  box-shadow: 0 0 16px ${({ theme }) => theme.colors.lightGray2};
`;

const Title = styled(H3)`
  margin-top: 24px;
  text-align: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
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
          <div>
            <CardInfo title='HOME_PAGE.ADDRESS' value={fullAddress} />
            <CardInfo title='HOME_PAGE.EMAIL' value={email} />
            <CardInfo title='HOME_PAGE.PHONE_NUMBER' value={phone} />
          </div>
        </ProfileInfo>
      </ProfileCard>
    </ProfileWrapper>
  );
};
