import React from 'react';
import UserProfileDetails from './details/user-profile-details';
import UserProfilePlantsDetails from './plants/user-profile-plants-details';
import { Container } from '@chakra-ui/react';
import { User, UserPlant } from 'src/generated/graphql';

interface UserProfileProps {
  userData?: User;
  userPlants?: UserPlant[];
  loading?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { userData, userPlants, loading } = props;
  return (
    <Container maxW={['1xl', '2xl', '3xl', '5xl', '7xl']}>
      {/* Main Profile Details */}
      <UserProfileDetails userData={userData} loading={loading} />
      {/* User Plants Details */}
      <UserProfilePlantsDetails username={userData.username} loading={loading} userPlants={userPlants} />
    </Container>
  );
};

export default UserProfile;
