import { Button } from '@chakra-ui/react';
import React from 'react';

interface PlantDiseaseReadMoreProps {
  diseaseName?: string;
  loading?: boolean;
}

const PlantDiseaseReadMore: React.FC<PlantDiseaseReadMoreProps> = (props) => {
  const { diseaseUuid, loading } = props;

  return <Button>Read More</Button>;
};

export default PlantDiseaseReadMore;
