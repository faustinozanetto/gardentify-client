import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type UserPlantRegisterHarvestProps = ButtonProps & {};

const UserPlantRegisterHarvest: React.FC<UserPlantRegisterHarvestProps> = (props) => {
  const { ...rest } = props;
  const { query } = useRouter();

  return (
    <Button
      as="a"
      href={`/user/${query.username}/plants/${query.uuid}/harvest/create`}
      colorScheme="purple"
      size="md"
      {...rest}
    >
      Register Harvest
    </Button>
  );
};

export default UserPlantRegisterHarvest;
