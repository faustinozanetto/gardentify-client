import React from 'react';
import { SkeletonCircle, Image } from '@chakra-ui/react';

interface UserAvatarProps {
  /** Url of the avatar */
  imageUrl: string;
  /** Size of the image */
  size: number;
  /** Wether data is loading or not. */
  loading: boolean;
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
  const { imageUrl, size, loading } = props;
  return (
    <SkeletonCircle isLoaded={!loading} size={size.toFixed(0)}>
      {imageUrl && <Image src={imageUrl} alt="User avatar" rounded="2xl" width={size} height={size} loading="eager" />}
    </SkeletonCircle>
  );
};

export default UserAvatar;
