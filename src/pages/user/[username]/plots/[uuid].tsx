import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CoreLayout from 'src/components/layout/core-layout';
import PlotDetails from 'src/components/plot/details/plot-details';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { UserPlant, Plot, useFindPlotQuery, usePlotUserPlantsQuery, User } from 'src/generated/graphql';
import PlotPlants from 'src/components/plot/plants/plot-plants';
import { Container, VStack } from '@chakra-ui/react';

interface UserPlotPageProps {
  meUser: User;
}

const UserPlotPage: React.FC<UserPlotPageProps> = (props) => {
  const router = useRouter();
  const { meUser } = props;
  const [plot, setPlot] = useState<Plot>();
  const [plotPlants, setPlotPlants] = useState<UserPlant[]>([]);
  const { data: plotData, loading: plotLoading } = useFindPlotQuery({
    variables: { input: { uuid: router?.query?.uuid as string } },
  });
  const { data: plotPlantsData, loading: plotPlantsLoading } = usePlotUserPlantsQuery({
    variables: { input: { plotUuid: router?.query?.uuid as string, take: 5, skip: 0, where: {} } },
  });

  useEffect(() => {
    if (plotData && plotData.findPlot.plot) {
      setPlot(plotData.findPlot.plot);
    }
  }, [plotData, plotLoading]);

  useEffect(() => {
    if (plotPlantsData && plotPlantsData.plotUserPlants.edges) {
      const mappedPlants = plotPlantsData.plotUserPlants.edges.map((edge) => edge.node);
      setPlotPlants(mappedPlants);
    }
  }, [plotPlantsData, plotPlantsLoading]);

  return (
    <CoreLayout
      loggedUser={meUser}
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/plants',
      }}
    >
      <VStack>
        {/* Plot details */}
        <PlotDetails plotData={plot} loading={plotLoading} />
        {/* Plot plants */}
        <PlotPlants plotPlants={plotPlants} loading={plotPlantsLoading} />
      </VStack>
    </CoreLayout>
  );
};

export default UserPlotPage;
