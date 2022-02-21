import React from 'react';
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
  Badge,
  Box,
} from '@chakra-ui/react';
import { Plot } from 'src/generated/graphql';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

interface UserPlotCardProps {
  plot?: Plot;
  loading?: boolean;
}

const UserPlotCard: React.FC<UserPlotCardProps> = (props) => {
  const { plot, loading } = props;
  const { query } = useRouter();

  const generatePlotLink = (plot: Plot): string => {
    return `/user/${query.username}/plots/${plot.uuid}`;
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Flex
        as={'a'}
        flexDir={'column'}
        backgroundColor={useColorModeValue('gray.200', 'gray.800')}
        padding={2}
        align={'center'}
        rounded={'lg'}
        boxShadow={'lg'}
        href={generatePlotLink(plot)}
      >
        <VStack padding={4} textAlign={'center'} width={'full'}>
          {/* Image */}
          <SkeletonCircle isLoaded={!loading} boxSize={['75px', '100px', '150px', '200px']}>
            <Image
              objectFit="cover"
              borderRadius="full"
              boxSize={['75px', '100px', '150px', '200px']}
              src={plot?.image}
              alt={plot?.name}
            />
          </SkeletonCircle>

          <Spacer />
          {/* Information */}
          <Stack spacing={2} width={'full'}>
            {/* Name */}
            <Skeleton isLoaded={!loading}>
              <Heading as="h3" fontWeight={600} fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
                {plot.name}
              </Heading>
            </Skeleton>
            <Box>
              <Skeleton isLoaded={!loading}>
                <Badge fontSize="0.85em" colorScheme={'green'}>
                  {plot.dirtDepth}cm Dirth Depth
                </Badge>
              </Skeleton>
            </Box>
            {/* Description */}
            <Box>
              <Skeleton isLoaded={!loading}>
                <Badge fontSize="0.85em" colorScheme={'teal'}>
                  Size {plot?.sizeX}m x {plot?.sizeY}m
                </Badge>
              </Skeleton>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    </motion.div>
  );
};

export default UserPlotCard;
