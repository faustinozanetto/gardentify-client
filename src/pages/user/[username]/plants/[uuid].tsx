import React, { useEffect, useState } from 'react';
import PlantDetails from 'src/components/plant/details/plant-details';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { useRouter } from 'next/router';
import { useFindUserPlantQuery, UserFragment, UserPlant } from 'src/generated/graphql';

interface PlatPageProps {
  meUser: UserFragment;
}

const PlatPage: React.FC<PlatPageProps> = (props) => {
  const router = useRouter();
  const { meUser } = props;
  const [plant, setPlant] = useState<UserPlant>();
  const { data: plantData, loading: plantLoading } = useFindUserPlantQuery({
    variables: { input: { uuid: router?.query?.uuid as string } },
  });

  useEffect(() => {
    if (plantData && plantData.findUserPlant.plant) {
      setPlant(plantData.findUserPlant.plant);
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
