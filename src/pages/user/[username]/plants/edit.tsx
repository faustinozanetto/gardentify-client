import React from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import UserPlantEdit from 'src/components/user-plant/edit/user-plant-edit';

interface PlotEditPageProps {}

const PlotEditPage: React.FC<PlotEditPageProps> = (props) => {
  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/plants',
      }}
    >
      <UserPlantEdit />
    </CoreLayout>
  );
};

export default PlotEditPage;
