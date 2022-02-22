import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CoreLayout from 'src/components/layout/core-layout';
import PlotDetails from 'src/components/plot/details/plot-details';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { UserPlant, Plot, useFindPlotQuery, usePlotUserPlantsQuery, User } from 'src/generated/graphql';
import PlotPlants from 'src/components/plot/plants/plot-plants';
import { VStack } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PlotManagement from 'src/components/plot/management/plot-managment';

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
    variables: { input: { plotUuid: router?.query?.uuid as string, take: 5, skip: 0, where: {}, includePlot: false } },
    ssr: true,
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
      <VStack spacing={4}>
        {/* Plot details */}
        <PlotDetails plotData={plot} plantsAmount={plotPlants.length} loading={plotLoading} />
        {/* Management */}
        <PlotManagement />
        {/* Plot plants */}
        <PlotPlants plotData={plot} plotPlants={plotPlants} loading={plotPlantsLoading} />
      </VStack>
    </CoreLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  return { props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'sidebar'])) } };
};

export default UserPlotPage;
