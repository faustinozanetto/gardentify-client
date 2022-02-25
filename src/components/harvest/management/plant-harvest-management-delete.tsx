import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type PlantHarvestManagementDeleteProps = ButtonProps & {};

const PlantHarvestManagementDelete: React.FC<PlantHarvestManagementDeleteProps> = (props) => {
  const { ...rest } = props;
  return (
    <Button colorScheme="red" width="full" {...rest}>
      Delete
    </Button>
  );
};

export default PlantHarvestManagementDelete;
