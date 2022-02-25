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
import { useDeleteUserPlantHarvestMutation } from 'src/generated/graphql';
import { useRouter } from 'next/router';

interface HarvestDeleteModalProps {
  onClose: () => void;
  isOpen: boolean;
  harvestUuid: string;
}

const HarvestDeleteModal: React.FC<HarvestDeleteModalProps> = (props) => {
  const { onClose, isOpen, harvestUuid } = props;
  const [deleteHarvest] = useDeleteUserPlantHarvestMutation();
  const cancelRef = React.useRef();
  const toast = useToast();
  const router = useRouter();

  return (
    <AlertDialog motionPreset="scale" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Delete Harvest?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>Are you sure you want to delete this Harvest?. The action cannot be reverted.</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} colorScheme="red">
            No
          </Button>
          <Button
            colorScheme="green"
            ml={3}
            onClick={async () => {
              await deleteHarvest({ variables: { input: { uuid: harvestUuid } } }).then((res) => {
                // Error handling
                if (res.errors) {
                  toast({
                    title: 'An error occurred!',
                    description: 'Could not delete Plot.',
                    position: 'bottom-right',
                    status: 'error',
                  });
                }
                if (res.data.deleteUserPlantHarvest.success) {
                  toast({
                    title: 'Success!',
                    description: 'The harvest has been deleted.',
                    position: 'bottom-right',
                    status: 'success',
                  });
                  // Success
                  router.push({ pathname: '/plants/[uuid]/', query: { uuid: router.query.uuid } });
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

export default HarvestDeleteModal;
