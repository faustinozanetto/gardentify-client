import React from 'react';
import { Flex, Text, useColorModeValue, HStack, Skeleton, Badge, SkeletonText } from '@chakra-ui/react';
import { UserFragment } from 'src/generated/graphql';
import UserAvatar from '../user-avatar';
import { generateAvatarURl } from '@utils/utils-user';

interface UserProfileDetailsProps {
  userData?: UserFragment;
  loading?: boolean;
}

const UserProfileDetails: React.FC<UserProfileDetailsProps> = (props) => {
  const { userData, loading } = props;
  return (
    <Flex
      flexDir="column"
      padding="1rem"
      borderRadius="2xl"
      boxShadow="2xl"
      bgColor={useColorModeValue('gray.300', 'gray.900')}
    >
      <Flex flexDir={['column', 'column', 'column', 'row', 'row']} justifyContent="space-between">
        {userData && <UserAvatar imageUrl={generateAvatarURl(userData)} size={150} loading={loading} />}
        <Flex
          flexDir="column"
          flex="1"
          marginLeft={[0, 0, 0, 4, 4]}
          marginRight={[0, 0, 0, 4, 4]}
          marginBottom={[4, 4, 4, 0, 0]}
        >
          <HStack alignContent="center" alignItems="center">
            <Skeleton isLoaded={!loading} height={loading ? '20px' : 'auto'}>
              <Text as="h1" fontSize="3xl" color={useColorModeValue('black', 'white')} fontWeight={700}>
                {userData?.username}
              </Text>
            </Skeleton>
          </HStack>

          <SkeletonText isLoaded={!loading} noOfLines={2} py={!loading ? 0 : 2}>
            <Text as="p" fontSize="lg" color={useColorModeValue('black', 'white')} fontWeight={500}>
              {userData.description}
            </Text>
          </SkeletonText>
        </Flex>
        {/* Buttons */}
        <Flex flexDir="column" alignItems="center"></Flex>
      </Flex>
    </Flex>
  );
};

export default UserProfileDetails;
