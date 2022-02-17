import { Container, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import AuthProviders from 'src/components/auth/auth-providers';

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  const backgroundColor = useColorModeValue('gray.200', 'gray.800');

  return (
    <Flex backgroundColor={backgroundColor}>
      <Container maxWidth={['xl']} paddingTop={'1rem'} paddingBottom={'1rem'} minHeight={'100vh'}>
        <AuthProviders />
      </Container>
    </Flex>
  );
};

export default SignInPage;
