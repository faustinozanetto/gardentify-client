import React from 'react';
import { Heading, Skeleton, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import { UserPlant } from 'src/generated/graphql';
import UserPlantCard from 'src/components/user-plant/card/user-plant-card';

interface UserProfilePlantsDetailsProps {
  username?: string;
  userPlants?: UserPlant[];
  loading?: boolean;
}

const UserProfilePlantsDetails: React.FC<UserProfilePlantsDetailsProps> = (props) => {
  const { username, userPlants, loading } = props;

  return (
    <Stack
      boxShadow="2xl"
      bgColor={useColorModeValue('gray.300', 'gray.900')}
      borderRadius="3xl"
      padding={6}
      my={4}
      minWidth="100%"
    >
      {/* Heading */}
      <Skeleton isLoaded={!loading}>
        <Heading
          as="h2"
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}
          marginBottom={4}
        >
          {username}'s Plants
        </Heading>
      </Skeleton>

      {/* Plants Container */}
      <Wrap spacing={6} align="center" justify="center">
        {userPlants &&
          userPlants.map((plant, index) => {
            return <UserPlantCard key={index} userPlant={plant} loading={loading} />;
          })}
      </Wrap>
    </Stack>
  );
};

export default UserProfilePlantsDetails;
