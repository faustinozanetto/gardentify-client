import useAuth from '@modules/state/auth.context';
import React from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import UserPlotCreation from 'src/components/plot/creation/user-plot-creation';

interface CreatePlotPageProps {}

const CreatePlotPage: React.FC<CreatePlotPageProps> = (props) => {
  const { user } = useAuth();
  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/',
      }}
    >
      <UserPlotCreation userUuid={user?.uuid} />
    </CoreLayout>
  );
};

export default CreatePlotPage;
