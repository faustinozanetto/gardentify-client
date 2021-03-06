import React from 'react';
import UserPlantReadMore from './user-plant-read-more';
import {
  Flex,
  Text,
  Image,
  Heading,
  Skeleton,
  useColorModeValue,
  Stack,
  VStack,
  Spacer,
  SkeletonCircle,
} from '@chakra-ui/react';
import { UserPlant } from 'src/generated/graphql';
import { motion } from 'framer-motion';

interface UserPlantCardProps {
  userPlant?: UserPlant;
  username?: string;
  loading?: boolean;
}

const UserPlantCard: React.FC<UserPlantCardProps> = (props) => {
  const { userPlant, username, loading } = props;

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Flex
        flexDir={'column'}
        backgroundColor={useColorModeValue('gray.200', 'gray.800')}
        padding={2}
        align={'center'}
        rounded={'lg'}
        boxShadow={'lg'}
      >
        <VStack padding={4} textAlign={'center'} width={'full'}>
          {/* Image */}
          <SkeletonCircle isLoaded={!loading} boxSize={['75px', '100px', '150px', '200px']}>
            <Image
              objectFit="cover"
              borderRadius="full"
              boxSize={['75px', '100px', '150px', '200px']}
              src={userPlant?.image}
              alt={userPlant?.scientificName}
            />
          </SkeletonCircle>

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
              <Heading as="h4" fontWeight={500} opacity={'0.75'} fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}>
                {userPlant.scientificName}
              </Heading>
            </Skeleton>

            {/* Read more button */}
            <UserPlantReadMore plantUuid={userPlant.uuid} username={username} loading={loading} />
          </Stack>
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default UserPlantCard;
