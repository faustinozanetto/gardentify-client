import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useDeleteUserPlantMutation } from 'src/generated/graphql';
import { useRouter } from 'next/router';

interface UserPlantDeleteModalProps {
  onClose: () => void;
  isOpen: boolean;
  plantUuid: string;
}

const UserPlantDeleteModal: React.FC<UserPlantDeleteModalProps> = (props) => {
  const { onClose, isOpen, plantUuid } = props;
  const [deletePlant] = useDeleteUserPlantMutation();
  const cancelRef = React.useRef();
  const toast = useToast();
  const router = useRouter();

  return (
    <AlertDialog motionPreset="scale" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Delete Plant?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>Are you sure you want to delete this Plant?. The action cannot be reverted.</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} colorScheme="red">
            No
          </Button>
          <Button
            colorScheme="green"
            ml={3}
            onClick={async () => {
              await deletePlant({ variables: { input: { uuid: plantUuid } } }).then((res) => {
                // Error handling
                if (res.errors) {
                  toast({
                    title: 'An error occurred!',
                    description: 'Could not delete Plant.',
                    position: 'bottom-right',
                    status: 'error',
                  });
                }
                if (res.data.deleteUserPlant.success) {
                  toast({
                    title: 'Success!',
                    description: 'The plant has been deleted.',
                    position: 'bottom-right',
                    status: 'success',
                  });
                  // Success
                  router.push('/');
                }
              });
            }}
          >
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UserPlantDeleteModal;
