import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { Plot, useFindPlotQuery, User } from 'src/generated/graphql';
import PlantDetails from 'src/components/plant/details/plant-details';

interface UserPlotPageProps {
  meUser: User;
}

const UserPlotPage: React.FC<UserPlotPageProps> = (props) => {
  const router = useRouter();
  const { meUser } = props;
  const [plot, setPlot] = useState<Plot>();
  const { data: plotData, loading: plotLoading } = useFindPlotQuery({
    variables: { input: { uuid: router?.query?.uuid as string } },
  });

  useEffect(() => {
    if (plotData && plotData.findPlot.plot) {
      setPlot(plotData.findPlot.plot);
    }
  }, [plotData, plotLoading]);

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
      {/* Plot details */}
    </CoreLayout>
  );
};

export default UserPlotPage;
