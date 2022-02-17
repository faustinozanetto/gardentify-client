import React from 'react';
import { Flex, Text, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import SignInOption, { SignInOptionData } from './auth-signin-option';

export enum SignInProviders {
  DISCORD = 'Discord',
}

// TODO: move this to a better place XD
const ProvidersData: SignInOptionData[] = [
  {
    providerType: SignInProviders.DISCORD,
    authUrl: '/api/v1/auth/discord/login',
  },
];

interface AuthProvidersProps {}

const AuthProviders: React.FC<AuthProvidersProps> = () => {
  return (
    <VStack
      padding={6}
      marginY={12}
      minWidth={'md'}
      justify={'center'}
      rounded={'3xl'}
      boxShadow={'xl'}
      backgroundColor={useColorModeValue('green.300', 'green.700')}
    >
      <Flex flexDir={'column'} width={'100%'} justify={'center'} padding={4}>
        {/* Title */}
        <Heading as={'h1'} fontSize={'5xl'} color={useColorModeValue('black', 'white')} fontWeight={700}>
          Sign In Now
        </Heading>
        <Text as={'h2'} fontSize={'xl'} marginTop={2}>
          Available Options
        </Text>
      </Flex>
      {/* Options */}
      <VStack width={'100%'} spacing={4} rounded={'2xl'}>
        {/* Discord option */}
        <SignInOption providerData={ProvidersData[0]} />
      </VStack>
    </VStack>
  );
};

export default AuthProviders;
