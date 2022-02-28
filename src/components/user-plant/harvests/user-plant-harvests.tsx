import React, { useEffect, useState } from 'react';
import { Box, Grid, Heading, HStack, Skeleton, Spacer, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import { Harvest, UserPlant, useUserPlantHarvestsQuery } from 'src/generated/graphql';
import UserPlantRegisterHarvest from './user-plant-register-harvest';
import UserPlantHarvestCard from './user-plant-harvest-card';
import UserPlantHarvestsLoadMore from './user-plant-harvests-load-more';

interface UserPlantHarvestsProps {
  plantData?: UserPlant;
  loading?: boolean;
}

const UserPlantHarvests: React.FC<UserPlantHarvestsProps> = (props) => {
  const { plantData, loading } = props;
  const [pageCount, setPageCount] = useState(0);
  const [harvests, setHarvests] = useState<Harvest[]>([]);
  const {
    data: harvestsData,
    loading: harvestsLoading,
    fetchMore: harvestsFetchMore,
    variables: harvestsVariables,
  } = useUserPlantHarvestsQuery({
    variables: {
      input: {
        take: 3,
        skip: 0,
        where: {
          uuid: plantData?.uuid,
        },
      },
    },
    fetchPolicy: 'network-only',
  });

  // Initial state load
  useEffect(() => {
    if (harvestsData && harvestsData.userPlantHarvests.edges) {
      const mappedHarvests = harvestsData.userPlantHarvests.edges.map((edge) => edge.node);
      setHarvests(mappedHarvests);
    }
  }, [harvestsData, harvestsLoading]);

  // Fetch more on page change
  useEffect(() => {
    if (pageCount > 0) {
      harvestsFetchMore({
        variables: {
          input: {
            take: harvestsVariables.input.take,
            skip: 3 * pageCount,
            where: {
              ...harvestsVariables.input.where,
            },
          },
        },
      });
    }
  }, [pageCount]);

  return (
    <Stack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      spacing={4}
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
        <UserPlantRegisterHarvest isLoading={loading} loadingText="Loading" />
      </HStack>

      {/* Diseases */}
      <Grid templateColumns={`repeat(${harvests.length % 2 === 0 ? 2 : 3}, 1fr)`} gap={6}>
        {harvests &&
          harvests.length > 0 &&
          harvests.map((harvest, index) => {
            return (
              <Box key={index + harvest.uuid}>
                <UserPlantHarvestCard harvest={harvest} loading={loading} />
              </Box>
            );
          })}
      </Grid>

      {/* No disease */}
      {harvests && harvests.length === 0 && (
        <Skeleton isLoaded={!loading}>
          <Heading as="h3" textAlign="center" fontWeight={600} fontSize="3xl">
            No Harvests
          </Heading>
        </Skeleton>
      )}

      {/* Load more */}
      {harvestsData && harvestsData.userPlantHarvests.pageInfo.hasMore && (
        <UserPlantHarvestsLoadMore
          isLoading={harvestsLoading}
          onClick={() => {
            // Increment page count
            setPageCount(pageCount + 1);
          }}
        />
      )}
    </Stack>
  );
};

export default UserPlantHarvests;
