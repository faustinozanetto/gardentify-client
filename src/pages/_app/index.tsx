import React from 'react';
import type {AppProps} from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyles from '@styles/global-styles';

const GardentifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default GardentifyApp;
