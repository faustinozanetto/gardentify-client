import useAuth from '@modules/state/auth.context';
import { useRouter } from 'next/router';
import React from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import UserPlantCreation from 'src/components/user-plant/create/user-plant-creation';

interface CreateUserPlantPageProps {}

const CreateUserPlantPage: React.FC<CreateUserPlantPageProps> = (props) => {
  const { user } = useAuth();
  const { query } = useRouter();

  // Make sure the plot is valid
  if (!query.plot) {
    return <h1>Invalid plot</h1>;
  }
  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Create Plant',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/',
      }}
    >
      <UserPlantCreation userUuid={user?.uuid} />
    </CoreLayout>
  );
};

export default CreateUserPlantPage;
