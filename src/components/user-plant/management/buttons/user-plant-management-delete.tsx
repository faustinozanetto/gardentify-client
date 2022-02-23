import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

type UserPlantManagementDeleteProps = ButtonProps & {};

const UserPlantManagementDelete: React.FC<UserPlantManagementDeleteProps> = (props) => {
  const { ...rest } = props;

  return (
    <Button colorScheme="red" size="md" {...rest}>
      Delete Plant
    </Button>
  );
};

export default UserPlantManagementDelete;
