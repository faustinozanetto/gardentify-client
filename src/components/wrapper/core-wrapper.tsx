import React from 'react';
import { cookieStorageManager, localStorageManager, ChakraProvider } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

interface CoreWrapperProps {
  cookies: string;
  children: React.ReactNode;
}

const CoreWrapper: React.FC<CoreWrapperProps> = (props) => {
  const { cookies, children } = props;
  const colorModeManager = typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager;

  return <ChakraProvider colorModeManager={colorModeManager}>{children}</ChakraProvider>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      cookies: context.req.headers.cookie ?? '',
    },
  };
};

export default CoreWrapper;
