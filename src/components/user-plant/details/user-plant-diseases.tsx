import { Box, Heading, Skeleton, Stack, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Disease, UserPlant, useUserPlantDiseasesQuery } from 'src/generated/graphql';
import UserPlantDiseaseCard from '../disease/user-plant-disease-card';

interface UserPlantDiseasesProps {
  plantData?: UserPlant;
  loading?: boolean;
}

const UserPlantDiseases: React.FC<UserPlantDiseasesProps> = (props) => {
  const { plantData, loading } = props;
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const { data: diseasesData, loading: diseasesLoading } = useUserPlantDiseasesQuery({
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
      setDiseases(mappedDiseases);
    }
  }, [diseasesData, diseasesLoading]);

  return (
    <Stack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      width={'full'}
    >
      {/* Heading */}
      <Box mb={4}>
        <Skeleton isLoaded={!loading}>
          <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
            Plant Diseases
          </Heading>
        </Skeleton>
      </Box>

      {/* Diseases */}
      {diseases &&
        diseases.length > 0 &&
        diseases.map((disease, index) => {
          return <UserPlantDiseaseCard key={index} disease={disease} loading={loading} />;
        })}
      {/* No disease */}
      {diseases && diseases.length === 0 && (
        <Heading as="h3" textAlign="center" fontWeight={600}>
          No Diseases
        </Heading>
      )}
    </Stack>
  );
};

export default UserPlantDiseases;
