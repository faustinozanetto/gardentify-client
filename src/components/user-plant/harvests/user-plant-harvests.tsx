import React, { useEffect, useState } from 'react';
import { Box, Heading, HStack, Skeleton, Spacer, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import { Harvest, UserPlant, useUserPlantHarvestsQuery } from 'src/generated/graphql';
import UserPlantRegisterHarvest from './user-plant-register-harvest';
import UserPlantHarvestCard from './user-plant-harvest-card';

interface UserPlantHarvestsProps {
  plantData?: UserPlant;
  loading?: boolean;
}

const UserPlantHarvests: React.FC<UserPlantHarvestsProps> = (props) => {
  const { plantData, loading } = props;
  const [harvests, setHarvests] = useState<Harvest[]>([]);
  const { data: harvestsData, loading: harvestsLoading } = useUserPlantHarvestsQuery({
    variables: {
      input: {
        take: 3,
        skip: 0,
        where: {
          uuid: plantData?.uuid,
        },
      },
    },
  });

  // Initial state load
  useEffect(() => {
    if (harvestsData && harvestsData.userPlantHarvests) {
      const mappedHarvests = harvestsData.userPlantHarvests.edges.map((edge) => edge.node);
      setHarvests(mappedHarvests);
    }
  }, [harvestsData, harvestsLoading]);

  return (
    <Stack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      width={'full'}
    >
      {/* Heading */}
      <HStack textAlign={'center'} width={'full'} mb={4}>
        <Skeleton isLoaded={!loading}>
          <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
            Plant Harvests
          </Heading>
        </Skeleton>
        <Spacer />
        {/* Regiter Disease */}
        <UserPlantRegisterHarvest />
      </HStack>

      {/* Diseases */}
      <Wrap spacing="30px" justify="center">
        {harvests &&
          harvests.length > 0 &&
          harvests.map((harvest, index) => {
            return (
              <Box key={harvest.uuid} width={'250px'}>
                <UserPlantHarvestCard harvest={harvest} loading={loading} />
              </Box>
            );
          })}
      </Wrap>

      {/* No disease */}
      {harvests && harvests.length === 0 && (
        <Skeleton isLoaded={!loading}>
          <Heading as="h3" textAlign="center" fontWeight={600} fontSize="3xl">
            No Harvests
          </Heading>
        </Skeleton>
      )}
    </Stack>
  );
};

export default UserPlantHarvests;
