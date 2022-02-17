import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { withApollo } from '@modules/apollo/apollo.module';
import CoreLayout from 'src/components/layout/core-layout';
import CoreLayoutHead from 'src/components/layout/core-layout-head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { UserFragment } from 'src/generated/graphql';

interface HomePageProps {
  meUser: UserFragment;
}

const HomePage: React.FC<HomePageProps> = (props) => {
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
      <Heading as="h1" fontWeight={700}>
        Welcome to Gardentify XD
      </Heading>
    </CoreLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  return { props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'sidebar'])) } };
};

export default withApollo({})(HomePage);
