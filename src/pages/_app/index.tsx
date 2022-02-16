import React from 'react';
import type {AppProps} from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

const GardentifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default GardentifyApp;
