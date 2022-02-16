import React from 'react';
import { Text } from '@chakra-ui/react';
import { withApollo } from '@modules/apollo/apollo.module';

const Home = ({}) => {
  return <Text>Hello</Text>;
};

export default withApollo({})(Home);
