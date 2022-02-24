import useAuth from '@modules/state/auth.context';
import { useRouter } from 'next/router';
import React from 'react';
import PlantHarvestCreation from 'src/components/harvest/create/plant-harvest-creation';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';

interface CreatePlantHarvestPageProps {}

const CreatePlantHarvestPage: React.FC<CreatePlantHarvestPageProps> = (props) => {
  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/',
      }}
    >
      <PlantHarvestCreation />
    </CoreLayout>
  );
};

export default CreatePlantHarvestPage;
