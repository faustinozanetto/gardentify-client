import React from 'react';
import SidebarButton from './sidebar-button';
import FiLogIn from '@meronex/icons/fi/FiLogIn';
import AiOutlineDashboard from '@meronex/icons/ai/AiOutlineDashboard';
import FaKeyboard from '@meronex/icons/fa/FaKeyboard';
import FiHome from '@meronex/icons/fi/FiHome';
import FiStar from '@meronex/icons/fi/FiStar';
import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { SidebarUserButton } from './user/sidebar-user-button';

interface SidebarLinkData {
  name: string;
  href: string;
  icon: any;
}

const sidebarLinks: SidebarLinkData[] = [
  {
    name: 'sidebar-home',
    href: '/',
    icon: FiHome,
  },
  {
    name: 'sidebar-dashboard',
    href: '/dashboard',
    icon: AiOutlineDashboard,
  },
];

export interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = props => {
  const { t } = useTranslation('sidebar');
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
      backgroundColor={'green.500'}
      p={4}
    >
      {/* Title & Logo */}
      <Flex flexDir="row" justifyContent="center" alignContent="center" alignItems="center" mb={4}>
        <Text as="h1" fontWeight={800} fontSize="2rem" color="#fff" textAlign="center">
          {isMediumOrMore ? `Gardentify` : 'GT'}
        </Text>
      </Flex>

      {/* Buttons */}
      <Flex flexDirection="column" flexGrow={1} alignItems="center">
        {sidebarLinks.map((link, index) => {
          return <SidebarButton key={index} icon={link.icon} label={t(link.name)} href={link.href} />;
        })}
      </Flex>

      {/* User details */}
      <Flex flexDir="column" flexGrow={0} alignItems="center">
        <SidebarUserButton />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
