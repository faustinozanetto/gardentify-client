import { Container, Heading, HStack, Spinner } from '@chakra-ui/react';
import React from 'react';

interface PageLoadingProps {}

const PageLoading: React.FC<PageLoadingProps> = (props) => {
  const {} = props;

  return (
    <Container minWidth={'100vw'} minHeight={'100vh'} centerContent justifyContent={'center'}>
      <HStack>
        <Spinner />
        <Heading>Loading</Heading>
      </HStack>
    </Container>
  );
};

export default PageLoading;
