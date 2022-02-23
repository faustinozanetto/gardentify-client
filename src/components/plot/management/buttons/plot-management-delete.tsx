import { Button } from '@chakra-ui/react';
import React from 'react';

interface PlotManagementDeleteProps {}

const PlotManagementDelete: React.FC<PlotManagementDeleteProps> = (props) => {
  const {} = props;

  return (
    <Button colorScheme="red" size="md">
      Delete Plot
    </Button>
  );
};

export default PlotManagementDelete;
