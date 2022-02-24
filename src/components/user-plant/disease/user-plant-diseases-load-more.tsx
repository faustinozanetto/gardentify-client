import React from 'react';
import { Flex, Button } from '@chakra-ui/react';

interface UserPlantDiseasesLoadMoreProps {
  onClick: () => void;
  isLoading: boolean;
}

const UserPlantDiseasesLoadMore: React.FC<UserPlantDiseasesLoadMoreProps> = (props) => {
  const { onClick, isLoading } = props;
  return (
    <Flex alignContent="center" justifyContent="center">
      <Button colorScheme="green" onClick={onClick} loadingText="Loading" width="15rem" isLoading={isLoading}>
        Load More
      </Button>
    </Flex>
  );
};

export default UserPlantDiseasesLoadMore;
