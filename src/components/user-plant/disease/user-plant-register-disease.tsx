import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type UserPlantRegisterDiseaseProps = ButtonProps & {};

const UserPlantRegisterDisease: React.FC<UserPlantRegisterDiseaseProps> = (props) => {
  const { ...rest } = props;
  const { query } = useRouter();

  return (
    <Button as="a" href={`/plants/${query.uuid}/disease/create`} colorScheme="purple" size="md" {...rest}>
      Register Disease
    </Button>
  );
};

export default UserPlantRegisterDisease;
