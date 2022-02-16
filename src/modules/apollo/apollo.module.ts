import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { __BACKEND__, __PROD__ } from '@utils/constants';
import { createWithApollo } from './createWithApollo';
import { NextPageContext } from 'next';

const apolloClient = (ctx: NextPageContext) => {
  const setCookiesAfterware = new ApolloLink((operation, forward) =>
    forward(operation).map(response => {
      ctx?.res?.setHeader('set-cookie', operation.getContext().response.headers.raw()['set-cookie'] || '');
      return response;
    })
  );

  return new ApolloClient({
    link: setCookiesAfterware.concat(
      new HttpLink({
        uri: `${__BACKEND__}/graphql`,
        headers: { cookie: ctx?.req?.headers.cookie },
        credentials: 'include',
      })
    ),
    connectToDevTools: !__PROD__,
    headers: {
      cookie: (typeof window === 'undefined' ? ctx?.req?.headers.cookie : undefined) || '',
    },
    credentials: 'include',
    cache: new InMemoryCache({}),
  });
};

export const withApollo = createWithApollo(apolloClient);
