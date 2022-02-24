import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface UserProfilePlotAddProps {}

const UserProfilePlotAdd: React.FC<UserProfilePlotAddProps> = (props) => {
  return (
    <Link href={'/plants/create/'}>
      <Button colorScheme="purple">Add Plot</Button>
    </Link>
  );
};

export default UserProfilePlotAdd;
