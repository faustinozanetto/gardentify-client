import React from 'react';
import UserPlantManagementDelete from './buttons/user-plant-management-delete';
import { Heading, HStack, Skeleton, Spacer, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { UserPlant } from 'src/generated/graphql';
import UserPlantDeleteModal from '../delete/user-plant-delete-modal';

interface UserPlantManagementProps {
  loading?: boolean;
  plantData?: UserPlant;
}

const UserPlantManagement: React.FC<UserPlantManagementProps> = (props) => {
  const { loading, plantData } = props;
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();

  return (
    <Stack
      direction={'row'}
      bgColor={useColorModeValue('gray.50', 'gray.900')}
      borderRadius="3xl"
      boxShadow="2xl"
      padding={6}
      my={4}
      width={'full'}
    >
      <HStack textAlign={'center'} width={'full'}>
        {/* Heading */}
        <Skeleton isLoaded={!loading}>
          <Heading as="h2" lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
            Management
          </Heading>
        </Skeleton>
        <Spacer />
        <HStack>
          {/* Delete Plant */}
          <UserPlantManagementDelete onClick={onOpenDelete} />
        </HStack>
      </HStack>

      {/* Delete Modal */}
      <UserPlantDeleteModal plantUuid={plantData?.uuid} onClose={onCloseDelete} isOpen={isOpenDelete} />
    </Stack>
  );
};

export default UserPlantManagement;
