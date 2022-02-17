import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

/** User auth provider service */
export enum AuthProvider {
  Default = 'DEFAULT',
  Discord = 'DISCORD',
  Github = 'GITHUB'
}

export type CreateHarvestInput = {
  amountHarvested: Scalars['Int'];
  harvestWeight: Scalars['Float'];
  plantUuid: Scalars['String'];
};

export type CreatePlantInput = {
  image?: InputMaybe<Scalars['String']>;
  plantedSeedsOn?: InputMaybe<Scalars['DateTime']>;
  plotUuid: Scalars['String'];
  scientificName: Scalars['String'];
  seedsSproutedOn?: InputMaybe<Scalars['DateTime']>;
  type: PlantType;
  variety: Scalars['String'];
};

export type CreatePlotInput = {
  dirtDepth: Scalars['Float'];
  sizeX: Scalars['Float'];
  sizeY: Scalars['Float'];
  userUuid: Scalars['String'];
};

export type DeleteObjectResponse = {
  __typename?: 'DeleteObjectResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FindHarvestInput = {
  uuid?: InputMaybe<Scalars['String']>;
};

export type FindPlantInput = {
  image?: InputMaybe<Scalars['String']>;
  plantedSeedsOn?: InputMaybe<Scalars['DateTime']>;
  plotUuid?: InputMaybe<Scalars['String']>;
  scientificName?: InputMaybe<Scalars['String']>;
  seedsSproutedOn?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<PlantType>;
  uuid?: InputMaybe<Scalars['String']>;
  variety?: InputMaybe<Scalars['String']>;
};

export type FindUserInput = {
  uuid: Scalars['String'];
};

export type Harvest = {
  __typename?: 'Harvest';
  amountHarvested?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  harvestWeight?: Maybe<Scalars['Float']>;
  harvestedOn?: Maybe<Scalars['DateTime']>;
  plant?: Maybe<Plant>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type HarvestResponse = {
  __typename?: 'HarvestResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  harvest?: Maybe<Harvest>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPlant: PlantResponse;
  createPlantHarvest: HarvestResponse;
  createPlot: PlotResponse;
  deleteHarvest: DeleteObjectResponse;
  deletePlant: DeleteObjectResponse;
  deletePlot: DeleteObjectResponse;
};


export type MutationCreatePlantArgs = {
  input: CreatePlantInput;
};


export type MutationCreatePlantHarvestArgs = {
  input: CreateHarvestInput;
};


export type MutationCreatePlotArgs = {
  input: CreatePlotInput;
};


export type MutationDeleteHarvestArgs = {
  input: FindHarvestInput;
};


export type MutationDeletePlantArgs = {
  input: FindPlantInput;
};


export type MutationDeletePlotArgs = {
  uuid: Scalars['String'];
};

export type Plant = {
  __typename?: 'Plant';
  createdAt?: Maybe<Scalars['DateTime']>;
  harvests?: Maybe<Array<Harvest>>;
  image?: Maybe<Scalars['String']>;
  plantedSeedsOn?: Maybe<Scalars['DateTime']>;
  plot?: Maybe<Plot>;
  scientificName?: Maybe<Scalars['String']>;
  seedsSproutedOn?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PlantType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  variety?: Maybe<Scalars['String']>;
};

export type PlantResponse = {
  __typename?: 'PlantResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  plant?: Maybe<Plant>;
};

/** Used for declaring the type of plant. */
export enum PlantType {
  Bean = 'BEAN',
  Beet = 'BEET',
  Broccoli = 'BROCCOLI',
  Cabbage = 'CABBAGE',
  Carrot = 'CARROT',
  Celery = 'CELERY',
  Corn = 'CORN',
  Cucumber = 'CUCUMBER',
  Eggplant = 'EGGPLANT',
  Garlic = 'GARLIC',
  Ginger = 'GINGER',
  GreenBean = 'GREEN_BEAN',
  Kale = 'KALE',
  Lettuce = 'LETTUCE',
  Mustard = 'MUSTARD',
  None = 'NONE',
  Onion = 'ONION',
  Pea = 'PEA',
  Pepper = 'PEPPER',
  Potato = 'POTATO',
  Tomato = 'TOMATO'
}

export type PlantsEdge = {
  __typename?: 'PlantsEdge';
  cursor?: Maybe<Scalars['DateTime']>;
  node?: Maybe<Plant>;
};

export type PlantsPageInfo = {
  __typename?: 'PlantsPageInfo';
  endCursor?: Maybe<Scalars['DateTime']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['DateTime']>;
};

export type PlantsResponse = {
  __typename?: 'PlantsResponse';
  count?: Maybe<Scalars['Int']>;
  edges?: Maybe<Array<PlantsEdge>>;
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PlantsPageInfo>;
};

export type Plot = {
  __typename?: 'Plot';
  createdAt?: Maybe<Scalars['DateTime']>;
  dirtDepth?: Maybe<Scalars['Float']>;
  plants?: Maybe<Array<Plant>>;
  sizeX?: Maybe<Scalars['Float']>;
  sizeY?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  uuid?: Maybe<Scalars['String']>;
};

export type PlotPlantsInput = {
  plotUuid: Scalars['String'];
  skip: Scalars['Int'];
  take: Scalars['Int'];
  where?: InputMaybe<FindPlantInput>;
};

export type PlotResponse = {
  __typename?: 'PlotResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  plot?: Maybe<Plot>;
};

export type PlotsEdge = {
  __typename?: 'PlotsEdge';
  cursor?: Maybe<Scalars['DateTime']>;
  node?: Maybe<Plot>;
};

export type PlotsPageInfo = {
  __typename?: 'PlotsPageInfo';
  endCursor?: Maybe<Scalars['DateTime']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['DateTime']>;
};

export type PlotsResponse = {
  __typename?: 'PlotsResponse';
  count?: Maybe<Scalars['Int']>;
  edges?: Maybe<Array<PlotsEdge>>;
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PlotsPageInfo>;
};

export type Query = {
  __typename?: 'Query';
  findHarvest: HarvestResponse;
  me: UserResponse;
  plantByUuid: PlantResponse;
  plotByUuid: PlotResponse;
  plotPlants: PlantsResponse;
  user: UserResponse;
  userPlots: PlotsResponse;
};


export type QueryFindHarvestArgs = {
  input: FindHarvestInput;
};


export type QueryPlantByUuidArgs = {
  uuid: Scalars['String'];
};


export type QueryPlotByUuidArgs = {
  uuid: Scalars['String'];
};


export type QueryPlotPlantsArgs = {
  input: PlotPlantsInput;
};


export type QueryUserArgs = {
  input: FindUserInput;
};


export type QueryUserPlotsArgs = {
  input: UserPlotsInput;
};

export type User = {
  __typename?: 'User';
  authProvider?: Maybe<AuthProvider>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  oauthId?: Maybe<Scalars['String']>;
  plots?: Maybe<Array<Plot>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type UserPlotsInput = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
  where?: InputMaybe<FindUserInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  user?: Maybe<User>;
};

export type HarvestFragment = { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null };

export type HarvestResponseFragment = { __typename?: 'HarvestResponse', harvest?: { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type PlantFragment = { __typename?: 'Plant', uuid?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null };

export type PlotFragment = { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null };

export type DeleteObjectResponseFragment = { __typename?: 'DeleteObjectResponse', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type ErrorResponseFragment = { __typename?: 'ErrorResponse', field: string, message: string };

export type UserFragment = { __typename?: 'User', uuid?: string | null, oauthId?: string | null, username?: string | null, firstName?: string | null, lastName?: string | null, avatar?: string | null, authProvider?: AuthProvider | null };

export type CreatePlantHarvestMutationVariables = Exact<{
  input: CreateHarvestInput;
}>;


export type CreatePlantHarvestMutation = { __typename?: 'Mutation', createPlantHarvest: { __typename?: 'HarvestResponse', harvest?: { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type DeleteHarvestMutationVariables = Exact<{
  input: FindHarvestInput;
}>;


export type DeleteHarvestMutation = { __typename?: 'Mutation', deleteHarvest: { __typename?: 'DeleteObjectResponse', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type FindHarvestQueryVariables = Exact<{
  input: FindHarvestInput;
}>;


export type FindHarvestQuery = { __typename?: 'Query', findHarvest: { __typename?: 'HarvestResponse', harvest?: { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export const HarvestFragmentDoc = gql`
    fragment Harvest on Harvest {
  uuid
  amountHarvested
  harvestWeight
  harvestedOn
}
    `;
export const ErrorResponseFragmentDoc = gql`
    fragment ErrorResponse on ErrorResponse {
  field
  message
}
    `;
export const HarvestResponseFragmentDoc = gql`
    fragment HarvestResponse on HarvestResponse {
  harvest {
    ...Harvest
  }
  errors {
    ...ErrorResponse
  }
}
    ${HarvestFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const PlantFragmentDoc = gql`
    fragment Plant on Plant {
  uuid
  scientificName
  variety
  type
  image
  plantedSeedsOn
  seedsSproutedOn
}
    `;
export const PlotFragmentDoc = gql`
    fragment Plot on Plot {
  uuid
  sizeX
  sizeY
  dirtDepth
}
    `;
export const DeleteObjectResponseFragmentDoc = gql`
    fragment DeleteObjectResponse on DeleteObjectResponse {
  success
  errors {
    ...ErrorResponse
  }
}
    ${ErrorResponseFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  uuid
  oauthId
  username
  firstName
  lastName
  avatar
  authProvider
}
    `;
export const CreatePlantHarvestDocument = gql`
    mutation createPlantHarvest($input: CreateHarvestInput!) {
  createPlantHarvest(input: $input) {
    ...HarvestResponse
  }
}
    ${HarvestResponseFragmentDoc}`;
export type CreatePlantHarvestMutationFn = Apollo.MutationFunction<CreatePlantHarvestMutation, CreatePlantHarvestMutationVariables>;

/**
 * __useCreatePlantHarvestMutation__
 *
 * To run a mutation, you first call `useCreatePlantHarvestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlantHarvestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlantHarvestMutation, { data, loading, error }] = useCreatePlantHarvestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlantHarvestMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlantHarvestMutation, CreatePlantHarvestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlantHarvestMutation, CreatePlantHarvestMutationVariables>(CreatePlantHarvestDocument, options);
      }
export type CreatePlantHarvestMutationHookResult = ReturnType<typeof useCreatePlantHarvestMutation>;
export type CreatePlantHarvestMutationResult = Apollo.MutationResult<CreatePlantHarvestMutation>;
export type CreatePlantHarvestMutationOptions = Apollo.BaseMutationOptions<CreatePlantHarvestMutation, CreatePlantHarvestMutationVariables>;
export const DeleteHarvestDocument = gql`
    mutation deleteHarvest($input: FindHarvestInput!) {
  deleteHarvest(input: $input) {
    ...DeleteObjectResponse
  }
}
    ${DeleteObjectResponseFragmentDoc}`;
export type DeleteHarvestMutationFn = Apollo.MutationFunction<DeleteHarvestMutation, DeleteHarvestMutationVariables>;

/**
 * __useDeleteHarvestMutation__
 *
 * To run a mutation, you first call `useDeleteHarvestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHarvestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHarvestMutation, { data, loading, error }] = useDeleteHarvestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteHarvestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHarvestMutation, DeleteHarvestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHarvestMutation, DeleteHarvestMutationVariables>(DeleteHarvestDocument, options);
      }
export type DeleteHarvestMutationHookResult = ReturnType<typeof useDeleteHarvestMutation>;
export type DeleteHarvestMutationResult = Apollo.MutationResult<DeleteHarvestMutation>;
export type DeleteHarvestMutationOptions = Apollo.BaseMutationOptions<DeleteHarvestMutation, DeleteHarvestMutationVariables>;
export const FindHarvestDocument = gql`
    query findHarvest($input: FindHarvestInput!) {
  findHarvest(input: $input) {
    ...HarvestResponse
  }
}
    ${HarvestResponseFragmentDoc}`;

/**
 * __useFindHarvestQuery__
 *
 * To run a query within a React component, call `useFindHarvestQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindHarvestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindHarvestQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindHarvestQuery(baseOptions: Apollo.QueryHookOptions<FindHarvestQuery, FindHarvestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindHarvestQuery, FindHarvestQueryVariables>(FindHarvestDocument, options);
      }
export function useFindHarvestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindHarvestQuery, FindHarvestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindHarvestQuery, FindHarvestQueryVariables>(FindHarvestDocument, options);
        }
export type FindHarvestQueryHookResult = ReturnType<typeof useFindHarvestQuery>;
export type FindHarvestLazyQueryHookResult = ReturnType<typeof useFindHarvestLazyQuery>;
export type FindHarvestQueryResult = Apollo.QueryResult<FindHarvestQuery, FindHarvestQueryVariables>;