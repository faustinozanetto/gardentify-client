import React, { useEffect, useState } from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { useRouter } from 'next/router';
import { useFindUserPlantQuery, User, UserPlant } from 'src/generated/graphql';
import UserPlantDetails from 'src/components/user-plant/card/details/user-plant-details';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface PlatPageProps {
  meUser: User;
}

const PlatPage: React.FC<PlatPageProps> = (props) => {
  const router = useRouter();
  const { meUser } = props;
  const [plant, setPlant] = useState<UserPlant>();
  const { data: plantData, loading: plantLoading } = useFindUserPlantQuery({
    variables: { input: { uuid: router?.query?.uuid as string } },
  });

  //
  useEffect(() => {
    if (plantData && plantData.findUserPlant.plant) {
      setPlant(plantData.findUserPlant.plant);
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
      {/* Plant details. */}
      <UserPlantDetails plantData={plant} loading={plantLoading} />
    </CoreLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  return { props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'sidebar'])) } };
};

export default PlatPage;
