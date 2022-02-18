import React from 'react';
import { Box, Flex, Text, Image, Heading, Skeleton, Stack, VStack, useColorModeValue } from '@chakra-ui/react';
import { PlantFragment } from 'src/generated/graphql';
import PlantRequirement from './requirements/plant-requirement';

export enum PlantRequirementType {
  SOIL = 'Soil',
  WATER = 'Water',
  TEMPERATURE = 'Temperature',
  LIGHT = 'Light',
}

interface PlantDetailsProps {
  plantData?: PlantFragment;
  loading?: boolean;
}

const PlantDetails: React.FC<PlantDetailsProps> = (props) => {
  const { plantData, loading } = props;
  return (
    <Stack
      direction={['column', 'column', 'row']}
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      minWidth="100%"
    >
      {/* Main details */}
      <VStack as={Box} padding={4} textAlign={'center'} width={'50%'}>
        <Box>
          <Image
            objectFit="cover"
            borderRadius="full"
            width={['150px', '200px', '250px', '300px', '400px']}
            height={['150px', '200px', '250px', '300px', '400px']}
            src={plantData?.image}
            alt={plantData?.scientificName}
          />
        </Box>
        <Box>
          <Stack spacing={2}>
            {/* Name */}
            <Box>
              <Skeleton isLoaded={!loading}>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                  <Text as={'span'} position={'relative'}>
                    {plantData?.name}
                  </Text>
                </Heading>
              </Skeleton>
            </Box>
            {/* Scientific name */}
            <Box>
              <Skeleton isLoaded={!loading}>
                <Heading lineHeight={1.1} fontWeight={300} fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}>
                  <Text as={'span'} position={'relative'}>
                    {plantData?.scientificName}
                  </Text>
                </Heading>
              </Skeleton>
            </Box>
            {/* Description */}
            <Box>
              <Skeleton isLoaded={!loading}>
                <Heading lineHeight={1.1} fontWeight={200} fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }}>
                  <Text as={'span'} position={'relative'}>
                    {plantData?.description}
                  </Text>
                </Heading>
              </Skeleton>
            </Box>
          </Stack>
        </Box>
      </VStack>

      {/* Specific details */}
      <VStack as={Box} align="flex-start" width={'50%'} padding={4}>
        {/* Requirements Heading */}
        <Skeleton isLoaded={!loading}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: 'xl', sm: '2xl', lg: '4xl' }}>
            <Text as={'span'} position={'relative'}>
              Requirements
            </Text>
          </Heading>
        </Skeleton>
        {/* Soil */}
        <PlantRequirement
          type={PlantRequirementType.SOIL}
          information={plantData?.requirements?.soil}
          loading={loading}
        />
        {/* Water */}
        <PlantRequirement
          type={PlantRequirementType.WATER}
          information={plantData?.requirements?.water}
          loading={loading}
        />
        {/* Temperature */}
        <PlantRequirement
          type={PlantRequirementType.TEMPERATURE}
          information={plantData?.requirements?.temperature}
          loading={loading}
        />
        {/* Light */}
        <PlantRequirement
          type={PlantRequirementType.LIGHT}
          information={plantData?.requirements?.light}
          loading={loading}
        />
      </VStack>
    </Stack>
  );
};

export default PlantDetails;
