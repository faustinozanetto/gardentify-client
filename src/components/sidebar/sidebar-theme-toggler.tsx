import React from 'react';
import { Button, Tooltip, Text, useColorMode, HStack, useMediaQuery } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

interface SidebarThemeTogglerProps {
  /** Label to show in the button */
  label: string;
}

const SidebarThemeToggler: React.FC<SidebarThemeTogglerProps> = ({ label }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMediumOrMore] = useMediaQuery('(min-width: 80em)');

  return (
    <Tooltip
      label={label}
      placement="right"
      aria-label="Switch Theme Tooltip"
      fontWeight={600}
      fontSize={'md'}
      isDisabled={isMediumOrMore}
    >
      <Button
        aria-label={label}
        variant="ghost"
        borderRadius="md"
        size="lg"
        color="#fff"
        my={1}
        width={['auto', 'auto', 'auto', 'auto', '100%']}
        justifyContent={['center', 'center', 'center', 'center', 'flex-start']}
        paddingInline={[0, 0, 0, 4, 4]}
        onClick={toggleColorMode}
        _hover={{
          color: 'hsl(210deg,30%,8%)!important',
          backgroundColor: '#fff',
        }}
      >
        <HStack alignItems="center">
          {colorMode === 'dark' ? <SunIcon w={5} h={5} /> : <MoonIcon w={5} h={5} />}
          {isMediumOrMore && <Text>{label}</Text>}
        </HStack>
      </Button>
    </Tooltip>
  );
};

export default SidebarThemeToggler;
