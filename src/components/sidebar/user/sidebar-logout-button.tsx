import React from 'react';
import SidebarButton from '../sidebar-button';
import FiLogOut from '@meronex/icons/fi/FiLogOut';
import { useTranslation } from 'next-i18next';
import { useLogoutMutation } from 'src/generated/graphql';

interface SidebarLogoutButtonProps {}

const SidebarLogoutButton: React.FC<SidebarLogoutButtonProps> = (props) => {
  const {} = props;
  const [logout] = useLogoutMutation();
  const { t } = useTranslation('sidebar');

  return (
    <SidebarButton
      label={t('sidebar-logout')}
      icon={FiLogOut}
      onClick={async () => {
        await logout();
      }}
    />
  );
};

export default SidebarLogoutButton;
