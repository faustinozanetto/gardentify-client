import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

interface PlotManagementEditProps {}

const PlotManagementEdit: React.FC<PlotManagementEditProps> = (props) => {
  const {} = props;
  const { query } = useRouter();

  return (
    <Button as="a" colorScheme="teal" size="md" href={`plots/${query.uuid}/edit`}>
      Edit Plot
    </Button>
  );
};

export default PlotManagementEdit;
