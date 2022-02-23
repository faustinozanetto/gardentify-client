import { Heading } from '@chakra-ui/react';
import { withApollo } from '@modules/apollo/apollo.module';
import useAuth from '@modules/state/auth.context';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import UserProfile from 'src/components/user/profile/user-profile';
import { Plot, useFindUserPlantsQuery, User, UserPlant, useUserPlotsQuery, useUserQuery } from 'src/generated/graphql';

interface UserPageProps {}

const UserPage: React.FC<UserPageProps> = (props) => {
  const router = useRouter();
  const { user: meUser } = useAuth();
  const [user, setUser] = useState<User>({});
  const [userPlants, setUserPlants] = useState<UserPlant[]>([]);
  const [userPlots, setUserPlots] = useState<Plot[]>([]);
  const { data: userData, loading: userDataLoading } = useUserQuery({
    variables: { input: { username: router?.query?.username as string } },
  });
  const { data: userPlantsData, loading: userPlantsDataLoading } = useFindUserPlantsQuery({
    variables: { input: { take: 10, skip: 0, where: {} } },
  });
  const { data: userPlotsData, loading: userPlotsDataLoading } = useUserPlotsQuery({
    variables: { input: { take: 4, skip: 0, where: { username: meUser?.username } } },
  });

  useEffect(() => {
    if (userData && userData.user) {
      setUser(userData.user.user);
    }
  }, [userData, userDataLoading]);

  useEffect(() => {
    if (userPlantsData && userPlantsData.findUserPlants && userPlantsData.findUserPlants.count > 0) {
      const nodes = userPlantsData.findUserPlants.edges.map((edge) => edge.node);
      setUserPlants(nodes);
    }
  }, [userPlantsData, userDataLoading]);

  useEffect(() => {
    if (userPlotsData && userPlotsData.userPlots && userPlotsData.userPlots.count > 0) {
      const nodes = userPlotsData.userPlots.edges.map((edge) => edge.node);
      setUserPlots(nodes);
    }
  }, [userPlotsData, userPlotsDataLoading]);

  return (
    <CoreLayout
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/user/' + userData?.user?.user?.uuid,
      }}
    >
      {user && !userDataLoading ? (
        <UserProfile userData={user} userPlots={userPlots} loading={userDataLoading} />
      ) : (
        <Heading>Loading...</Heading>
      )}
    </CoreLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  return { props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'sidebar'])) } };
};

export default withApollo({})(UserPage);
