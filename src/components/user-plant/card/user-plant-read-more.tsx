import React from 'react';
import { Button } from '@chakra-ui/react';

interface UserPlantReadMoreProps {
  plantUuid?: string;
  username?: string;
  loading?: boolean;
}

const UserPlantReadMore: React.FC<UserPlantReadMoreProps> = (props) => {
  const { plantUuid, username, loading } = props;

  const generateLink = (plant: string) => {
    const base = `/plants/`;
    return base + plant;
  };

  return (
    <Button
      as={'a'}
      isLoading={loading}
      variant={'ghost'}
      loadingText={'Loading'}
      href={generateLink(plantUuid)}
      colorScheme={'teal'}
    >
      Show More
    </Button>
  );
};

export default UserPlantReadMore;
