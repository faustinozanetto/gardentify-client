import React, { useEffect, useState } from 'react';
import UserPlantCard from 'src/components/user-plant/card/user-plant-card';
import { Box, Heading, HStack, Skeleton, Spacer, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import { Plot, usePlotUserPlantsQuery, UserPlant } from 'src/generated/graphql';
import PlotNoPlants from './plot-no-plants';
import { useRouter } from 'next/router';
import PlotPlantsLoadMore from './plots-plants-load-more';
import PlotPlantsAdd from './plot-plants-add';

interface PlotPlantsProps {
  plotData?: Plot;
  loading?: boolean;
}

const PlotPlants: React.FC<PlotPlantsProps> = (props) => {
  const router = useRouter();
  const { plotData, loading } = props;
  const [pageCount, setPageCount] = useState(0);
  const [plotPlants, setPlotPlants] = useState<UserPlant[]>([]);

  const {
    data: plotPlantsData,
    loading: plotPlantsLoading,
    fetchMore: plotPlantsFetchMore,
    variables: plotPlantsVariables,
  } = usePlotUserPlantsQuery({
    variables: {
      input: { plotUuid: router?.query?.uuid as string, take: 3, skip: 0, where: {}, includePlot: false },
    },
    ssr: true,
  });

  // State fetch
  useEffect(() => {
    if (plotPlantsData && plotPlantsData.plotUserPlants.edges) {
      const mappedPlants = plotPlantsData.plotUserPlants.edges.map((edge) => edge.node);
      setPlotPlants(mappedPlants);
    }
  }, [plotPlantsData, plotPlantsLoading]);

  // Fetch more on page count change
  useEffect(() => {
    if (pageCount > 0) {
      plotPlantsFetchMore({
        variables: {
          input: {
            take: plotPlantsVariables.input.take,
            skip: 3 * pageCount,
            where: { ...plotPlantsVariables.input.where },
          },
        },
      });
    }
  }, [pageCount]);

  return (
    <Stack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      width={'full'}
    >
      {/* Heading */}
      <HStack mb={4}>
        <Skeleton isLoaded={!loading}>
          <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
            Plot Plants
          </Heading>
        </Skeleton>

        <Spacer />
        <PlotPlantsAdd isLoading={loading} loadingText="Loading" />
      </HStack>

      {/* Plants */}
      <Wrap spacing="30px" justify="center">
        {plotPlants &&
          plotPlants.map((plant) => (
            <Box key={plant.uuid} width={'300px'}>
              <UserPlantCard loading={loading} userPlant={plant} username={plotData?.user?.username} />
            </Box>
          ))}
        {plotPlants && plotPlants.length === 0 && <PlotNoPlants />}
      </Wrap>

      {/* Load more */}
      {plotPlantsData && plotPlantsData.plotUserPlants.pageInfo.hasMore && (
        <PlotPlantsLoadMore
          isLoading={plotPlantsLoading}
          onClick={() => {
            // Increment page count
            setPageCount(pageCount + 1);
          }}
        />
      )}
    </Stack>
  );
};

export default PlotPlants;
