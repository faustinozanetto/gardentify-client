import React, { useEffect, useState } from 'react';
import UpdatePlotForm from 'src/components/forms/plots/update-plot-form';
import { Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useFindUserPlantQuery, UserPlant } from 'src/generated/graphql';
import EditUserPlantForm from 'src/components/forms/user-plant/edit-user-plant-form';

interface UserPlantEditProps {}

const UserPlantEdit: React.FC<UserPlantEditProps> = (props) => {
  const { query } = useRouter();
  const [plant, setPlant] = useState<UserPlant>({});
  const { data: plantData, loading: plantLoading } = useFindUserPlantQuery({
    variables: { input: { uuid: query.uuid as string } },
  });

  useEffect(() => {
    if (plantData && plantData.findUserPlant.plant) {
      setPlant(plantData.findUserPlant.plant);
    }
  }, [plantData, plantLoading]);

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
        Plant Editing
      </Heading>
      {/* Edit plot form */}
      {!plantLoading && plant && <EditUserPlantForm plant={plant} />}
    </VStack>
  );
};

export default UserPlantEdit;
