import { Heading, HStack, Skeleton, Stack, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react';

interface PlotEditProps {}

const PlotEdit: React.FC<PlotEditProps> = (props) => {
  return (
    <VStack width="full">
      {/* Top */}
      <Stack
        direction={'row'}
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        borderRadius="3xl"
        boxShadow="2xl"
        padding={6}
        width="full"
      >
        {/* Heading */}
        <Skeleton isLoaded={true}>
          <Heading as="h1" lineHeight={1.1} fontWeight={700} fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
            Editing Plot
          </Heading>
        </Skeleton>
      </Stack>
      {/* Edit plot form */}
      
    </VStack>
  );
};

export default PlotEdit;
