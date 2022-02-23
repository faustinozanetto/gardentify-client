import React from 'react';
import PlotManagementDelete from './buttons/plot-management-delete';
import PlotManagementEdit from './buttons/plot-management-edit';
import { Heading, HStack, Skeleton, Spacer, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import PlotDeleteModal from '../delete/plot-delete-modal';
import { Plot } from 'src/generated/graphql';

interface PlotManagementProps {
  loading?: boolean;
  plotData?: Plot;
}

const PlotManagement: React.FC<PlotManagementProps> = (props) => {
  const { loading, plotData } = props;
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
          {/* Edit details */}
          <PlotManagementEdit />
          {/* Delete plot */}
          <PlotManagementDelete onClick={onOpenDelete} />
        </HStack>
      </HStack>

      {/* Delete Modal */}
      <PlotDeleteModal plotUuid={plotData?.uuid} onClose={onCloseDelete} isOpen={isOpenDelete} />
    </Stack>
  );
};

export default PlotManagement;
