import React from 'react';
import { Stack, Image, useColorModeValue, VStack, Box, Heading, Skeleton, Flex } from '@chakra-ui/react';
import { Disease } from 'src/generated/graphql';

interface PlantDiseaseDetailsProps {
  diseaseData?: Disease;
  loading?: boolean;
}

const PlantDiseaseDetails: React.FC<PlantDiseaseDetailsProps> = (props) => {
  const { diseaseData, loading } = props;

  return (
    <Stack
      direction={['column', 'column', 'column']}
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      my={4}
      minWidth="75%"
    >
      {/* Main Information */}
      <VStack padding={4}>
        {/* Image */}
        <Flex minWidth={'full'} justify={'center'}>
          <Image
            objectFit="cover"
            borderRadius="full"
            width={['150px', '200px', '250px', '300px', '400px']}
            height={['150px', '200px', '250px', '300px', '400px']}
            src={diseaseData?.image}
            alt={diseaseData?.scientificName}
          />
        </Flex>
        {/* Heading */}
        <Box minWidth={'full'} textAlign={'center'}>
          <Skeleton isLoaded={!loading}>
            <Heading as="h1" lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              {diseaseData?.scientificName}
            </Heading>
          </Skeleton>
        </Box>
        {/* Description */}
        <Box minWidth={'full'} textAlign={'center'}>
          <Skeleton isLoaded={!loading}>
            <Heading as="p" lineHeight={1.1} fontWeight={500} fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }}>
              {diseaseData?.description}
            </Heading>
          </Skeleton>
        </Box>
      </VStack>
    </Stack>
  );
};

export default PlantDiseaseDetails;
