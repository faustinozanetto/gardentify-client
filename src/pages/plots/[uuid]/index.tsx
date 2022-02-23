import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CoreLayout from 'src/components/layout/core-layout';
import PlotDetails from 'src/components/plot/details/plot-details';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { Plot, useFindPlotQuery } from 'src/generated/graphql';
import PlotPlants from 'src/components/plot/plants/plot-plants';
import { VStack } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PlotManagement from 'src/components/plot/management/plot-managment';
import useOwnsPlot from '@hooks/use-owns-plot';
import useAuth from '@modules/state/auth.context';

interface UserPlotPageProps {}

const UserPlotPage: React.FC<UserPlotPageProps> = (props) => {
  const router = useRouter();
  const [plot, setPlot] = useState<Plot>();
  const [ownsPlot, user] = useOwnsPlot(plot);
  const { data: plotData, loading: plotLoading } = useFindPlotQuery({
    variables: { input: { uuid: router?.query?.uuid as string } },
    ssr: true,
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (plotData && plotData.findPlot.plot) {
      setPlot(plotData.findPlot.plot);
    }
  }, [plotData, plotLoading]);

  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/plants',
      }}
    >
      <VStack spacing={4} width="full">
        {/* Plot details */}
        <PlotDetails plotData={plot} plantsAmount={5} loading={plotLoading} />
        {/* Management */}
        <PlotManagement plotData={plot} loading={plotLoading} />
        {/* Plot plants */}
        <PlotPlants plotData={plot} loading={plotLoading} />
      </VStack>
    </CoreLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  return { props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'sidebar'])) } };
};

export default UserPlotPage;
