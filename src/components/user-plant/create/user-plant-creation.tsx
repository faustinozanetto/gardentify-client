import React from 'react';
import { Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import CreateUserPlantForm from 'src/components/forms/user-plant/create-user-plant-form';

interface UserPlantCreationProps {
  userUuid: string;
}

const UserPlantCreation: React.FC<UserPlantCreationProps> = (props) => {
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
        Plant Creation
      </Heading>
      {/* Form */}
      <CreateUserPlantForm userUuid={userUuid} />
    </VStack>
  );
};

export default UserPlantCreation;
