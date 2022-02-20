import React from 'react';
import { Flex, Text, Image, Heading, Skeleton, useColorModeValue, Stack, VStack, Spacer } from '@chakra-ui/react';
import { UserPlant } from 'src/generated/graphql';
import PlantDiseaseReadMore from './user-plant-read-more';

interface UserPlantCardProps {
  userPlant?: UserPlant;
  loading?: boolean;
}

const UserPlantCard: React.FC<UserPlantCardProps> = (props) => {
  const { userPlant, loading } = props;

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
          src={userPlant?.image}
          alt={userPlant?.scientificName}
        />

        <Spacer />
        {/* Information */}
        <Stack spacing={2}>
          {/* Name */}
          <Skeleton isLoaded={!loading} mb={2}>
            <Heading as="h3" lineHeight={1.1} fontWeight={600} fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
              {userPlant.scientificName}
            </Heading>
          </Skeleton>

          {/* Read more button */}
          <PlantDiseaseReadMore diseaseUuid={userPlant.uuid} loading={loading} />
        </Stack>
      </VStack>
    </Flex>
  );
};

export default UserPlantCard;
