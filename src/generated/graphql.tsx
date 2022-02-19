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

export type CreatePlotInput = {
  dirtDepth: Scalars['Float'];
  sizeX: Scalars['Float'];
  sizeY: Scalars['Float'];
  userUuid: Scalars['String'];
};

export type CreateUserPlantInput = {
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  plantedSeedsOn?: InputMaybe<Scalars['DateTime']>;
  scientificName: Scalars['String'];
  seedsSproutedOn?: InputMaybe<Scalars['DateTime']>;
  type: PlantType;
  variety: Scalars['String'];
};

export type DeleteObjectResponse = {
  __typename?: 'DeleteObjectResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Disease = {
  __typename?: 'Disease';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  plant?: Maybe<UserPlant>;
  scientificName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type DiseaseCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  scientificName?: InputMaybe<Scalars['String']>;
};

export type DiseaseResponse = {
  __typename?: 'DiseaseResponse';
  disease?: Maybe<Disease>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type DiseasesEdge = {
  __typename?: 'DiseasesEdge';
  cursor?: Maybe<Scalars['DateTime']>;
  node?: Maybe<Disease>;
};

export type DiseasesPageInfo = {
  __typename?: 'DiseasesPageInfo';
  endCursor?: Maybe<Scalars['DateTime']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['DateTime']>;
};

export type DiseasesResponse = {
  __typename?: 'DiseasesResponse';
  count?: Maybe<Scalars['Int']>;
  edges?: Maybe<Array<DiseasesEdge>>;
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<DiseasesPageInfo>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FindDiseaseInput = {
  scientificName?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type FindDiseasesInput = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
  where?: InputMaybe<FindDiseaseInput>;
};

export type FindHarvestInput = {
  uuid?: InputMaybe<Scalars['String']>;
};

export type FindPlotInput = {
  dirtDepth?: InputMaybe<Scalars['Float']>;
  sizeX?: InputMaybe<Scalars['Float']>;
  sizeY?: InputMaybe<Scalars['Float']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type FindUserInput = {
  username?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
};

export type FindUserPlantInput = {
  image?: InputMaybe<Scalars['String']>;
  plantedSeedsOn?: InputMaybe<Scalars['DateTime']>;
  plotUuid?: InputMaybe<Scalars['String']>;
  scientificName?: InputMaybe<Scalars['String']>;
  seedsSproutedOn?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<PlantType>;
  uuid?: InputMaybe<Scalars['String']>;
  variety?: InputMaybe<Scalars['String']>;
};

export type FindUserPlantsInput = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
  where?: InputMaybe<FindUserPlantInput>;
};

export type Harvest = {
  __typename?: 'Harvest';
  amountHarvested?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  harvestWeight?: Maybe<Scalars['Float']>;
  harvestedOn?: Maybe<Scalars['DateTime']>;
  plant?: Maybe<UserPlant>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
};

export type HarvestResponse = {
  __typename?: 'HarvestResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  harvest?: Maybe<Harvest>;
};

export type HarvestsEdge = {
  __typename?: 'HarvestsEdge';
  cursor?: Maybe<Scalars['DateTime']>;
  node?: Maybe<Harvest>;
};

export type HarvestsPageInfo = {
  __typename?: 'HarvestsPageInfo';
  endCursor?: Maybe<Scalars['DateTime']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['DateTime']>;
};

export type HarvestsResponse = {
  __typename?: 'HarvestsResponse';
  count?: Maybe<Scalars['Int']>;
  edges?: Maybe<Array<HarvestsEdge>>;
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<HarvestsPageInfo>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDiseaseToUserPlant: DiseaseResponse;
  addUserPlantToPlot: PlotPlantResponse;
  createDisease: DiseaseResponse;
  createPlot: PlotResponse;
  createUserPlant: UserPlantResponse;
  createUserPlantHarvest: HarvestResponse;
  deleteDisease: DeleteObjectResponse;
  deleteDiseaseFromUserPlant: DeleteObjectResponse;
  deletePlot: DeleteObjectResponse;
  deleteUserPlant: DeleteObjectResponse;
  /** Removes the plant from the current plot if assigned */
  deleteUserPlantFromPlot: DeleteObjectResponse;
  deleteUserPlantHarvest: DeleteObjectResponse;
  logout: Scalars['Boolean'];
};


export type MutationAddDiseaseToUserPlantArgs = {
  disease: FindDiseaseInput;
  plant: FindUserPlantInput;
};


export type MutationAddUserPlantToPlotArgs = {
  plantUuid: Scalars['String'];
  plotUuid: Scalars['String'];
};


export type MutationCreateDiseaseArgs = {
  input: DiseaseCreateInput;
};


export type MutationCreatePlotArgs = {
  input: CreatePlotInput;
};


export type MutationCreateUserPlantArgs = {
  input: CreateUserPlantInput;
};


export type MutationCreateUserPlantHarvestArgs = {
  input: CreateHarvestInput;
};


export type MutationDeleteDiseaseArgs = {
  input: FindDiseaseInput;
};


export type MutationDeleteDiseaseFromUserPlantArgs = {
  diseaseUuid: Scalars['String'];
  plantUuid: Scalars['String'];
};


export type MutationDeletePlotArgs = {
  uuid: Scalars['String'];
};


export type MutationDeleteUserPlantArgs = {
  input: FindUserPlantInput;
};


export type MutationDeleteUserPlantFromPlotArgs = {
  plantUuid: Scalars['String'];
};


export type MutationDeleteUserPlantHarvestArgs = {
  input: FindHarvestInput;
};

export type Plant = {
  __typename?: 'Plant';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  diseases?: Maybe<Array<Disease>>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  requirements?: Maybe<Array<PlantRequirements>>;
  scientificName?: Maybe<Scalars['String']>;
  type?: Maybe<PlantType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  variety?: Maybe<Scalars['String']>;
};

export type PlantDiseasesInput = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
  where?: InputMaybe<FindUserPlantInput>;
};

export type PlantHarvestsInput = {
  skip: Scalars['Int'];
  take: Scalars['Int'];
  /** Input to select the plant */
  where?: InputMaybe<FindUserPlantInput>;
};

export type PlantRequirements = {
  __typename?: 'PlantRequirements';
  createdAt?: Maybe<Scalars['DateTime']>;
  light?: Maybe<Scalars['String']>;
  soil?: Maybe<Scalars['String']>;
  temperature?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  water?: Maybe<Scalars['String']>;
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

export type Plot = {
  __typename?: 'Plot';
  createdAt?: Maybe<Scalars['DateTime']>;
  dirtDepth?: Maybe<Scalars['Float']>;
  plants?: Maybe<Array<UserPlant>>;
  sizeX?: Maybe<Scalars['Float']>;
  sizeY?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  uuid?: Maybe<Scalars['String']>;
};

export type PlotPlantResponse = {
  __typename?: 'PlotPlantResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  plant?: Maybe<UserPlant>;
  plot?: Maybe<Plot>;
};

export type PlotPlantsInput = {
  plotUuid: Scalars['String'];
  skip: Scalars['Int'];
  take: Scalars['Int'];
  where?: InputMaybe<FindUserPlantInput>;
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
  findDisease: DiseaseResponse;
  findDiseases: DiseasesResponse;
  findHarvest: HarvestResponse;
  findPlant: Plant;
  /** Returns, if found, a plot with the given input. */
  findPlot: PlotResponse;
  findUserPlant: UserPlantResponse;
  findUserPlants: UserPlantsResponse;
  me: UserResponse;
  /** Returns all the plants in a specific user´s plot. */
  plotUserPlants: UserPlantsResponse;
  user: UserResponse;
  userPlantDiseases: DiseasesResponse;
  userPlantHarvests: HarvestsResponse;
  /** Returns all the user´s plots. */
  userPlots: PlotsResponse;
};


export type QueryFindDiseaseArgs = {
  input: FindDiseaseInput;
};


export type QueryFindDiseasesArgs = {
  input: FindDiseasesInput;
};


export type QueryFindHarvestArgs = {
  input: FindHarvestInput;
};


export type QueryFindPlotArgs = {
  input: FindPlotInput;
};


export type QueryFindUserPlantArgs = {
  input: FindUserPlantInput;
};


export type QueryFindUserPlantsArgs = {
  input: FindUserPlantsInput;
};


export type QueryPlotUserPlantsArgs = {
  input: PlotPlantsInput;
};


export type QueryUserArgs = {
  input: FindUserInput;
};


export type QueryUserPlantDiseasesArgs = {
  input: PlantDiseasesInput;
};


export type QueryUserPlantHarvestsArgs = {
  input: PlantHarvestsInput;
};


export type QueryUserPlotsArgs = {
  input: UserPlotsInput;
};

export type User = {
  __typename?: 'User';
  authProvider?: Maybe<AuthProvider>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  oauthId?: Maybe<Scalars['String']>;
  plots?: Maybe<Array<Plot>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type UserPlant = {
  __typename?: 'UserPlant';
  createdAt?: Maybe<Scalars['DateTime']>;
  diseases?: Maybe<Array<Disease>>;
  harvests?: Maybe<Array<Harvest>>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  plantedSeedsOn?: Maybe<Scalars['DateTime']>;
  plot?: Maybe<Plot>;
  scientificName?: Maybe<Scalars['String']>;
  seedsSproutedOn?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PlantType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  uuid?: Maybe<Scalars['String']>;
  variety?: Maybe<Scalars['String']>;
};

export type UserPlantResponse = {
  __typename?: 'UserPlantResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  plant?: Maybe<UserPlant>;
};

export type UserPlantsEdge = {
  __typename?: 'UserPlantsEdge';
  cursor?: Maybe<Scalars['DateTime']>;
  node?: Maybe<UserPlant>;
};

export type UserPlantsPageInfo = {
  __typename?: 'UserPlantsPageInfo';
  endCursor?: Maybe<Scalars['DateTime']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  startCursor?: Maybe<Scalars['DateTime']>;
};

export type UserPlantsResponse = {
  __typename?: 'UserPlantsResponse';
  count?: Maybe<Scalars['Int']>;
  edges?: Maybe<Array<UserPlantsEdge>>;
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<UserPlantsPageInfo>;
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

export type DiseaseFragment = { __typename?: 'Disease', uuid?: string | null, scientificName?: string | null, description?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null };

export type DiseasesEdgeFragment = { __typename?: 'DiseasesEdge', cursor?: any | null, node?: { __typename?: 'Disease', uuid?: string | null, scientificName?: string | null, description?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type DiseasesPageInfoFragment = { __typename?: 'DiseasesPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null };

export type DiseaseResponseFragment = { __typename?: 'DiseaseResponse', disease?: { __typename?: 'Disease', uuid?: string | null, scientificName?: string | null, description?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type DiseasesResponseFragment = { __typename?: 'DiseasesResponse', count?: number | null, pageInfo?: { __typename?: 'DiseasesPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'DiseasesEdge', cursor?: any | null, node?: { __typename?: 'Disease', uuid?: string | null, scientificName?: string | null, description?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type HarvestFragment = { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null, createdAt?: any | null, updatedAt?: any | null };

export type HarvestsEdgeFragment = { __typename?: 'HarvestsEdge', cursor?: any | null, node?: { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type HarvestsPageInfoFragment = { __typename?: 'HarvestsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null };

export type HarvestResponseFragment = { __typename?: 'HarvestResponse', harvest?: { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type HarvestsResponseFragment = { __typename?: 'HarvestsResponse', count?: number | null, pageInfo?: { __typename?: 'HarvestsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'HarvestsEdge', cursor?: any | null, node?: { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type PlantRequirementsFragment = { __typename?: 'PlantRequirements', uuid?: string | null, soil?: string | null, water?: string | null, light?: string | null, temperature?: string | null, createdAt?: any | null, updatedAt?: any | null };

export type PlantFragment = { __typename?: 'Plant', uuid?: string | null, name?: string | null, scientificName?: string | null, description?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null };

export type PlotsEdgeFragment = { __typename?: 'PlotsEdge', cursor?: any | null, node?: { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type PlotsPageInfoFragment = { __typename?: 'PlotsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null };

export type PlotFragment = { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null, createdAt?: any | null, updatedAt?: any | null };

export type PlotPlantResponseFragment = { __typename?: 'PlotPlantResponse', plot?: { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null, createdAt?: any | null, updatedAt?: any | null } | null, plant?: { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type PlotResponseFragment = { __typename?: 'PlotResponse', plot?: { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type PlotsResponseFragment = { __typename?: 'PlotsResponse', count?: number | null, pageInfo?: { __typename?: 'PlotsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'PlotsEdge', cursor?: any | null, node?: { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type DeleteObjectResponseFragment = { __typename?: 'DeleteObjectResponse', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type ErrorResponseFragment = { __typename?: 'ErrorResponse', field: string, message: string };

export type UserPlantsEdgeFragment = { __typename?: 'UserPlantsEdge', cursor?: any | null, node?: { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type UserPlantsPageInfoFragment = { __typename?: 'UserPlantsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null };

export type UserPlantResponseFragment = { __typename?: 'UserPlantResponse', plant?: { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type UserPlantsResponseFragment = { __typename?: 'UserPlantsResponse', count?: number | null, pageInfo?: { __typename?: 'UserPlantsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'UserPlantsEdge', cursor?: any | null, node?: { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type UserPlantFragment = { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null };

export type UserResponseFragment = { __typename?: 'UserResponse', user?: { __typename?: 'User', uuid?: string | null, oauthId?: string | null, username?: string | null, description?: string | null, avatar?: string | null, authProvider?: AuthProvider | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null };

export type UserFragment = { __typename?: 'User', uuid?: string | null, oauthId?: string | null, username?: string | null, description?: string | null, avatar?: string | null, authProvider?: AuthProvider | null, createdAt?: any | null, updatedAt?: any | null };

export type AddDiseaseToUserPlantMutationVariables = Exact<{
  disease: FindDiseaseInput;
  plant: FindUserPlantInput;
}>;


export type AddDiseaseToUserPlantMutation = { __typename?: 'Mutation', addDiseaseToUserPlant: { __typename?: 'DiseaseResponse', disease?: { __typename?: 'Disease', uuid?: string | null, scientificName?: string | null, description?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type CreateDiseaseMutationVariables = Exact<{
  input: DiseaseCreateInput;
}>;


export type CreateDiseaseMutation = { __typename?: 'Mutation', createDisease: { __typename?: 'DiseaseResponse', disease?: { __typename?: 'Disease', uuid?: string | null, scientificName?: string | null, description?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type DeleteDiseaseFromUserPlantMutationVariables = Exact<{
  diseaseUuid: Scalars['String'];
  plantUuid: Scalars['String'];
}>;


export type DeleteDiseaseFromUserPlantMutation = { __typename?: 'Mutation', deleteDiseaseFromUserPlant: { __typename?: 'DeleteObjectResponse', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type DeleteDiseaseMutationVariables = Exact<{
  input: FindDiseaseInput;
}>;


export type DeleteDiseaseMutation = { __typename?: 'Mutation', deleteDisease: { __typename?: 'DeleteObjectResponse', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type CreateUserPlantHarvestMutationVariables = Exact<{
  input: CreateHarvestInput;
}>;


export type CreateUserPlantHarvestMutation = { __typename?: 'Mutation', createUserPlantHarvest: { __typename?: 'HarvestResponse', harvest?: { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type DeleteUserPlantHarvestMutationVariables = Exact<{
  input: FindHarvestInput;
}>;


export type DeleteUserPlantHarvestMutation = { __typename?: 'Mutation', deleteUserPlantHarvest: { __typename?: 'DeleteObjectResponse', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type AddUserPlantToPlotMutationVariables = Exact<{
  plotUuid: Scalars['String'];
  plantUuid: Scalars['String'];
}>;


export type AddUserPlantToPlotMutation = { __typename?: 'Mutation', addUserPlantToPlot: { __typename?: 'PlotPlantResponse', plot?: { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null, createdAt?: any | null, updatedAt?: any | null } | null, plant?: { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type CreatePlotMutationVariables = Exact<{
  input: CreatePlotInput;
}>;


export type CreatePlotMutation = { __typename?: 'Mutation', createPlot: { __typename?: 'PlotResponse', plot?: { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type DeletePlotMutationVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type DeletePlotMutation = { __typename?: 'Mutation', deletePlot: { __typename?: 'DeleteObjectResponse', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type DeleteUserPlantFromPlotMutationVariables = Exact<{
  plantUuid: Scalars['String'];
}>;


export type DeleteUserPlantFromPlotMutation = { __typename?: 'Mutation', deleteUserPlantFromPlot: { __typename?: 'DeleteObjectResponse', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type CreateUserPlantMutationVariables = Exact<{
  input: CreateUserPlantInput;
}>;


export type CreateUserPlantMutation = { __typename?: 'Mutation', createUserPlant: { __typename?: 'UserPlantResponse', plant?: { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type DeleteUserPlantMutationVariables = Exact<{
  input: FindUserPlantInput;
}>;


export type DeleteUserPlantMutation = { __typename?: 'Mutation', deleteUserPlant: { __typename?: 'DeleteObjectResponse', success?: boolean | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type FindDiseaseQueryVariables = Exact<{
  input: FindDiseaseInput;
}>;


export type FindDiseaseQuery = { __typename?: 'Query', findDisease: { __typename?: 'DiseaseResponse', disease?: { __typename?: 'Disease', uuid?: string | null, scientificName?: string | null, description?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type FindDiseasesQueryVariables = Exact<{
  input: FindDiseasesInput;
}>;


export type FindDiseasesQuery = { __typename?: 'Query', findDiseases: { __typename?: 'DiseasesResponse', count?: number | null, pageInfo?: { __typename?: 'DiseasesPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'DiseasesEdge', cursor?: any | null, node?: { __typename?: 'Disease', uuid?: string | null, scientificName?: string | null, description?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type UserPlantDiseasesQueryVariables = Exact<{
  input: PlantDiseasesInput;
}>;


export type UserPlantDiseasesQuery = { __typename?: 'Query', userPlantDiseases: { __typename?: 'DiseasesResponse', count?: number | null, pageInfo?: { __typename?: 'DiseasesPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'DiseasesEdge', cursor?: any | null, node?: { __typename?: 'Disease', uuid?: string | null, scientificName?: string | null, description?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type FindHarvestQueryVariables = Exact<{
  input: FindHarvestInput;
}>;


export type FindHarvestQuery = { __typename?: 'Query', findHarvest: { __typename?: 'HarvestResponse', harvest?: { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type UserPlantHarvestsQueryVariables = Exact<{
  input: PlantHarvestsInput;
}>;


export type UserPlantHarvestsQuery = { __typename?: 'Query', userPlantHarvests: { __typename?: 'HarvestsResponse', count?: number | null, pageInfo?: { __typename?: 'HarvestsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'HarvestsEdge', cursor?: any | null, node?: { __typename?: 'Harvest', uuid?: string | null, amountHarvested?: number | null, harvestWeight?: number | null, harvestedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type FindPlotQueryVariables = Exact<{
  input: FindPlotInput;
}>;


export type FindPlotQuery = { __typename?: 'Query', findPlot: { __typename?: 'PlotResponse', plot?: { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type PlotUserPlantsQueryVariables = Exact<{
  input: PlotPlantsInput;
}>;


export type PlotUserPlantsQuery = { __typename?: 'Query', plotUserPlants: { __typename?: 'UserPlantsResponse', count?: number | null, pageInfo?: { __typename?: 'UserPlantsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'UserPlantsEdge', cursor?: any | null, node?: { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type UserPlotsQueryVariables = Exact<{
  input: UserPlotsInput;
}>;


export type UserPlotsQuery = { __typename?: 'Query', userPlots: { __typename?: 'PlotsResponse', count?: number | null, pageInfo?: { __typename?: 'PlotsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'PlotsEdge', cursor?: any | null, node?: { __typename?: 'Plot', uuid?: string | null, sizeX?: number | null, sizeY?: string | null, dirtDepth?: number | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type FindUserPlantQueryVariables = Exact<{
  input: FindUserPlantInput;
}>;


export type FindUserPlantQuery = { __typename?: 'Query', findUserPlant: { __typename?: 'UserPlantResponse', plant?: { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type FindUserPlantsQueryVariables = Exact<{
  input: FindUserPlantsInput;
}>;


export type FindUserPlantsQuery = { __typename?: 'Query', findUserPlants: { __typename?: 'UserPlantsResponse', count?: number | null, pageInfo?: { __typename?: 'UserPlantsPageInfo', startCursor?: any | null, endCursor?: any | null, hasMore?: boolean | null } | null, edges?: Array<{ __typename?: 'UserPlantsEdge', cursor?: any | null, node?: { __typename?: 'UserPlant', uuid?: string | null, name?: string | null, scientificName?: string | null, variety?: string | null, type?: PlantType | null, image?: string | null, plantedSeedsOn?: any | null, seedsSproutedOn?: any | null, createdAt?: any | null, updatedAt?: any | null } | null }> | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'UserResponse', user?: { __typename?: 'User', uuid?: string | null, oauthId?: string | null, username?: string | null, description?: string | null, avatar?: string | null, authProvider?: AuthProvider | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export type UserQueryVariables = Exact<{
  input: FindUserInput;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'UserResponse', user?: { __typename?: 'User', uuid?: string | null, oauthId?: string | null, username?: string | null, description?: string | null, avatar?: string | null, authProvider?: AuthProvider | null, createdAt?: any | null, updatedAt?: any | null } | null, errors?: Array<{ __typename?: 'ErrorResponse', field: string, message: string }> | null } };

export const DiseaseFragmentDoc = gql`
    fragment Disease on Disease {
  uuid
  scientificName
  description
  image
  createdAt
  updatedAt
}
    `;
export const ErrorResponseFragmentDoc = gql`
    fragment ErrorResponse on ErrorResponse {
  field
  message
}
    `;
export const DiseaseResponseFragmentDoc = gql`
    fragment DiseaseResponse on DiseaseResponse {
  disease {
    ...Disease
  }
  errors {
    ...ErrorResponse
  }
}
    ${DiseaseFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const DiseasesPageInfoFragmentDoc = gql`
    fragment DiseasesPageInfo on DiseasesPageInfo {
  startCursor
  endCursor
  hasMore
}
    `;
export const DiseasesEdgeFragmentDoc = gql`
    fragment DiseasesEdge on DiseasesEdge {
  cursor
  node {
    ...Disease
  }
}
    ${DiseaseFragmentDoc}`;
export const DiseasesResponseFragmentDoc = gql`
    fragment DiseasesResponse on DiseasesResponse {
  count
  pageInfo {
    ...DiseasesPageInfo
  }
  edges {
    ...DiseasesEdge
  }
  errors {
    ...ErrorResponse
  }
}
    ${DiseasesPageInfoFragmentDoc}
${DiseasesEdgeFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const HarvestFragmentDoc = gql`
    fragment Harvest on Harvest {
  uuid
  amountHarvested
  harvestWeight
  harvestedOn
  createdAt
  updatedAt
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
export const HarvestsPageInfoFragmentDoc = gql`
    fragment HarvestsPageInfo on HarvestsPageInfo {
  startCursor
  endCursor
  hasMore
}
    `;
export const HarvestsEdgeFragmentDoc = gql`
    fragment HarvestsEdge on HarvestsEdge {
  cursor
  node {
    ...Harvest
  }
}
    ${HarvestFragmentDoc}`;
export const HarvestsResponseFragmentDoc = gql`
    fragment HarvestsResponse on HarvestsResponse {
  count
  pageInfo {
    ...HarvestsPageInfo
  }
  edges {
    ...HarvestsEdge
  }
  errors {
    ...ErrorResponse
  }
}
    ${HarvestsPageInfoFragmentDoc}
${HarvestsEdgeFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const PlantRequirementsFragmentDoc = gql`
    fragment PlantRequirements on PlantRequirements {
  uuid
  soil
  water
  light
  temperature
  createdAt
  updatedAt
}
    `;
export const PlantFragmentDoc = gql`
    fragment Plant on Plant {
  uuid
  name
  scientificName
  description
  variety
  type
  image
  createdAt
  updatedAt
}
    `;
export const PlotFragmentDoc = gql`
    fragment Plot on Plot {
  uuid
  sizeX
  sizeY
  dirtDepth
  createdAt
  updatedAt
}
    `;
export const UserPlantFragmentDoc = gql`
    fragment UserPlant on UserPlant {
  uuid
  name
  scientificName
  variety
  type
  image
  plantedSeedsOn
  seedsSproutedOn
  createdAt
  updatedAt
}
    `;
export const PlotPlantResponseFragmentDoc = gql`
    fragment PlotPlantResponse on PlotPlantResponse {
  plot {
    ...Plot
  }
  plant {
    ...UserPlant
  }
  errors {
    ...ErrorResponse
  }
}
    ${PlotFragmentDoc}
${UserPlantFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const PlotResponseFragmentDoc = gql`
    fragment PlotResponse on PlotResponse {
  plot {
    ...Plot
  }
  errors {
    ...ErrorResponse
  }
}
    ${PlotFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const PlotsPageInfoFragmentDoc = gql`
    fragment PlotsPageInfo on PlotsPageInfo {
  startCursor
  endCursor
  hasMore
}
    `;
export const PlotsEdgeFragmentDoc = gql`
    fragment PlotsEdge on PlotsEdge {
  cursor
  node {
    ...Plot
  }
}
    ${PlotFragmentDoc}`;
export const PlotsResponseFragmentDoc = gql`
    fragment PlotsResponse on PlotsResponse {
  count
  pageInfo {
    ...PlotsPageInfo
  }
  edges {
    ...PlotsEdge
  }
  errors {
    ...ErrorResponse
  }
}
    ${PlotsPageInfoFragmentDoc}
${PlotsEdgeFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const DeleteObjectResponseFragmentDoc = gql`
    fragment DeleteObjectResponse on DeleteObjectResponse {
  success
  errors {
    ...ErrorResponse
  }
}
    ${ErrorResponseFragmentDoc}`;
export const UserPlantResponseFragmentDoc = gql`
    fragment UserPlantResponse on UserPlantResponse {
  plant {
    ...UserPlant
  }
  errors {
    ...ErrorResponse
  }
}
    ${UserPlantFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const UserPlantsPageInfoFragmentDoc = gql`
    fragment UserPlantsPageInfo on UserPlantsPageInfo {
  startCursor
  endCursor
  hasMore
}
    `;
export const UserPlantsEdgeFragmentDoc = gql`
    fragment UserPlantsEdge on UserPlantsEdge {
  cursor
  node {
    ...UserPlant
  }
}
    ${UserPlantFragmentDoc}`;
export const UserPlantsResponseFragmentDoc = gql`
    fragment UserPlantsResponse on UserPlantsResponse {
  count
  pageInfo {
    ...UserPlantsPageInfo
  }
  edges {
    ...UserPlantsEdge
  }
  errors {
    ...ErrorResponse
  }
}
    ${UserPlantsPageInfoFragmentDoc}
${UserPlantsEdgeFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  uuid
  oauthId
  username
  description
  avatar
  authProvider
  createdAt
  updatedAt
}
    `;
export const UserResponseFragmentDoc = gql`
    fragment UserResponse on UserResponse {
  user {
    ...User
  }
  errors {
    ...ErrorResponse
  }
}
    ${UserFragmentDoc}
${ErrorResponseFragmentDoc}`;
export const AddDiseaseToUserPlantDocument = gql`
    mutation addDiseaseToUserPlant($disease: FindDiseaseInput!, $plant: FindUserPlantInput!) {
  addDiseaseToUserPlant(disease: $disease, plant: $plant) {
    ...DiseaseResponse
  }
}
    ${DiseaseResponseFragmentDoc}`;
export type AddDiseaseToUserPlantMutationFn = Apollo.MutationFunction<AddDiseaseToUserPlantMutation, AddDiseaseToUserPlantMutationVariables>;

/**
 * __useAddDiseaseToUserPlantMutation__
 *
 * To run a mutation, you first call `useAddDiseaseToUserPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDiseaseToUserPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDiseaseToUserPlantMutation, { data, loading, error }] = useAddDiseaseToUserPlantMutation({
 *   variables: {
 *      disease: // value for 'disease'
 *      plant: // value for 'plant'
 *   },
 * });
 */
export function useAddDiseaseToUserPlantMutation(baseOptions?: Apollo.MutationHookOptions<AddDiseaseToUserPlantMutation, AddDiseaseToUserPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDiseaseToUserPlantMutation, AddDiseaseToUserPlantMutationVariables>(AddDiseaseToUserPlantDocument, options);
      }
export type AddDiseaseToUserPlantMutationHookResult = ReturnType<typeof useAddDiseaseToUserPlantMutation>;
export type AddDiseaseToUserPlantMutationResult = Apollo.MutationResult<AddDiseaseToUserPlantMutation>;
export type AddDiseaseToUserPlantMutationOptions = Apollo.BaseMutationOptions<AddDiseaseToUserPlantMutation, AddDiseaseToUserPlantMutationVariables>;
export const CreateDiseaseDocument = gql`
    mutation createDisease($input: DiseaseCreateInput!) {
  createDisease(input: $input) {
    ...DiseaseResponse
  }
}
    ${DiseaseResponseFragmentDoc}`;
export type CreateDiseaseMutationFn = Apollo.MutationFunction<CreateDiseaseMutation, CreateDiseaseMutationVariables>;

/**
 * __useCreateDiseaseMutation__
 *
 * To run a mutation, you first call `useCreateDiseaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDiseaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDiseaseMutation, { data, loading, error }] = useCreateDiseaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDiseaseMutation(baseOptions?: Apollo.MutationHookOptions<CreateDiseaseMutation, CreateDiseaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDiseaseMutation, CreateDiseaseMutationVariables>(CreateDiseaseDocument, options);
      }
export type CreateDiseaseMutationHookResult = ReturnType<typeof useCreateDiseaseMutation>;
export type CreateDiseaseMutationResult = Apollo.MutationResult<CreateDiseaseMutation>;
export type CreateDiseaseMutationOptions = Apollo.BaseMutationOptions<CreateDiseaseMutation, CreateDiseaseMutationVariables>;
export const DeleteDiseaseFromUserPlantDocument = gql`
    mutation deleteDiseaseFromUserPlant($diseaseUuid: String!, $plantUuid: String!) {
  deleteDiseaseFromUserPlant(diseaseUuid: $diseaseUuid, plantUuid: $plantUuid) {
    ...DeleteObjectResponse
  }
}
    ${DeleteObjectResponseFragmentDoc}`;
export type DeleteDiseaseFromUserPlantMutationFn = Apollo.MutationFunction<DeleteDiseaseFromUserPlantMutation, DeleteDiseaseFromUserPlantMutationVariables>;

/**
 * __useDeleteDiseaseFromUserPlantMutation__
 *
 * To run a mutation, you first call `useDeleteDiseaseFromUserPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDiseaseFromUserPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDiseaseFromUserPlantMutation, { data, loading, error }] = useDeleteDiseaseFromUserPlantMutation({
 *   variables: {
 *      diseaseUuid: // value for 'diseaseUuid'
 *      plantUuid: // value for 'plantUuid'
 *   },
 * });
 */
export function useDeleteDiseaseFromUserPlantMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDiseaseFromUserPlantMutation, DeleteDiseaseFromUserPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDiseaseFromUserPlantMutation, DeleteDiseaseFromUserPlantMutationVariables>(DeleteDiseaseFromUserPlantDocument, options);
      }
export type DeleteDiseaseFromUserPlantMutationHookResult = ReturnType<typeof useDeleteDiseaseFromUserPlantMutation>;
export type DeleteDiseaseFromUserPlantMutationResult = Apollo.MutationResult<DeleteDiseaseFromUserPlantMutation>;
export type DeleteDiseaseFromUserPlantMutationOptions = Apollo.BaseMutationOptions<DeleteDiseaseFromUserPlantMutation, DeleteDiseaseFromUserPlantMutationVariables>;
export const DeleteDiseaseDocument = gql`
    mutation deleteDisease($input: FindDiseaseInput!) {
  deleteDisease(input: $input) {
    ...DeleteObjectResponse
  }
}
    ${DeleteObjectResponseFragmentDoc}`;
export type DeleteDiseaseMutationFn = Apollo.MutationFunction<DeleteDiseaseMutation, DeleteDiseaseMutationVariables>;

/**
 * __useDeleteDiseaseMutation__
 *
 * To run a mutation, you first call `useDeleteDiseaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDiseaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDiseaseMutation, { data, loading, error }] = useDeleteDiseaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteDiseaseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDiseaseMutation, DeleteDiseaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDiseaseMutation, DeleteDiseaseMutationVariables>(DeleteDiseaseDocument, options);
      }
export type DeleteDiseaseMutationHookResult = ReturnType<typeof useDeleteDiseaseMutation>;
export type DeleteDiseaseMutationResult = Apollo.MutationResult<DeleteDiseaseMutation>;
export type DeleteDiseaseMutationOptions = Apollo.BaseMutationOptions<DeleteDiseaseMutation, DeleteDiseaseMutationVariables>;
export const CreateUserPlantHarvestDocument = gql`
    mutation createUserPlantHarvest($input: CreateHarvestInput!) {
  createUserPlantHarvest(input: $input) {
    ...HarvestResponse
  }
}
    ${HarvestResponseFragmentDoc}`;
export type CreateUserPlantHarvestMutationFn = Apollo.MutationFunction<CreateUserPlantHarvestMutation, CreateUserPlantHarvestMutationVariables>;

/**
 * __useCreateUserPlantHarvestMutation__
 *
 * To run a mutation, you first call `useCreateUserPlantHarvestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserPlantHarvestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserPlantHarvestMutation, { data, loading, error }] = useCreateUserPlantHarvestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserPlantHarvestMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserPlantHarvestMutation, CreateUserPlantHarvestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserPlantHarvestMutation, CreateUserPlantHarvestMutationVariables>(CreateUserPlantHarvestDocument, options);
      }
export type CreateUserPlantHarvestMutationHookResult = ReturnType<typeof useCreateUserPlantHarvestMutation>;
export type CreateUserPlantHarvestMutationResult = Apollo.MutationResult<CreateUserPlantHarvestMutation>;
export type CreateUserPlantHarvestMutationOptions = Apollo.BaseMutationOptions<CreateUserPlantHarvestMutation, CreateUserPlantHarvestMutationVariables>;
export const DeleteUserPlantHarvestDocument = gql`
    mutation deleteUserPlantHarvest($input: FindHarvestInput!) {
  deleteUserPlantHarvest(input: $input) {
    ...DeleteObjectResponse
  }
}
    ${DeleteObjectResponseFragmentDoc}`;
export type DeleteUserPlantHarvestMutationFn = Apollo.MutationFunction<DeleteUserPlantHarvestMutation, DeleteUserPlantHarvestMutationVariables>;

/**
 * __useDeleteUserPlantHarvestMutation__
 *
 * To run a mutation, you first call `useDeleteUserPlantHarvestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserPlantHarvestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserPlantHarvestMutation, { data, loading, error }] = useDeleteUserPlantHarvestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserPlantHarvestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserPlantHarvestMutation, DeleteUserPlantHarvestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserPlantHarvestMutation, DeleteUserPlantHarvestMutationVariables>(DeleteUserPlantHarvestDocument, options);
      }
export type DeleteUserPlantHarvestMutationHookResult = ReturnType<typeof useDeleteUserPlantHarvestMutation>;
export type DeleteUserPlantHarvestMutationResult = Apollo.MutationResult<DeleteUserPlantHarvestMutation>;
export type DeleteUserPlantHarvestMutationOptions = Apollo.BaseMutationOptions<DeleteUserPlantHarvestMutation, DeleteUserPlantHarvestMutationVariables>;
export const AddUserPlantToPlotDocument = gql`
    mutation addUserPlantToPlot($plotUuid: String!, $plantUuid: String!) {
  addUserPlantToPlot(plotUuid: $plotUuid, plantUuid: $plantUuid) {
    ...PlotPlantResponse
  }
}
    ${PlotPlantResponseFragmentDoc}`;
export type AddUserPlantToPlotMutationFn = Apollo.MutationFunction<AddUserPlantToPlotMutation, AddUserPlantToPlotMutationVariables>;

/**
 * __useAddUserPlantToPlotMutation__
 *
 * To run a mutation, you first call `useAddUserPlantToPlotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserPlantToPlotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserPlantToPlotMutation, { data, loading, error }] = useAddUserPlantToPlotMutation({
 *   variables: {
 *      plotUuid: // value for 'plotUuid'
 *      plantUuid: // value for 'plantUuid'
 *   },
 * });
 */
export function useAddUserPlantToPlotMutation(baseOptions?: Apollo.MutationHookOptions<AddUserPlantToPlotMutation, AddUserPlantToPlotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserPlantToPlotMutation, AddUserPlantToPlotMutationVariables>(AddUserPlantToPlotDocument, options);
      }
export type AddUserPlantToPlotMutationHookResult = ReturnType<typeof useAddUserPlantToPlotMutation>;
export type AddUserPlantToPlotMutationResult = Apollo.MutationResult<AddUserPlantToPlotMutation>;
export type AddUserPlantToPlotMutationOptions = Apollo.BaseMutationOptions<AddUserPlantToPlotMutation, AddUserPlantToPlotMutationVariables>;
export const CreatePlotDocument = gql`
    mutation createPlot($input: CreatePlotInput!) {
  createPlot(input: $input) {
    ...PlotResponse
  }
}
    ${PlotResponseFragmentDoc}`;
export type CreatePlotMutationFn = Apollo.MutationFunction<CreatePlotMutation, CreatePlotMutationVariables>;

/**
 * __useCreatePlotMutation__
 *
 * To run a mutation, you first call `useCreatePlotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlotMutation, { data, loading, error }] = useCreatePlotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlotMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlotMutation, CreatePlotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlotMutation, CreatePlotMutationVariables>(CreatePlotDocument, options);
      }
export type CreatePlotMutationHookResult = ReturnType<typeof useCreatePlotMutation>;
export type CreatePlotMutationResult = Apollo.MutationResult<CreatePlotMutation>;
export type CreatePlotMutationOptions = Apollo.BaseMutationOptions<CreatePlotMutation, CreatePlotMutationVariables>;
export const DeletePlotDocument = gql`
    mutation deletePlot($uuid: String!) {
  deletePlot(uuid: $uuid) {
    ...DeleteObjectResponse
  }
}
    ${DeleteObjectResponseFragmentDoc}`;
export type DeletePlotMutationFn = Apollo.MutationFunction<DeletePlotMutation, DeletePlotMutationVariables>;

/**
 * __useDeletePlotMutation__
 *
 * To run a mutation, you first call `useDeletePlotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlotMutation, { data, loading, error }] = useDeletePlotMutation({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useDeletePlotMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlotMutation, DeletePlotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlotMutation, DeletePlotMutationVariables>(DeletePlotDocument, options);
      }
export type DeletePlotMutationHookResult = ReturnType<typeof useDeletePlotMutation>;
export type DeletePlotMutationResult = Apollo.MutationResult<DeletePlotMutation>;
export type DeletePlotMutationOptions = Apollo.BaseMutationOptions<DeletePlotMutation, DeletePlotMutationVariables>;
export const DeleteUserPlantFromPlotDocument = gql`
    mutation deleteUserPlantFromPlot($plantUuid: String!) {
  deleteUserPlantFromPlot(plantUuid: $plantUuid) {
    ...DeleteObjectResponse
  }
}
    ${DeleteObjectResponseFragmentDoc}`;
export type DeleteUserPlantFromPlotMutationFn = Apollo.MutationFunction<DeleteUserPlantFromPlotMutation, DeleteUserPlantFromPlotMutationVariables>;

/**
 * __useDeleteUserPlantFromPlotMutation__
 *
 * To run a mutation, you first call `useDeleteUserPlantFromPlotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserPlantFromPlotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserPlantFromPlotMutation, { data, loading, error }] = useDeleteUserPlantFromPlotMutation({
 *   variables: {
 *      plantUuid: // value for 'plantUuid'
 *   },
 * });
 */
export function useDeleteUserPlantFromPlotMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserPlantFromPlotMutation, DeleteUserPlantFromPlotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserPlantFromPlotMutation, DeleteUserPlantFromPlotMutationVariables>(DeleteUserPlantFromPlotDocument, options);
      }
export type DeleteUserPlantFromPlotMutationHookResult = ReturnType<typeof useDeleteUserPlantFromPlotMutation>;
export type DeleteUserPlantFromPlotMutationResult = Apollo.MutationResult<DeleteUserPlantFromPlotMutation>;
export type DeleteUserPlantFromPlotMutationOptions = Apollo.BaseMutationOptions<DeleteUserPlantFromPlotMutation, DeleteUserPlantFromPlotMutationVariables>;
export const CreateUserPlantDocument = gql`
    mutation createUserPlant($input: CreateUserPlantInput!) {
  createUserPlant(input: $input) {
    ...UserPlantResponse
  }
}
    ${UserPlantResponseFragmentDoc}`;
export type CreateUserPlantMutationFn = Apollo.MutationFunction<CreateUserPlantMutation, CreateUserPlantMutationVariables>;

/**
 * __useCreateUserPlantMutation__
 *
 * To run a mutation, you first call `useCreateUserPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserPlantMutation, { data, loading, error }] = useCreateUserPlantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserPlantMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserPlantMutation, CreateUserPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserPlantMutation, CreateUserPlantMutationVariables>(CreateUserPlantDocument, options);
      }
export type CreateUserPlantMutationHookResult = ReturnType<typeof useCreateUserPlantMutation>;
export type CreateUserPlantMutationResult = Apollo.MutationResult<CreateUserPlantMutation>;
export type CreateUserPlantMutationOptions = Apollo.BaseMutationOptions<CreateUserPlantMutation, CreateUserPlantMutationVariables>;
export const DeleteUserPlantDocument = gql`
    mutation deleteUserPlant($input: FindUserPlantInput!) {
  deleteUserPlant(input: $input) {
    ...DeleteObjectResponse
  }
}
    ${DeleteObjectResponseFragmentDoc}`;
export type DeleteUserPlantMutationFn = Apollo.MutationFunction<DeleteUserPlantMutation, DeleteUserPlantMutationVariables>;

/**
 * __useDeleteUserPlantMutation__
 *
 * To run a mutation, you first call `useDeleteUserPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserPlantMutation, { data, loading, error }] = useDeleteUserPlantMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserPlantMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserPlantMutation, DeleteUserPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserPlantMutation, DeleteUserPlantMutationVariables>(DeleteUserPlantDocument, options);
      }
export type DeleteUserPlantMutationHookResult = ReturnType<typeof useDeleteUserPlantMutation>;
export type DeleteUserPlantMutationResult = Apollo.MutationResult<DeleteUserPlantMutation>;
export type DeleteUserPlantMutationOptions = Apollo.BaseMutationOptions<DeleteUserPlantMutation, DeleteUserPlantMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const FindDiseaseDocument = gql`
    query findDisease($input: FindDiseaseInput!) {
  findDisease(input: $input) {
    ...DiseaseResponse
  }
}
    ${DiseaseResponseFragmentDoc}`;

/**
 * __useFindDiseaseQuery__
 *
 * To run a query within a React component, call `useFindDiseaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDiseaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDiseaseQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindDiseaseQuery(baseOptions: Apollo.QueryHookOptions<FindDiseaseQuery, FindDiseaseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDiseaseQuery, FindDiseaseQueryVariables>(FindDiseaseDocument, options);
      }
export function useFindDiseaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDiseaseQuery, FindDiseaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDiseaseQuery, FindDiseaseQueryVariables>(FindDiseaseDocument, options);
        }
export type FindDiseaseQueryHookResult = ReturnType<typeof useFindDiseaseQuery>;
export type FindDiseaseLazyQueryHookResult = ReturnType<typeof useFindDiseaseLazyQuery>;
export type FindDiseaseQueryResult = Apollo.QueryResult<FindDiseaseQuery, FindDiseaseQueryVariables>;
export const FindDiseasesDocument = gql`
    query findDiseases($input: FindDiseasesInput!) {
  findDiseases(input: $input) {
    ...DiseasesResponse
  }
}
    ${DiseasesResponseFragmentDoc}`;

/**
 * __useFindDiseasesQuery__
 *
 * To run a query within a React component, call `useFindDiseasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDiseasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDiseasesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindDiseasesQuery(baseOptions: Apollo.QueryHookOptions<FindDiseasesQuery, FindDiseasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDiseasesQuery, FindDiseasesQueryVariables>(FindDiseasesDocument, options);
      }
export function useFindDiseasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDiseasesQuery, FindDiseasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDiseasesQuery, FindDiseasesQueryVariables>(FindDiseasesDocument, options);
        }
export type FindDiseasesQueryHookResult = ReturnType<typeof useFindDiseasesQuery>;
export type FindDiseasesLazyQueryHookResult = ReturnType<typeof useFindDiseasesLazyQuery>;
export type FindDiseasesQueryResult = Apollo.QueryResult<FindDiseasesQuery, FindDiseasesQueryVariables>;
export const UserPlantDiseasesDocument = gql`
    query userPlantDiseases($input: PlantDiseasesInput!) {
  userPlantDiseases(input: $input) {
    ...DiseasesResponse
  }
}
    ${DiseasesResponseFragmentDoc}`;

/**
 * __useUserPlantDiseasesQuery__
 *
 * To run a query within a React component, call `useUserPlantDiseasesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPlantDiseasesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPlantDiseasesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserPlantDiseasesQuery(baseOptions: Apollo.QueryHookOptions<UserPlantDiseasesQuery, UserPlantDiseasesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPlantDiseasesQuery, UserPlantDiseasesQueryVariables>(UserPlantDiseasesDocument, options);
      }
export function useUserPlantDiseasesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPlantDiseasesQuery, UserPlantDiseasesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPlantDiseasesQuery, UserPlantDiseasesQueryVariables>(UserPlantDiseasesDocument, options);
        }
export type UserPlantDiseasesQueryHookResult = ReturnType<typeof useUserPlantDiseasesQuery>;
export type UserPlantDiseasesLazyQueryHookResult = ReturnType<typeof useUserPlantDiseasesLazyQuery>;
export type UserPlantDiseasesQueryResult = Apollo.QueryResult<UserPlantDiseasesQuery, UserPlantDiseasesQueryVariables>;
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
export const UserPlantHarvestsDocument = gql`
    query userPlantHarvests($input: PlantHarvestsInput!) {
  userPlantHarvests(input: $input) {
    ...HarvestsResponse
  }
}
    ${HarvestsResponseFragmentDoc}`;

/**
 * __useUserPlantHarvestsQuery__
 *
 * To run a query within a React component, call `useUserPlantHarvestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPlantHarvestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPlantHarvestsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserPlantHarvestsQuery(baseOptions: Apollo.QueryHookOptions<UserPlantHarvestsQuery, UserPlantHarvestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPlantHarvestsQuery, UserPlantHarvestsQueryVariables>(UserPlantHarvestsDocument, options);
      }
export function useUserPlantHarvestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPlantHarvestsQuery, UserPlantHarvestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPlantHarvestsQuery, UserPlantHarvestsQueryVariables>(UserPlantHarvestsDocument, options);
        }
export type UserPlantHarvestsQueryHookResult = ReturnType<typeof useUserPlantHarvestsQuery>;
export type UserPlantHarvestsLazyQueryHookResult = ReturnType<typeof useUserPlantHarvestsLazyQuery>;
export type UserPlantHarvestsQueryResult = Apollo.QueryResult<UserPlantHarvestsQuery, UserPlantHarvestsQueryVariables>;
export const FindPlotDocument = gql`
    query findPlot($input: FindPlotInput!) {
  findPlot(input: $input) {
    ...PlotResponse
  }
}
    ${PlotResponseFragmentDoc}`;

/**
 * __useFindPlotQuery__
 *
 * To run a query within a React component, call `useFindPlotQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPlotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPlotQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindPlotQuery(baseOptions: Apollo.QueryHookOptions<FindPlotQuery, FindPlotQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPlotQuery, FindPlotQueryVariables>(FindPlotDocument, options);
      }
export function useFindPlotLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPlotQuery, FindPlotQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPlotQuery, FindPlotQueryVariables>(FindPlotDocument, options);
        }
export type FindPlotQueryHookResult = ReturnType<typeof useFindPlotQuery>;
export type FindPlotLazyQueryHookResult = ReturnType<typeof useFindPlotLazyQuery>;
export type FindPlotQueryResult = Apollo.QueryResult<FindPlotQuery, FindPlotQueryVariables>;
export const PlotUserPlantsDocument = gql`
    query plotUserPlants($input: PlotPlantsInput!) {
  plotUserPlants(input: $input) {
    ...UserPlantsResponse
  }
}
    ${UserPlantsResponseFragmentDoc}`;

/**
 * __usePlotUserPlantsQuery__
 *
 * To run a query within a React component, call `usePlotUserPlantsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlotUserPlantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlotUserPlantsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlotUserPlantsQuery(baseOptions: Apollo.QueryHookOptions<PlotUserPlantsQuery, PlotUserPlantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlotUserPlantsQuery, PlotUserPlantsQueryVariables>(PlotUserPlantsDocument, options);
      }
export function usePlotUserPlantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlotUserPlantsQuery, PlotUserPlantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlotUserPlantsQuery, PlotUserPlantsQueryVariables>(PlotUserPlantsDocument, options);
        }
export type PlotUserPlantsQueryHookResult = ReturnType<typeof usePlotUserPlantsQuery>;
export type PlotUserPlantsLazyQueryHookResult = ReturnType<typeof usePlotUserPlantsLazyQuery>;
export type PlotUserPlantsQueryResult = Apollo.QueryResult<PlotUserPlantsQuery, PlotUserPlantsQueryVariables>;
export const UserPlotsDocument = gql`
    query userPlots($input: UserPlotsInput!) {
  userPlots(input: $input) {
    ...PlotsResponse
  }
}
    ${PlotsResponseFragmentDoc}`;

/**
 * __useUserPlotsQuery__
 *
 * To run a query within a React component, call `useUserPlotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPlotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPlotsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserPlotsQuery(baseOptions: Apollo.QueryHookOptions<UserPlotsQuery, UserPlotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserPlotsQuery, UserPlotsQueryVariables>(UserPlotsDocument, options);
      }
export function useUserPlotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserPlotsQuery, UserPlotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserPlotsQuery, UserPlotsQueryVariables>(UserPlotsDocument, options);
        }
export type UserPlotsQueryHookResult = ReturnType<typeof useUserPlotsQuery>;
export type UserPlotsLazyQueryHookResult = ReturnType<typeof useUserPlotsLazyQuery>;
export type UserPlotsQueryResult = Apollo.QueryResult<UserPlotsQuery, UserPlotsQueryVariables>;
export const FindUserPlantDocument = gql`
    query findUserPlant($input: FindUserPlantInput!) {
  findUserPlant(input: $input) {
    ...UserPlantResponse
  }
}
    ${UserPlantResponseFragmentDoc}`;

/**
 * __useFindUserPlantQuery__
 *
 * To run a query within a React component, call `useFindUserPlantQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserPlantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserPlantQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindUserPlantQuery(baseOptions: Apollo.QueryHookOptions<FindUserPlantQuery, FindUserPlantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserPlantQuery, FindUserPlantQueryVariables>(FindUserPlantDocument, options);
      }
export function useFindUserPlantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserPlantQuery, FindUserPlantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserPlantQuery, FindUserPlantQueryVariables>(FindUserPlantDocument, options);
        }
export type FindUserPlantQueryHookResult = ReturnType<typeof useFindUserPlantQuery>;
export type FindUserPlantLazyQueryHookResult = ReturnType<typeof useFindUserPlantLazyQuery>;
export type FindUserPlantQueryResult = Apollo.QueryResult<FindUserPlantQuery, FindUserPlantQueryVariables>;
export const FindUserPlantsDocument = gql`
    query findUserPlants($input: FindUserPlantsInput!) {
  findUserPlants(input: $input) {
    ...UserPlantsResponse
  }
}
    ${UserPlantsResponseFragmentDoc}`;

/**
 * __useFindUserPlantsQuery__
 *
 * To run a query within a React component, call `useFindUserPlantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserPlantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserPlantsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindUserPlantsQuery(baseOptions: Apollo.QueryHookOptions<FindUserPlantsQuery, FindUserPlantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserPlantsQuery, FindUserPlantsQueryVariables>(FindUserPlantsDocument, options);
      }
export function useFindUserPlantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserPlantsQuery, FindUserPlantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserPlantsQuery, FindUserPlantsQueryVariables>(FindUserPlantsDocument, options);
        }
export type FindUserPlantsQueryHookResult = ReturnType<typeof useFindUserPlantsQuery>;
export type FindUserPlantsLazyQueryHookResult = ReturnType<typeof useFindUserPlantsLazyQuery>;
export type FindUserPlantsQueryResult = Apollo.QueryResult<FindUserPlantsQuery, FindUserPlantsQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserDocument = gql`
    query user($input: FindUserInput!) {
  user(input: $input) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;