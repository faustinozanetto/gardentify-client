import React from 'react';
import type {AppProps} from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';
import "@fontsource/poppins"

const GardentifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default GardentifyApp;
