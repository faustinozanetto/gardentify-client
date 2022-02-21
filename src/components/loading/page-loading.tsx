import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

interface PageLoadingProps {}

const PageLoading: React.FC<PageLoadingProps> = (props) => {
  const {} = props;

  return (
    <Container>
      <Heading>Loading</Heading>
    </Container>
  );
};

export default PageLoading;
