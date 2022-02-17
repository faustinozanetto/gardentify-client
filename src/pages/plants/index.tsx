import React from 'react';
import { useRouter } from 'next/router';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { UserFragment } from 'src/generated/graphql';

interface PlantsPageProps {
  meUser: UserFragment;
}

const PlatsPage: React.FC<PlantsPageProps> = (props) => {
  const router = useRouter();
  const { meUser } = props;

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
      <h1>Plants</h1>
    </CoreLayout>
  );
};

export default PlatsPage;
