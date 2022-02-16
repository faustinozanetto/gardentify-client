import React from 'react';
import type {AppProps} from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';
import "@fontsource/poppins"
import { appWithTranslation } from 'next-i18next';

const GardentifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default appWithTranslation(GardentifyApp);
