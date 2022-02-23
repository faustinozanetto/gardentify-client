import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type UserPlantManagementEditProps = ButtonProps & {};

const UserPlantManagementEdit: React.FC<UserPlantManagementEditProps> = (props) => {
  const { ...rest } = props;
  const { query } = useRouter();

  return (
    <Button as="a" colorScheme="teal" size="md" href={`${query.uuid}/edit`} {...rest}>
      Edit Plant
    </Button>
  );
};

export default UserPlantManagementEdit;
