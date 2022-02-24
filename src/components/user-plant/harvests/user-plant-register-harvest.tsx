import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type UserPlantRegisterHarvestProps = ButtonProps & {};

const UserPlantRegisterHarvest: React.FC<UserPlantRegisterHarvestProps> = (props) => {
  const { ...rest } = props;

  return (
    <Button colorScheme="purple" size="md" {...rest}>
      Register Harvest
    </Button>
  );
};

export default UserPlantRegisterHarvest;
