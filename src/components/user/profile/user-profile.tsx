import React from 'react';
import UserProfileDetails from './details/user-profile-details';
import { Container } from '@chakra-ui/react';
import { Plot, User, UserPlant } from 'src/generated/graphql';
import UserProfilePlotsDetails from './plots/user-profile-plots-details';

interface UserProfileProps {
  userData?: User;
  userPlants?: UserPlant[];
  loading?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { userData, loading } = props;
  return (
    <Container maxW={['1xl', '2xl', '3xl', '5xl', '7xl']}>
      {/* Main Profile Details */}
      <UserProfileDetails userData={userData} loading={loading} />
      {/* User Plants Details */}
      {/* <UserProfilePlantsDetails username={userData.username} loading={loading} userPlants={userPlants} /> */}
      <UserProfilePlotsDetails username={userData.username} loading={loading} />
    </Container>
  );
};

export default UserProfile;
