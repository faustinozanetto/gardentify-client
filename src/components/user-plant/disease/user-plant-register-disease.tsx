import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type UserPlantRegisterDiseaseProps = ButtonProps & {};

const UserPlantRegisterDisease: React.FC<UserPlantRegisterDiseaseProps> = (props) => {
  const { ...rest } = props;

  return (
    <Button colorScheme="purple" size="md" {...rest}>
      Register Disease
    </Button>
  );
};

export default UserPlantRegisterDisease;
