import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type PlotManagementEditProps = ButtonProps & {};

const PlotManagementEdit: React.FC<PlotManagementEditProps> = (props) => {
  const { ...rest } = props;
  const { query } = useRouter();

  return (
    <Link href={`${query.uuid}/edit`}>
      <Button colorScheme="teal" size="md" {...rest}>
        Edit Plot
      </Button>
    </Link>
  );
};

export default PlotManagementEdit;
