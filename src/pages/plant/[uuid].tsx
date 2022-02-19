import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { Plant, useFindPlantQuery, User } from 'src/generated/graphql';
import PlantDetails from 'src/components/plant/details/plant-details';
import PlantCommonDiseases from 'src/components/plant/diseases/plant-common-diseases';

interface PlatPageProps {
  meUser: User;
}

const PlatPage: React.FC<PlatPageProps> = (props) => {
  const router = useRouter();
  const { meUser } = props;
  const [plant, setPlant] = useState<Plant>();
  const { data: plantData, loading: plantLoading } = useFindPlantQuery({
    variables: { input: { uuid: router?.query?.uuid as string } },
  });

  useEffect(() => {
    if (plantData && plantData.findPlant.plant) {
      setPlant(plantData.findPlant.plant);
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
      {/* Main details */}
      <PlantDetails plantData={plant} loading={plantLoading} />
      {/* Common diseases */}
      <PlantCommonDiseases diseasesData={plant?.diseases} loading={plantLoading} />
    </CoreLayout>
  );
};

export default PlatPage;
