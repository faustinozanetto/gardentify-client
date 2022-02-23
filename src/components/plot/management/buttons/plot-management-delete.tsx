import { Button, ButtonProps } from '@chakra-ui/react';
import React from 'react';

type PlotManagementDeleteProps = ButtonProps & {};

const PlotManagementDelete: React.FC<PlotManagementDeleteProps> = (props) => {
  const { ...rest } = props;

  return (
    <Button colorScheme="red" size="md" {...rest}>
      Delete Plot
    </Button>
  );
};

export default PlotManagementDelete;
