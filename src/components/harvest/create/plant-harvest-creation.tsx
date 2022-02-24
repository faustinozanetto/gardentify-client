import React from 'react';
import CreatePlantHarvestForm from 'src/components/forms/harvest/create-plant-harvest-form';
import { Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface PlantHarvestCreationProps {}

const PlantHarvestCreation: React.FC<PlantHarvestCreationProps> = (props) => {
  const { query } = useRouter();
  return (
    <VStack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      my={6}
      minWidth="xl"
    >
      {/* Heading */}
      <Heading as="h1" fontWeight={700} fontSize="4xl">
        Plant Harvest Creation
      </Heading>
      {/* Form */}
      <CreatePlantHarvestForm plantUuid={query.uuid as string} />
    </VStack>
  );
};

export default PlantHarvestCreation;
