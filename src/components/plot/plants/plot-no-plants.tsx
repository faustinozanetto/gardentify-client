import React from 'react';
import { Heading } from '@chakra-ui/react';

interface PlotNoPlantsProps {}

const PlotNoPlants: React.FC<PlotNoPlantsProps> = (props) => {
  const {} = props;

  return (
    <Heading as="h3" fontWeight={600} fontSize="2xl">
      This plot has no plants.
    </Heading>
  );
};

export default PlotNoPlants;
