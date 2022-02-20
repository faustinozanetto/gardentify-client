import React from 'react';
import UserPlantCard from 'src/components/user-plant/card/user-plant-card';
import { Box, Heading, Skeleton, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import { Plot, UserPlant } from 'src/generated/graphql';

interface PlotPlantsProps {
  plotData?: Plot;
  plotPlants?: UserPlant[];
  loading?: boolean;
}

const PlotPlants: React.FC<PlotPlantsProps> = (props) => {
  const { plotPlants, plotData, loading } = props;

  return (
    <Stack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      my={6}
      height={'full'}
      width={'full'}
    >
      {/* Heading */}
      <Box mb={4}>
        <Skeleton isLoaded={!loading}>
          <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
            Plot Plants
          </Heading>
        </Skeleton>
      </Box>
      {/* Plants */}
      <Wrap spacing="30px" justify="center">
        {plotPlants?.map((plant) => (
          <Box key={plant.uuid}>
            <UserPlantCard loading={loading} userPlant={plant} />
          </Box>
        ))}
      </Wrap>
    </Stack>
  );
};

export default PlotPlants;