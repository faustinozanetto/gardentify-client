import { AuthProvider, UserFragment } from 'src/generated/graphql';

/**
 *
 * @param user the user to retrieve data from
 * @returns the generated avatar url based off the auth
 * provider.
 */
export const generateAvatarURl = (user: UserFragment): string => {
  let avatarURL = '';
  if (user?.uuid) {
    switch (user.authProvider) {
      case AuthProvider.Default: {
        avatarURL = 'https://via.placeholder.com/150';
        break;
      }
      case AuthProvider.Discord: {
        avatarURL = `https://cdn.discordapp.com/avatars/${user.oauthId}/${user.avatar}.png`;
        break;
      }
      case AuthProvider.Github: {
        avatarURL = user.avatar ?? '';
        break;
      }
    }
  }

  return avatarURL;
};
