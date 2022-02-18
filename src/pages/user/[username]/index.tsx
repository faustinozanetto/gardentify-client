import { Heading } from '@chakra-ui/react';
import { withApollo } from '@modules/apollo/apollo.module';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { UserFragment, useUserQuery } from 'src/generated/graphql';

interface UserPageProps {
  meUser: UserFragment;
}

const UserPage: React.FC<UserPageProps> = (props) => {
  const { meUser } = props;
  const router = useRouter();
  const [user, setUser] = useState<UserFragment>();
  const { data: userData, loading: userDataLoading } = useUserQuery({
    variables: { input: { username: router?.query?.username as string } },
  });

  useEffect(() => {
    if (userData && userData.user) {
      setUser(userData.user.user);
    }
  }, [userData, userDataLoading]);

  return (
    <CoreLayout
      loggedUser={meUser}
      head={CoreLayoutHead}
      headProps={{
        seoTitle: 'Home',
        seoDescription: 'Home page description',
        seoUrl: 'https://gardentify.com/user/' + userData?.user?.user?.uuid,
      }}
    >
      {user && (
        <Heading as="h1" fontWeight={700}>
          {user.username}
        </Heading>
      )}
    </CoreLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  return { props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'sidebar'])) } };
};

export default withApollo({})(UserPage);
