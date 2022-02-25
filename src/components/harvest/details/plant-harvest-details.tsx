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
  Button,
} from '@chakra-ui/react';
import { Harvest } from 'src/generated/graphql';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface PlantHarvestDetailsProps {
  harvestData?: Harvest;
  loading?: boolean;
}

const PlantHarvestDetails: React.FC<PlantHarvestDetailsProps> = (props) => {
  const { query, asPath } = useRouter();
  const { harvestData, loading } = props;
  return (
    <Stack bgColor={useColorModeValue('gray.50', 'gray.900')} borderRadius="3xl" boxShadow="2xl" padding={6}>
      <HStack>
        {/* Main details */}
        <VStack padding={4} textAlign={'center'} spacing={4} width="full">
          {/* Image */}
          <Box mb={4}>
            <SkeletonCircle isLoaded={!loading} boxSize={['150px', '200px', '250px', '300px', '400px']}>
              <Image
                objectFit="cover"
                borderRadius="full"
                boxSize={['150px', '200px', '250px', '300px', '400px']}
                src={harvestData?.image}
                alt={'Plant harvest'}
              />
            </SkeletonCircle>
          </Box>
          {/* Main details. */}
          <Box width={'full'} mb={4}>
            <Stack spacing={2} align={'center'}>
              {/* Harvested on. */}

              <Skeleton isLoaded={!loading}>
                <Heading as="h1" lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '3xl', lg: '3xl' }}>
                  Harvested on {new Date(harvestData?.harvestedOn).toDateString()}
                </Heading>
              </Skeleton>

              {/* Harvest weight */}
              <Skeleton isLoaded={!loading}>
                <Heading
                  as="h2"
                  lineHeight={1.1}
                  opacity={'0.85'}
                  fontWeight={600}
                  fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}
                >
                  Harvest Weight {harvestData?.harvestWeight}kg
                </Heading>
              </Skeleton>

              {/* Harvest amount*/}
              <Skeleton isLoaded={!loading}>
                <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: 'lg', sm: 'xl', lg: 'xl' }}>
                  Harvested Amount {harvestData?.amountHarvested} units
                </Heading>
              </Skeleton>
            </Stack>
          </Box>
          {/* Edit harvest */}
          <VStack width="full" spacing={4}>
            <Link
              href={{
                pathname: '/plants/[plant]/harvest/[harvest]/edit',
                query: { plant: query.uuid, harvest: query.harvestUuid, back: asPath },
              }}
            >
              <Button width="full" colorScheme="teal" isLoading={loading} loadingText="Loading">
                Edit
              </Button>
            </Link>
            {/* Go back button */}
            <Link href={(query.back as string) ?? '/'}>
              <Button variant="ghost" width="full" isLoading={loading} loadingText="Loading">
                Go Back
              </Button>
            </Link>
          </VStack>
        </VStack>
      </HStack>
    </Stack>
  );
};

export default PlantHarvestDetails;
