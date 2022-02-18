import React from 'react';
import UserProfileDetails from './user-profile-details';
import { Container } from '@chakra-ui/react';
import { UserFragment } from 'src/generated/graphql';

interface UserProfileProps {
  userData?: UserFragment;
  loading?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { userData, loading } = props;
  return (
    <Container maxW={['1xl', '2xl', '3xl', '5xl', '7xl']}>
      {/* Main Profile Details */}
      <UserProfileDetails userData={userData} loading={loading} />
      {/* User Plants Details */}
    </Container>
  );
};

export default UserProfile;
