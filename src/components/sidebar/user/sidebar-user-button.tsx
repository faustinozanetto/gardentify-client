import React from 'react';
import FiUser from '@meronex/icons/fi/FiUser';
import SidebarButton from '../sidebar-button';

interface SidebarUserButtonProps {}

export const SidebarUserButton: React.FC<SidebarUserButtonProps> = ({}) => {
  return <SidebarButton icon={FiUser} label={`Hi, User`} href={'/user/user'} />;
};
