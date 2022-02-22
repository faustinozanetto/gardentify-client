import { Button } from '@chakra-ui/react';
import React from 'react';

interface PlotManagementEditProps {}

const PlotManagementEdit: React.FC<PlotManagementEditProps> = (props) => {
  const {} = props;

  return (
    <Button colorScheme="teal" size="md">
      Edit Plot
    </Button>
  );
};

export default PlotManagementEdit;
