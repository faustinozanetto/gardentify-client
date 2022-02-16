import React from 'react';
import { Box, Flex, Text, Grid, useColorModeValue } from '@chakra-ui/react';
import { CoreLayoutHeadProps } from './core-layout-head';
import CoreLayoutContainer from './core-layout-container';
import Sidebar from '../sidebar/sidebar';

export interface LayoutCoreProps {
  children: React.ReactNode;
  head?: React.FC<CoreLayoutHeadProps>;
  headProps?: CoreLayoutHeadProps;
  error?: any;
}

const CoreLayout: React.FC<LayoutCoreProps> = (props): JSX.Element => {
  const mainContainerBG = useColorModeValue('gray.200', 'gray.800');

  return (
    <Grid
      role="main"
      gridTemplateColumns={['1fr', '80px 1fr', '80px 1fr', '80px 1fr', '250px 1fr']}
      gridTemplateRows="1fr"
      minHeight="100vh"
    >
      {/* SEO Head */}
      <props.head {...props.headProps} />

      {/* Sidebar */}
      <Box position="relative">{<Sidebar />}</Box>

      {/* Main container */}
      <Flex flexDir="column" backgroundColor={mainContainerBG} minHeight="100vh">
        {/* Content */}
        {props.error ? <Text>Error</Text> : <CoreLayoutContainer>{props.children}</CoreLayoutContainer>}
        {/* Footer */}
        {/* <Footer /> */}
      </Flex>
    </Grid>
  );
};

export default CoreLayout;
