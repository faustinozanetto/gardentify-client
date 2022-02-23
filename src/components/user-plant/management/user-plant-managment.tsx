import React from 'react';
import UserPlantManagementDelete from './buttons/user-plant-management-delete';
import { Heading, HStack, Skeleton, Spacer, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { UserPlant } from 'src/generated/graphql';
import UserPlantDeleteModal from '../delete/user-plant-delete-modal';
import UserPlantManagementEdit from './buttons/user-plant-management-edit';

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
          {/* Edit Plant */}
          <UserPlantManagementEdit isLoading={loading} loadingText="Loading" />
          {/* Delete Plant */}
          <UserPlantManagementDelete onClick={onOpenDelete} isLoading={loading} loadingText="Loading" />
        </HStack>
      </HStack>

      {/* Delete Modal */}
      <UserPlantDeleteModal plantUuid={plantData?.uuid} onClose={onCloseDelete} isOpen={isOpenDelete} />
    </Stack>
  );
};

export default UserPlantManagement;
