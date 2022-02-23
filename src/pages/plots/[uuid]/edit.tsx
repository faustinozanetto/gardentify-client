import React from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';

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
      <h1>Edit plot</h1>
    </CoreLayout>
  );
};

export default PlotEditPage;
