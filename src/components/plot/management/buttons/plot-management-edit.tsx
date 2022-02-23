import React from 'react';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface PlotManagementEditProps {}

const PlotManagementEdit: React.FC<PlotManagementEditProps> = (props) => {
  const {} = props;
  const { query } = useRouter();

  return (
    <Button as="a" colorScheme="teal" size="md" href={`${query.uuid}/edit`}>
      Edit Plot
    </Button>
  );
};

export default PlotManagementEdit;
