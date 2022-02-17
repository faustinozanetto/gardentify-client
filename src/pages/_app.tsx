import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';
import '@fontsource/poppins';
import { appWithTranslation } from 'next-i18next';
import { useMeQuery, UserFragment } from 'src/generated/graphql';
import { withApollo } from '@modules/apollo/apollo.module';

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

  // if (!loaded) return <h1>Loading</h1>;

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} meUser={meUser} />
    </ChakraProvider>
  );
};

export default withApollo({})(appWithTranslation(GardentifyApp));
