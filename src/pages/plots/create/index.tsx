import React from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { User } from 'src/generated/graphql';

interface CreatePlotPageProps {
  meUser: User;
}

const CreatePlotPage: React.FC<CreatePlotPageProps> = (props) => {
  const { meUser } = props;

  return (
    <CoreLayout
      loggedUser={meUser}
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/',
      }}
    >
      
    </CoreLayout>
  );
};

export default CreatePlotPage;
