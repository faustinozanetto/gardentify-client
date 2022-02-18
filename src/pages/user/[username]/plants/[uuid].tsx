import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { PlantFragment, usePlantQuery, UserFragment } from 'src/generated/graphql';
import PlantDetails from 'src/components/plant/details/plant-details';

interface PlatPageProps {
  meUser: UserFragment;
}

const PlatPage: React.FC<PlatPageProps> = (props) => {
  const router = useRouter();
  const { meUser } = props;
  const [plant, setPlant] = useState<PlantFragment>();
  const { data: plantData, loading: plantLoading } = usePlantQuery({
    variables: { input: { uuid: router?.query?.uuid as string } },
  });

  useEffect(() => {
    if (plantData && plantData.plant.plant) {
      setPlant(plantData.plant.plant);
    }
  }, [plantData, plantLoading]);

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
      <PlantDetails plantData={plant} loading={plantLoading} />
    </CoreLayout>
  );
};

export default PlatPage;