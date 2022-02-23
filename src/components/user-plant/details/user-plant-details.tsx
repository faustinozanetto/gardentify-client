import React from 'react';
import {
  Box,
  Image,
  Heading,
  Skeleton,
  Stack,
  VStack,
  useColorModeValue,
  HStack,
  SkeletonCircle,
} from '@chakra-ui/react';
import { UserPlant } from 'src/generated/graphql';
import UserAvatar from 'src/components/user/profile/user-avatar';
import { generateAvatarURl } from '@utils/utils-user';

interface PlantDetailsProps {
  plantData?: UserPlant;
  loading?: boolean;
}

const UserPlantDetails: React.FC<PlantDetailsProps> = (props) => {
  const { plantData, loading } = props;
  return (
    <Stack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      my={4}
      width="full"
    >
      <HStack>
        {/* Main details */}
        <VStack as={Box} padding={4} textAlign={'center'} width="full">
          {/* Image */}
          <Box mb={4}>
            <SkeletonCircle isLoaded={!loading} boxSize={['150px', '200px', '250px', '300px', '400px']}>
              <Image
                objectFit="cover"
                borderRadius="full"
                boxSize={['150px', '200px', '250px', '300px', '400px']}
                src={plantData?.image}
                alt={plantData?.name}
              />
            </SkeletonCircle>
          </Box>
          {/* Main details. */}
          <Box width={'full'}>
            <Stack spacing={2} align={'center'}>
              {/* Name */}
              <Box mb={2}>
                <Skeleton isLoaded={!loading}>
                  <Heading as="h1" lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                    {plantData?.name}
                  </Heading>
                </Skeleton>
              </Box>
              {/* Scientific Name */}
              <Box mb={2}>
                <Skeleton isLoaded={!loading}>
                  <Heading
                    as="h2"
                    lineHeight={1.1}
                    opacity={'0.85'}
                    fontWeight={600}
                    fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}
                  >
                    {plantData?.scientificName}
                  </Heading>
                </Skeleton>
              </Box>
              {/* Planted on */}
              <Box mb={2}>
                <Skeleton isLoaded={!loading}>
                  <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: 'lg', sm: 'xl', lg: 'xl' }}>
                    Planted on {new Date(plantData?.plantedSeedsOn).toDateString()}
                  </Heading>
                </Skeleton>
              </Box>
              {/* Seeds sprouted */}
              {plantData?.seedsSproutedOn && (
                <Box mb={2}>
                  <Skeleton isLoaded={!loading}>
                    <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: 'lg', sm: 'xl', lg: 'xl' }}>
                      Seeds Sprouted on {new Date(plantData?.seedsSproutedOn).toDateString()}
                    </Heading>
                  </Skeleton>
                </Box>
              )}
            </Stack>
          </Box>
        </VStack>
        <VStack padding={4} textAlign={'center'} width="full" height="full">
          {/* Name */}
          <Box mb={4}>
            <Skeleton isLoaded={!loading}>
              <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                Plant owned by {plantData?.user?.username}
              </Heading>
            </Skeleton>
          </Box>
          <Box mb={4}>
            <Box as="a" href={`/user/${plantData?.user?.username}`}>
              <UserAvatar imageUrl={generateAvatarURl(plantData?.user)} size={150} loading={loading} />
            </Box>
          </Box>
        </VStack>
      </HStack>
    </Stack>
  );
};

export default UserPlantDetails;
