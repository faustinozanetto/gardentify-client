import React from 'react';
import { Flex, Button } from '@chakra-ui/react';

interface PlotPlantsLoadMoreProps {
  onClick: () => void;
  isLoading: boolean;
}

const PlotPlantsLoadMore: React.FC<PlotPlantsLoadMoreProps> = (props) => {
  const { onClick, isLoading } = props;
  return (
    <Flex alignContent="center" justifyContent="center">
      <Button colorScheme="green" onClick={onClick} loadingText="Loading" width="15rem" isLoading={isLoading}>
        Load More
      </Button>
    </Flex>
  );
};

export default PlotPlantsLoadMore;
