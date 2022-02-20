import React from 'react';
import UserPlantReadMore from './user-plant-read-more';
import { Flex, Text, Image, Heading, Skeleton, useColorModeValue, Stack, VStack, Spacer } from '@chakra-ui/react';
import { UserPlant } from 'src/generated/graphql';

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
        <Stack spacing={2} width={'full'}>
          {/* Name */}
          <Skeleton isLoaded={!loading}>
            <Heading as="h3" fontWeight={600} fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
              {userPlant.name}
            </Heading>
          </Skeleton>

          {/* Scientific name */}
          <Skeleton isLoaded={!loading}>
            <Heading as="h4" fontWeight={500} fontSize={{ base: 'lg', sm: 'xl', lg: 'xl' }}>
              {userPlant.scientificName}
            </Heading>
          </Skeleton>

          {/* Read more button */}
          <UserPlantReadMore
            plantUuid={userPlant.uuid}
            loading={loading}
          />
        </Stack>
      </VStack>
    </Flex>
  );
};

export default UserPlantCard;
