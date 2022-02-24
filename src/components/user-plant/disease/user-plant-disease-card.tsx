import React from 'react';
import {
  Flex,
  Image,
  useColorModeValue,
  VStack,
  SkeletonCircle,
  Spacer,
  Stack,
  Text,
  Skeleton,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Disease } from 'src/generated/graphql';

interface UserPlantDiseaseCardProps {
  disease?: Disease;
  loading?: boolean;
}

const UserPlantDiseaseCard: React.FC<UserPlantDiseaseCardProps> = (props) => {
  const { disease, loading } = props;

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
              src={disease?.image}
              alt={disease?.scientificName}
            />
          </SkeletonCircle>

          <Spacer />
          {/* Information */}
          <Stack spacing={2} width={'full'}>
            {/* Scientific name */}
            <Skeleton isLoaded={!loading}>
              <Heading as="h4" fontWeight={500} opacity={'0.75'} fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}>
                {disease.scientificName}
              </Heading>
            </Skeleton>

            {/* Appeared on */}
            <Skeleton isLoaded={!loading}>
              <Heading as="h4" fontWeight={500} opacity={'0.75'} fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}>
                Appeared On {new Date(disease.appearedOn).toLocaleDateString()}
              </Heading>
            </Skeleton>
          </Stack>
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default UserPlantDiseaseCard;
