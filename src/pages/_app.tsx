import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';
import '@fontsource/poppins';
import { appWithTranslation } from 'next-i18next';
import { UserFragment } from 'src/generated/graphql';

const GardentifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [meUser, setMeUser] = useState<UserFragment>();
  const {data: meUserData, loading: meUserLoading} = useMeQU
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default appWithTranslation(GardentifyApp);
