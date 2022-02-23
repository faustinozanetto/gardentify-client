import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { __BACKEND__, __PROD__ } from '@utils/constants';
import { createWithApollo } from './createWithApollo';
import { NextPageContext } from 'next';
import { PlotsResponse, PlotUserPlantsResponse } from 'src/generated/graphql';

const apolloClient = (ctx: NextPageContext) => {
  const setCookiesAfterware = new ApolloLink((operation, forward) =>
    forward(operation).map((response) => {
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
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // User plots
            userPlots: {
              keyArgs: [],
              merge(existing: PlotsResponse | undefined, incoming: PlotsResponse): PlotsResponse {
                return {
                  ...incoming,
                  edges: [...(existing?.edges || []), ...incoming.edges],
                };
              },
            },
            // Plot plants
            plotUserPlants: {
              keyArgs: [],
              merge(
                existing: PlotUserPlantsResponse | undefined,
                incoming: PlotUserPlantsResponse
              ): PlotUserPlantsResponse {
                return {
                  ...incoming,
                  edges: [...(existing?.edges || []), ...incoming.edges],
                };
              },
            },
          },
        },
      },
    }),
  });
};

export const withApollo = createWithApollo(apolloClient);
