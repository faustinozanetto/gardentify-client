import '@fontsource/poppins';
import React, { useEffect, useState } from 'react';
import CoreWrapper from 'src/components/wrapper/core-wrapper';
import PageLoading from 'src/components/loading/page-loading';
import type { AppProps } from 'next/app';
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

  return (
    <CoreWrapper cookies={pageProps.cookies}>
      {!meUserData?.me?.user && meUserLoading ? <PageLoading /> : <Component {...pageProps} meUser={meUser} />}
    </CoreWrapper>
  );
};

export { getServerSideProps } from '../components/wrapper/core-wrapper';

export default withApollo({})(appWithTranslation(GardentifyApp));
