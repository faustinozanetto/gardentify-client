import React from 'react';
import PlantDiseaseCard from './card/plant-disease-card';
import { Heading, Skeleton, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import { Disease } from 'src/generated/graphql';

interface PlantCommonDiseasesProps {
  diseasesData?: Disease[];
  loading?: boolean;
}

const PlantCommonDiseases: React.FC<PlantCommonDiseasesProps> = (props) => {
  const { diseasesData, loading } = props;
  return (
    <Stack
      direction={['column', 'column', 'column']}
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
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
          fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}
          marginBottom={4}
        >
          Common Diseases
        </Heading>
      </Skeleton>
      {/* Content */}
      <Wrap spacing={6} align="center" justify="center">
        {diseasesData &&
          diseasesData.map((disease, index) => {
            return <PlantDiseaseCard key={index} diseaseData={disease} loading={loading} />;
          })}
      </Wrap>
    </Stack>
  );
};

export default PlantCommonDiseases;
