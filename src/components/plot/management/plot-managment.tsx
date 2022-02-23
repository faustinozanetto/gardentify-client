import React from 'react';
import PlotManagementDelete from './buttons/plot-management-delete';
import PlotManagementEdit from './buttons/plot-management-edit';
import { Heading, HStack, Skeleton, Spacer, Stack, useColorModeValue } from '@chakra-ui/react';

interface PlotManagementProps {
  loading?: boolean;
}

const PlotManagement: React.FC<PlotManagementProps> = (props) => {
  const { loading } = props;

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
          <PlotManagementDelete />
        </HStack>
      </HStack>
    </Stack>
  );
};

export default PlotManagement;
