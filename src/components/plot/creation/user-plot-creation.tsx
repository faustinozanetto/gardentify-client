import React from 'react';
import CreatePlotForm from 'src/components/forms/plots/create-plot-form';
import { Heading, useColorModeValue, VStack } from '@chakra-ui/react';

interface UserPlotCreationProps {
  userUuid: string;
}

const UserPlotCreation: React.FC<UserPlotCreationProps> = (props) => {
  const { userUuid } = props;
  return (
    <VStack
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      my={6}
      minWidth="xl"
    >
      {/* Heading */}
      <Heading as="h1" fontWeight={700} fontSize="4xl">
        Plot Creation
      </Heading>
      {/* Form */}
      <CreatePlotForm userUuid={userUuid} />
    </VStack>
  );
};

export default UserPlotCreation;
