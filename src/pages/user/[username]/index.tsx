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
import { User, useUserQuery } from 'src/generated/graphql';

interface UserPageProps {}

const UserPage: React.FC<UserPageProps> = (props) => {
  const router = useRouter();
  const [user, setUser] = useState<User>({});
  const { data: userData, loading: userDataLoading } = useUserQuery({
    variables: { input: { username: router?.query?.username as string } },
    fetchPolicy: 'network-only',
  });

  // Initial user state
  useEffect(() => {
    if (userData && userData.user) {
      setUser(userData.user.user);
    }
  }, [userData, userDataLoading]);

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
        <UserProfile userData={user} loading={userDataLoading} />
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
