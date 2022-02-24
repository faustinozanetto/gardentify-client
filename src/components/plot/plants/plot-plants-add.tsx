import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface PlotPlantsAddProps {}

const PlotPlantsAdd: React.FC<PlotPlantsAddProps> = (props) => {
  const { query } = useRouter();
  return (
    <Link href={{ pathname: '/plants/create', query: { plot: query.uuid } }}>
      <Button as="a" colorScheme="green" href={''}>
        Add Plant
      </Button>
    </Link>
  );
};

export default PlotPlantsAdd;
