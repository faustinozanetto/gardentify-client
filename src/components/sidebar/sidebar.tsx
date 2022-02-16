import React from 'react';
import { Flex, Text, useMediaQuery } from '@chakra-ui/react';

export interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = props => {
  const [isMediumOrMore] = useMediaQuery('(min-width: 80em)');
  const [isSmallOrLess] = useMediaQuery('(max-width: 30em)');

  return (
    <Flex
      as="nav"
      display={isSmallOrLess ? 'none' : 'flex'}
      flexDir="column"
      position="fixed"
      float="left"
      height="100%"
      width={['80px', '80px', '80px', '80px', '250px']}
      backgroundColor="#111827"
      p={4}
    >
      {/* Title & Logo */}
      <Flex flexDir="row" justifyContent="center" alignContent="center" alignItems="center" mb={4}>
        <Text as="h1" fontWeight={700} fontSize="1.75rem" color="#fff" textAlign="center">
          {isMediumOrMore ? `Gardentify` : 'GT'}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
