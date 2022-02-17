import React from 'react';
import SidebarButton from './sidebar-button';
import FiLogIn from '@meronex/icons/fi/FiLogIn';
import { useTranslation } from 'next-i18next';

interface SidebarLoginButtonProps {}

export const SidebarLoginButton: React.FC<SidebarLoginButtonProps> = ({}) => {
  const { t } = useTranslation('sidebar');
  return <SidebarButton icon={FiLogIn} label={t('sidebar-login')} href={'/auth/signin'} />;
};
