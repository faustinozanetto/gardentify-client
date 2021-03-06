import React from 'react';
import PlantDiseaseReadMore from './plant-disease-read-more';
import { Flex, Text, Image, Heading, Skeleton, useColorModeValue, Stack, VStack, Spacer } from '@chakra-ui/react';
import { Disease } from 'src/generated/graphql';

interface PlantDiseaseCardProps {
  diseaseData?: Disease;
  loading?: boolean;
}

const PlantDiseaseCard: React.FC<PlantDiseaseCardProps> = (props) => {
  const { diseaseData, loading } = props;

  return (
    <Flex
      flexDir={'column'}
      backgroundColor={useColorModeValue('gray.200', 'gray.800')}
      padding={2}
      align={'center'}
      rounded={'lg'}
      maxWidth={'350px'}
      height={'full'}
    >
      <VStack padding={4} textAlign={'center'}>
        {/* Image */}
        <Image
          objectFit="cover"
          borderRadius="full"
          width={['75px', '100px', '150px', '200px']}
          height={['75px', '100px', '150px', '200px']}
          src={diseaseData?.image}
          alt={diseaseData?.scientificName}
        />

        <Spacer />
        {/* Information */}
        <Stack spacing={2}>
          {/* Name */}
          <Skeleton isLoaded={!loading} mb={2}>
            <Heading as="h3" lineHeight={1.1} fontWeight={600} fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
              {diseaseData.scientificName}
            </Heading>
          </Skeleton>

          {/* Description */}
          <Skeleton isLoaded={!loading} mb={4}>
            <Text as="p" fontWeight={500} noOfLines={3}>
              {diseaseData.description}
            </Text>
          </Skeleton>

          {/* Read more button */}
          <PlantDiseaseReadMore diseaseUuid={diseaseData.uuid} loading={loading} />
        </Stack>
      </VStack>
    </Flex>
  );
};

export default PlantDiseaseCard;
