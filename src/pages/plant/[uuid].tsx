import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { PlantFragment, usePlantQuery, UserFragment } from 'src/generated/graphql';

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
      {plant && <h1>{plant.type}</h1>}
    </CoreLayout>
  );
};

export default PlatPage;
