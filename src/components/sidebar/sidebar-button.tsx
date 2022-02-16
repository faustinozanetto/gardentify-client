import React from 'react';
import { Button, Tooltip, HStack, Icon, Text, useMediaQuery } from '@chakra-ui/react';

interface SidebarButtonProps {
  /**
   * Icon to render on the left of the label.
   */
  icon: any;
  /**
   * Label to render on the button
   */
  label: string;
  /**
   * Href tag to parse to the button.
   */
  href?: string;
  /**
   * On Click event to pass to the onclick of the button.
   */
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, label, href, onClick, ...rest }) => {
  const [isMediumOrMore] = useMediaQuery('(min-width: 80em)');

  return (
    <Tooltip label={label} placement="right" aria-label={`${label} tooltip`} isDisabled={isMediumOrMore}>
      <Button
        as="a"
        variant="ghost"
        borderRadius="md"
        size="lg"
        color="#fff"
        my={2}
        width={['auto', 'auto', 'auto', 'auto', '100%']}
        justifyContent={['center', 'center', 'center', 'center', 'flex-start']}
        paddingInline={[0, 0, 0, 4, 4]}
        onClick={onClick}
        href={href ?? ''}
        _hover={{
          color: 'hsl(210deg,30%,8%)!important',
          backgroundColor: '#fff',
        }}
        {...rest}
      >
        <HStack alignItems="center">
          <Icon as={icon} w={6} h={6} />
          {isMediumOrMore && <Text>{label}</Text>}
        </HStack>
      </Button>
    </Tooltip>
  );
};

export default SidebarButton;
