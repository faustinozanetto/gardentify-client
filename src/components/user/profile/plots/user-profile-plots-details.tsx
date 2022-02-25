import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Heading, HStack, Skeleton, Spacer, Stack, useColorModeValue, Wrap } from '@chakra-ui/react';
import { Plot, useUserPlotsQuery } from 'src/generated/graphql';
import UserPlotCard from 'src/components/plot/card/user-plot-card';
import UserPlotsLoadMore from './user-plots-load-more';
import useAuth from '@modules/state/auth.context';
import UserProfilePlotAdd from './user-profile-plot-add';

interface UserProfilePlotsDetailsProps {
  username?: string;
  loading?: boolean;
}

const UserProfilePlotsDetails: React.FC<UserProfilePlotsDetailsProps> = (props) => {
  const { username, loading } = props;
  const { user: meUser } = useAuth();
  const [pageCount, setPageCount] = useState(0);
  const [userPlots, setUserPlots] = useState<Plot[]>([]);
  const {
    data: userPlotsData,
    loading: userPlotsDataLoading,
    fetchMore: plotsFetchMore,
    variables: plotsVariables,
  } = useUserPlotsQuery({
    variables: { input: { take: 3, skip: 0, where: { username: meUser?.username } } },
    notifyOnNetworkStatusChange: true,
  });

  // State fetch
  useEffect(() => {
    if (userPlotsData && userPlotsData.userPlots && userPlotsData.userPlots.count > 0) {
      const nodes = userPlotsData.userPlots.edges.map((edge) => edge.node);
      setUserPlots(nodes);
    }
  }, [userPlotsData, userPlotsDataLoading]);

  // Fetch more on page count change
  useEffect(() => {
    if (pageCount > 0) {
      plotsFetchMore({
        variables: {
          input: {
            take: plotsVariables.input.take,
            skip: 3 * pageCount,
            where: { ...plotsVariables.input.where },
          },
        },
      });
    }
  }, [pageCount]);

  return (
    <Stack
      boxShadow="2xl"
      bgColor={useColorModeValue('gray.300', 'gray.900')}
      borderRadius="3xl"
      padding={6}
      my={4}
      spacing={4}
      minWidth="100%"
    >
      {/* Heading */}
      <HStack>
        <Skeleton isLoaded={!loading}>
          <Heading as="h2" fontWeight={700} fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }} marginBottom={4}>
            {username}'s Plots
          </Heading>
        </Skeleton>
        <Spacer />
        <UserProfilePlotAdd />
      </HStack>

      {/* Plants Container */}
      <Grid templateColumns={`repeat(${userPlots.length % 2 === 0 ? 2 : 3}, 1fr)`} gap={6}>
        {userPlots &&
          userPlots.map((plot, index) => {
            return (
              <GridItem key={plot.uuid} width="100%">
                <UserPlotCard plot={plot} loading={loading} />
              </GridItem>
            );
          })}
      </Grid>

      {/* Load more */}
      {userPlotsData && userPlotsData.userPlots.pageInfo.hasMore && (
        <UserPlotsLoadMore
          isLoading={userPlotsDataLoading}
          onClick={() => {
            // Increment page count
            setPageCount(pageCount + 1);
          }}
        />
      )}
    </Stack>
  );
};

export default UserProfilePlotsDetails;
