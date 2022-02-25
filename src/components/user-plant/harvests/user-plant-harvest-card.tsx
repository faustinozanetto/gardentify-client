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
import { Harvest } from 'src/generated/graphql';
import { useRouter } from 'next/router';
import useAuth from '@modules/state/auth.context';
import Link from 'next/link';

interface UserPlantHarvestCardProps {
  harvest?: Harvest;
  loading?: boolean;
}

const UserPlantHarvestCard: React.FC<UserPlantHarvestCardProps> = (props) => {
  const { query, asPath } = useRouter();
  const { harvest, loading } = props;

  const generateHarvestUrl = (harvestUuid: string) => {
    const base = `/plants/${query.uuid}`;
    const link = base + `/harvest/${harvestUuid}`;
    return link;
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link href={{ pathname: generateHarvestUrl(harvest.uuid), query: { back: asPath } }}>
        <Flex
          flexDir={'column'}
          backgroundColor={useColorModeValue('gray.200', 'gray.800')}
          padding={2}
          align={'center'}
          rounded={'lg'}
          boxShadow={'lg'}
          cursor="pointer"
        >
          <VStack padding={4} textAlign={'center'} width={'full'}>
            {/* Image */}
            <SkeletonCircle isLoaded={!loading} boxSize={['75px', '100px', '150px', '200px']}>
              <Image
                objectFit="cover"
                borderRadius="full"
                boxSize={['75px', '100px', '150px', '200px']}
                src={harvest?.image}
                alt={`${harvest?.plant} harvest`}
              />
            </SkeletonCircle>

            <Spacer />
            {/* Information */}
            <Stack spacing={2} width={'full'}>
              {/* Amount harvests */}
              <Skeleton isLoaded={!loading}>
                <Heading as="h4" fontWeight={500} opacity={'0.75'} fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}>
                  Amount Harvestd: {harvest.amountHarvested}
                </Heading>
              </Skeleton>

              {/* Harvest weight */}
              <Skeleton isLoaded={!loading}>
                <Heading as="h4" fontWeight={500} opacity={'0.75'} fontSize={{ base: 'lg', sm: 'xl', lg: 'lg' }}>
                  Harvest Weight: {harvest.harvestWeight}kg
                </Heading>
              </Skeleton>
            </Stack>
          </VStack>
        </Flex>
      </Link>
    </motion.div>
  );
};

export default UserPlantHarvestCard;
