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
import { useDeletePlotMutation } from 'src/generated/graphql';
import { useRouter } from 'next/router';

interface PlotDeleteModalProps {
  onClose: () => void;
  isOpen: boolean;
  plotUuid: string;
}

const PlotDeleteModal: React.FC<PlotDeleteModalProps> = (props) => {
  const { onClose, isOpen, plotUuid } = props;
  const [deletePlot] = useDeletePlotMutation();
  const cancelRef = React.useRef();
  const toast = useToast();
  const router = useRouter();

  return (
    <AlertDialog motionPreset="scale" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Delete Plot?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>Are you sure you want to delete this Plot?. The action cannot be reverted.</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} colorScheme="red">
            No
          </Button>
          <Button
            colorScheme="green"
            ml={3}
            onClick={async () => {
              await deletePlot({ variables: { uuid: plotUuid } }).then((res) => {
                // Error handling
                if (res.errors) {
                  toast({
                    title: 'An error occurred!',
                    description: 'Could not delete Plot.',
                    position: 'bottom-right',
                    status: 'error',
                  });
                }
                if (res.data.deletePlot.success) {
                  toast({
                    title: 'Success!',
                    description: 'The plot has been deleted.',
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

export default PlotDeleteModal;
