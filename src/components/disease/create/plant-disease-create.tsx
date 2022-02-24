import React, { useState } from 'react';
import { Stack, Skeleton, useColorModeValue, Heading, Wrap, Box, useDisclosure } from '@chakra-ui/react';
import UserPlantDiseaseCard from 'src/components/user-plant/disease/user-plant-disease-card';
import { Disease } from 'src/generated/graphql';
import PlantDiseaseSelectCard from './plant-disease-select-card';
import PlantDisaseCreateModal from './plant-disease-create-modal';
import CreatePlantDiseaseForm from 'src/components/forms/diseases/create-plant-disease-form';

interface PlantDiseaseCreateProps {
  diseases: Disease[];
  loading: boolean;
}

const PlantDiseaseCreate: React.FC<PlantDiseaseCreateProps> = (props) => {
  const { diseases, loading } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDisease, setSelectedDisease] = useState<Disease>();
  return (
    <Stack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      width={'full'}
    >
      {/* Heading */}
      <Skeleton isLoaded={!loading} mb={4}>
        <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
          Select Disease
        </Heading>
      </Skeleton>
      {/* Diseases */}
      <Wrap spacing="30px" justify="center">
        {diseases &&
          diseases.length > 0 &&
          diseases.map((disease, index) => {
            return (
              <Box key={disease.uuid} width={'250px'}>
                <PlantDiseaseSelectCard
                  disease={disease}
                  loading={loading}
                  onClick={() => {
                    setSelectedDisease(disease);
                    onOpen();
                  }}
                />
              </Box>
            );
          })}
      </Wrap>

      {isOpen && <PlantDisaseCreateModal isOpen={isOpen} onClose={onClose} diseaseUuid={selectedDisease?.uuid} />}
    </Stack>
  );
};

export default PlantDiseaseCreate;
