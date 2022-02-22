import React from 'react';
import {
  Box,
  Text,
  Image,
  Heading,
  Skeleton,
  Stack,
  VStack,
  useColorModeValue,
  HStack,
  Badge,
  SkeletonCircle,
} from '@chakra-ui/react';
import { Plot } from 'src/generated/graphql';

interface PlotDetailsProps {
  plotData?: Plot;
  plantsAmount?: number;
  loading?: boolean;
}

const PlotDetails: React.FC<PlotDetailsProps> = (props) => {
  const { plotData, plantsAmount, loading } = props;
  return (
    <Stack
      direction={'row'}
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
    >
      {/* Main details */}
      <VStack padding={4} textAlign={'center'} width={'full'}>
        <Box mb={4}>
          <SkeletonCircle isLoaded={!loading} boxSize={['150px', '200px', '250px', '300px', '400px']}>
            <Image
              objectFit="cover"
              borderRadius="full"
              boxSize={['150px', '200px', '250px', '300px', '400px']}
              src={plotData?.image}
              alt={plotData?.name}
            />
          </SkeletonCircle>
        </Box>
        <Box width={'full'}>
          <Stack spacing={2} align={'center'}>
            {/* Name */}
            <Box mb={4}>
              <Skeleton isLoaded={!loading}>
                <Heading as="h1" lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
                  {plotData?.name}
                </Heading>
              </Skeleton>
            </Box>
            {/* Data */}
            <HStack>
              {/* Plants amount */}
              <Box>
                <Skeleton isLoaded={!loading}>
                  <Badge fontSize="1em" colorScheme={'green'}>
                    {plantsAmount} plants
                  </Badge>
                </Skeleton>
              </Box>
              {/* Description */}
              <Box>
                <Skeleton isLoaded={!loading}>
                  <Badge fontSize="1em" colorScheme={'teal'}>
                    Size {plotData?.sizeX}m x {plotData?.sizeY}m
                  </Badge>
                </Skeleton>
              </Box>
            </HStack>
            <Skeleton isLoaded={!loading}>
              <Badge fontSize="1em" colorScheme={'twitter'}>
                Added in {new Date(plotData?.createdAt).toDateString()}
              </Badge>
            </Skeleton>
          </Stack>
        </Box>
      </VStack>
      {/* In depth details */}
      <VStack as={Box} padding={4} textAlign={'center'}>
        <Stack spacing={2} align={'center'}>
          {/* Name */}
          <Box mb={4}>
            <Skeleton isLoaded={!loading}>
              <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                Information
              </Heading>
            </Skeleton>
          </Box>
          <Box mb={4}>
            <Text as={'p'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam recusandae, maxime sunt ut eligendi
              minima odit, error quidem expedita soluta optio dignissimos earum. Consectetur veniam, numquam possimus
              deleniti atque eaque.
            </Text>
          </Box>
        </Stack>
      </VStack>
    </Stack>
  );
};

export default PlotDetails;
