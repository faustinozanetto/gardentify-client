import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

interface UserPlantReadMoreProps {
  plantUuid?: string;
  loading?: boolean;
}

const UserPlantReadMore: React.FC<UserPlantReadMoreProps> = (props) => {
  const router = useRouter();
  const { plantUuid, loading } = props;

  const generateLink = (plant: string) => {
    const plantOwner = router.query.username as string;
    const base = `/user/${plantOwner}/plants/`;
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
