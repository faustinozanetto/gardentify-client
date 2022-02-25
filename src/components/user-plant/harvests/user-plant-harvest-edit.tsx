import React, { useEffect, useState } from 'react';
import { Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Harvest, useFindHarvestQuery } from 'src/generated/graphql';
import UpdatePlantHarvestForm from 'src/components/forms/harvest/update-plant-harvest-form';

interface UserPlantHarvestEditProps {}

const UserPlantHarvestEdit: React.FC<UserPlantHarvestEditProps> = (props) => {
  const { query } = useRouter();
  const [harvest, setHarvest] = useState<Harvest>({});
  const { data: harvestData, loading: harvestLoading } = useFindHarvestQuery({
    variables: { input: { uuid: query.harvestUuid as string } },
  });

  // Initial harvest state
  useEffect(() => {
    if (harvestData && harvestData.findHarvest.harvest) {
      setHarvest(harvestData.findHarvest.harvest);
    }
  }, [harvestData, harvestLoading]);

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
        Harvest Editing
      </Heading>
      {/* Edit plot form */}
      {harvest && <UpdatePlantHarvestForm harvest={harvest} />}
    </VStack>
  );
};

export default UserPlantHarvestEdit;
