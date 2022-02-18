import { Button } from '@chakra-ui/react';
import React from 'react';

interface PlantDiseaseReadMoreProps {
  diseaseUuid?: string;
  loading?: boolean;
}

const PlantDiseaseReadMore: React.FC<PlantDiseaseReadMoreProps> = (props) => {
  const { diseaseUuid, loading } = props;

  const generateLink = (diseaseUuid: string) => {
    const base = '/plants/diseases/';
    return base + diseaseUuid;
  };

  return (
    <Button as={'a'} loadingText={'Loading'} href={generateLink(diseaseUuid)}>
      Read More
    </Button>
  );
};

export default PlantDiseaseReadMore;
