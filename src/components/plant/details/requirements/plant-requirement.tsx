import React from 'react';
import BiWater from '@meronex/icons/bi/BiWater';
import MdTerrain from '@meronex/icons/md/MdTerrain';
import BisSun from '@meronex/icons/bi/BisSun';
import FaTemperatureLow from '@meronex/icons/fa/FaTemperatureLow';
import { Flex, Text, Heading, Skeleton, useColorModeValue, HStack, Icon } from '@chakra-ui/react';
import { PlantRequirementType } from '../plant-details';

interface PlantRequirementProps {
  type: PlantRequirementType;
  information: string;
  loading?: boolean;
}

const PlantRequirement: React.FC<PlantRequirementProps> = (props) => {
  const { type, information, loading } = props;

  const getRequirementIcon = (type: PlantRequirementType) => {
    switch (type) {
      case PlantRequirementType.WATER:
        return BiWater;
      case PlantRequirementType.LIGHT:
        return BisSun;
      case PlantRequirementType.TEMPERATURE:
        return FaTemperatureLow;
      case PlantRequirementType.SOIL:
        return MdTerrain;
    }
  };

  const getHeadingColor = (type: PlantRequirementType) => {
    switch (type) {
      case PlantRequirementType.WATER:
        return 'blue.500';
      case PlantRequirementType.LIGHT:
        return 'yellow.500';
      case PlantRequirementType.TEMPERATURE:
        return 'orange.500';
      case PlantRequirementType.SOIL:
        return 'green.500';
    }
  };

  return (
    <Flex
      flexDir={'column'}
      backgroundColor={useColorModeValue('gray.100', 'gray.700')}
      padding={4}
      rounded={'lg'}
      width={'full'}
    >
      {/* Heading */}
      <Skeleton isLoaded={!loading}>
        <HStack mb={1}>
          <Icon as={getRequirementIcon(type)} w={6} h={6} color={getHeadingColor(type)} />
          <Heading as="h3" lineHeight={1.1} fontWeight={600} fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
            {type}
          </Heading>
        </HStack>
      </Skeleton>

      {/* Information */}
      <Skeleton isLoaded={!loading}>
        <Text as="p" fontWeight={600} fontSize={'1rem'}>
          {information}
        </Text>
      </Skeleton>
    </Flex>
  );
};

export default PlantRequirement;
