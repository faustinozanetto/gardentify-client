import React, { useEffect, useState } from 'react';
import { withApollo } from '@modules/apollo/apollo.module';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import PlantHarvestDetails from 'src/components/harvest/details/plant-harvest-details';
import { Harvest, useFindHarvestQuery } from 'src/generated/graphql';
import { useRouter } from 'next/router';

interface UserPlantHarvestPageProps {}

const UserPlantHarvestPage: React.FC<UserPlantHarvestPageProps> = (props) => {
  const { query } = useRouter();
  const [harvest, setHarvest] = useState<Harvest>();
  const { data: harvestData, loading: harvestLoading } = useFindHarvestQuery({
    variables: {
      input: {
        uuid: query.harvestUuid as string,
      },
    },
    skip: query.harvestUuid === undefined,
    fetchPolicy: 'network-only',
  });

  // Initial harvest state
  useEffect(() => {
    if (harvestData && harvestData.findHarvest) {
      setHarvest(harvestData.findHarvest.harvest);
    }
  }, [harvestData, harvestLoading]);

  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/',
      }}
    >
      {/* Details */}
      <PlantHarvestDetails harvestData={harvest} loading={harvestLoading} />
    </CoreLayout>
  );
};

export default withApollo({})(UserPlantHarvestPage);
