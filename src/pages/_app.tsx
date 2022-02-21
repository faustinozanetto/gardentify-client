import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';
import '@fontsource/poppins';
import { appWithTranslation } from 'next-i18next';
import { useMeQuery, UserFragment } from 'src/generated/graphql';
import { withApollo } from '@modules/apollo/apollo.module';
import CoreWrapper from 'src/components/wrapper/core-wrapper';

const GardentifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [meUser, setMeUser] = useState<UserFragment>();
  const [loaded, setLoaded] = useState(false);
  const { data: meUserData, loading: meUserLoading } = useMeQuery();

  useEffect(() => {
    if (meUserData && meUserData.me.user) {
      setMeUser(meUserData.me.user);
      setLoaded(true);
    }
  }, [meUserData, meUserLoading]);

  if (!meUserData?.me?.user && meUserLoading) return <h1>Loading</h1>;

  return (
    <CoreWrapper cookies={pageProps.cookies}>
      <Component {...pageProps} meUser={meUser} />
    </CoreWrapper>
  );
};

export { getServerSideProps } from '../components/wrapper/core-wrapper';

export default withApollo({})(appWithTranslation(GardentifyApp));
