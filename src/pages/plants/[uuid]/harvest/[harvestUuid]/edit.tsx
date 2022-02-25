import React from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import UserPlantHarvestEdit from 'src/components/user-plant/harvests/user-plant-harvest-edit';

interface HarvestEditPageProps {}

const HarvestEditPage: React.FC<HarvestEditPageProps> = (props) => {
  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/plants',
      }}
    >
      <UserPlantHarvestEdit />
    </CoreLayout>
  );
};

export default HarvestEditPage;
