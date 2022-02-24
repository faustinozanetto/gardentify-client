import { Button, ButtonProps } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type PlotPlantsAddProps = ButtonProps & {};

const PlotPlantsAdd: React.FC<PlotPlantsAddProps> = (props) => {
  const { ...rest } = props;
  const { query } = useRouter();
  return (
    <Link href={{ pathname: '/plants/create', query: { plot: query.uuid } }}>
      <Button colorScheme="green" {...rest}>
        Add Plant
      </Button>
    </Link>
  );
};

export default PlotPlantsAdd;
