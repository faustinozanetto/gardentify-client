import React from 'react';
import BilDiscord from '@meronex/icons/bi/BilDiscord';
import { Button } from '@chakra-ui/react';
import { SignInProviders } from './auth-providers';
import { __BACKEND__ } from '@utils/constants';

export interface SignInOptionData {
  providerType: SignInProviders;
  authUrl: string;
}

interface SignInOptionProps {
  /**
   * Used for rendering the icon and backend auth api.
   */
  providerData: SignInOptionData;
}

const SignInOption: React.FC<SignInOptionProps> = (props) => {
  const getAuthURL = (authUrl: string) => {
    return __BACKEND__ + authUrl;
  };

  const getProviderIcon = (type: SignInProviders) => {
    switch (type) {
      case SignInProviders.DISCORD:
        return <BilDiscord />;
    }
  };

  return (
    <Button
      as={'a'}
      variant={'solid'}
      size={'lg'}
      rounded={'lg'}
      height={'3.5rem'}
      fontSize={'xl'}
      width={'full'}
      colorScheme={'green'}
      href={getAuthURL(props.providerData.authUrl)}
      leftIcon={getProviderIcon(props.providerData.providerType)}
    >
      {props.providerData.providerType.toString()}
    </Button>
  );
};

export default SignInOption;
