import '@fontsource/poppins';
import React from 'react';
import CoreWrapper from 'src/components/wrapper/core-wrapper';
import PageLoading from 'src/components/loading/page-loading';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { withApollo } from '@modules/apollo/apollo.module';
import useAuth, { AuthProvider } from '@modules/state/auth.context';

const GardentifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const { user, loading } = useAuth();
  return (
    <AuthProvider>
      <CoreWrapper cookies={pageProps.cookies}>
        <Component {...pageProps} />
      </CoreWrapper>
    </AuthProvider>
  );
};

export { getServerSideProps } from '../components/wrapper/core-wrapper';

export default withApollo({})(appWithTranslation(GardentifyApp));
