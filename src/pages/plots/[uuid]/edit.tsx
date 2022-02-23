import React from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import PlotEdit from 'src/components/plot/edit/user-plot-edit';

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
      <PlotEdit />
    </CoreLayout>
  );
};

export default PlotEditPage;
