import { Box, Heading, HStack, Skeleton, Spacer, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Disease, UserPlant, useUserPlantDiseasesQuery } from 'src/generated/graphql';
import UserPlantDiseaseCard from './user-plant-disease-card';
import UserPlantDiseasesLoadMore from './user-plant-diseases-load-more';
import UserPlantRegisterDisease from './user-plant-register-disease';

interface UserPlantDiseasesProps {
  plantData: UserPlant;
  loading?: boolean;
}

const UserPlantDiseases: React.FC<UserPlantDiseasesProps> = (props) => {
  const { plantData, loading } = props;
  const [pageCount, setPageCount] = useState(0);
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const {
    data: diseasesData,
    loading: diseasesLoading,
    fetchMore: diseasesFetchMore,
    variables: diseasesVariables,
  } = useUserPlantDiseasesQuery({
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
    if (diseasesData && diseasesData.userPlantDiseases) {
      const mappedDiseases = diseasesData.userPlantDiseases.edges.map((edge) => edge.node);
      // Sort by date
      const sortedDiseases = mappedDiseases.sort((a, b) => {
        if (a.appearedOn > b.appearedOn) return 1;
        if (a.appearedOn < b.appearedOn) return -1;
        return 0;
      });
      setDiseases(sortedDiseases);
    }
  }, [diseasesData, diseasesLoading]);

  // Fetch more on page change
  useEffect(() => {
    if (pageCount > 0) {
      diseasesFetchMore({
        variables: {
          input: {
            take: diseasesVariables.input.take,
            skip: 3 * pageCount,
            where: { ...diseasesVariables.input.where },
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
            Plant Diseases
          </Heading>
        </Skeleton>
        <Spacer />
        {/* Regiter Disease */}
        <UserPlantRegisterDisease isLoading={loading} loadingText="Loading" />
      </HStack>

      {/* Diseases */}
      <Wrap spacing="30px" justify="center">
        {diseases &&
          diseases.length > 0 &&
          diseases.map((disease, index) => {
            return (
              <Box key={index} width={'250px'}>
                <UserPlantDiseaseCard disease={disease} loading={loading} />
              </Box>
            );
          })}
      </Wrap>
      {/* No disease */}
      {diseases && diseases.length === 0 && (
        <Skeleton isLoaded={!loading}>
          <Heading as="h3" textAlign="center" fontWeight={600} fontSize="3xl">
            No Diseases
          </Heading>
        </Skeleton>
      )}

      {/* Load more */}
      {diseasesData && diseasesData.userPlantDiseases.pageInfo.hasMore && (
        <UserPlantDiseasesLoadMore
          isLoading={diseasesLoading}
          onClick={() => {
            // Increment page count
            setPageCount(pageCount + 1);
          }}
        />
      )}
    </Stack>
  );
};

export default UserPlantDiseases;
