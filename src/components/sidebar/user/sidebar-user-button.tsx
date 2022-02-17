import React from 'react';
import FiUser from '@meronex/icons/fi/FiUser';
import SidebarButton from '../sidebar-button';
import { UserFragment } from 'src/generated/graphql';

interface SidebarUserButtonProps {
  userData?: UserFragment;
}

const SidebarUserButton: React.FC<SidebarUserButtonProps> = (props) => {
  const { userData } = props;
  return <SidebarButton icon={FiUser} label={`Hi, ${userData.username}`} href={`/user/${userData.username}`} />;
};

export default SidebarUserButton;
