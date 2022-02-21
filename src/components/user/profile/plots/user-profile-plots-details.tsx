import React from 'react';
import { Heading, Skeleton, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import { Plot } from 'src/generated/graphql';
import UserPlantCard from 'src/components/user-plant/card/user-plant-card';
import UserPlotCard from 'src/components/plot/card/user-plot-card';

interface UserProfilePlotsDetailsProps {
  username?: string;
  userPlots?: Plot[];
  loading?: boolean;
}

const UserProfilePlotsDetails: React.FC<UserProfilePlotsDetailsProps> = (props) => {
  const { username, userPlots, loading } = props;

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
          {username}'s Plots
        </Heading>
      </Skeleton>

      {/* Plants Container */}
      <Wrap spacing={6} align="center" justify="center">
        {userPlots &&
          userPlots.map((plot, index) => {
            return <UserPlotCard key={index} plot={plot} loading={loading} />;
          })}
      </Wrap>
    </Stack>
  );
};

export default UserProfilePlotsDetails;
