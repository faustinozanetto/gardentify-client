import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface UserProfilePlotAddProps {}

const UserProfilePlotAdd: React.FC<UserProfilePlotAddProps> = (props) => {
  const router = useRouter();
  return (
    <Link href={{ pathname: '/plots/create/', query: { back: router.asPath } }}>
      <Button colorScheme="purple">Add Plot</Button>
    </Link>
  );
};

export default UserProfilePlotAdd;
