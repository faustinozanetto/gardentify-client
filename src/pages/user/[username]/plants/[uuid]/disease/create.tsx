import { Box, Heading, Skeleton, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import useAuth from '@modules/state/auth.context';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PlantHarvestCreation from 'src/components/harvest/create/plant-harvest-creation';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import UserPlantDiseaseCard from 'src/components/user-plant/disease/user-plant-disease-card';
import UserPlantHarvestCard from 'src/components/user-plant/harvests/user-plant-harvest-card';
import { Disease, useFindDiseasesQuery } from 'src/generated/graphql';

interface CreatePlantDiseasePageProps {}

const CreatePlantDiseasePage: React.FC<CreatePlantDiseasePageProps> = (props) => {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [selectedDisease, setSelectedDisease] = useState<Disease>();
  const { data: diseasesData, loading: diseasesLoading } = useFindDiseasesQuery({
    variables: {
      input: {
        take: 10,
        skip: 0,
        where: {},
      },
    },
  });

  useEffect(() => {
    if (diseasesData && diseasesData.findDiseases.edges) {
      const mappedEdges = diseasesData.findDiseases.edges.map((edge) => edge.node);
      setDiseases(mappedEdges);
    }
  }, [diseasesData, diseasesLoading]);

  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/',
      }}
    >
      {/* Select Disease */}
      <Stack
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        borderRadius="3xl"
        boxShadow="2xl"
        padding={6}
        width={'full'}
      >
        {/* Heading */}
        <Skeleton isLoaded={!diseasesLoading} mb={4}>
          <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
            Select Disease
          </Heading>
        </Skeleton>
        <Wrap spacing="30px" justify="center">
          {diseases &&
            diseases.length > 0 &&
            diseases.map((disease, index) => {
              return (
                <Box key={disease.uuid} width={'250px'}>
                  <UserPlantDiseaseCard disease={disease} loading={diseasesLoading} />
                </Box>
              );
            })}
        </Wrap>
      </Stack>
    </CoreLayout>
  );
};

export default CreatePlantDiseasePage;
