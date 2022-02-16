import React from 'react';
import { Container } from '@chakra-ui/react';

interface CoreLayoutContainerProps {
  /** Children to display inside container */
  children: React.ReactNode;
}

const CoreLayoutContainer: React.FC<CoreLayoutContainerProps> = (props): JSX.Element => {
  return (
    <Container
      maxW={['1xl', '2xl', '3xl', '4xl', '6xl']}
      paddingTop="1rem"
      paddingBottom="1rem"
      minHeight="calc(100vh - 10rem)"
      centerContent
    >
      {props.children}
    </Container>
  );
};

export default CoreLayoutContainer;
