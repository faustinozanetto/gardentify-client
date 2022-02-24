import React from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
} from '@chakra-ui/react';
import CreatePlantDiseaseForm from 'src/components/forms/diseases/create-plant-disease-form';

interface PlantDisaseCreateModalProps {
  onClose: () => void;
  isOpen: boolean;
  diseaseUuid: string;
}

const PlantDisaseCreateModal: React.FC<PlantDisaseCreateModalProps> = (props) => {
  const { onClose, isOpen, diseaseUuid } = props;
  const cancelRef = React.useRef();

  return (
    <AlertDialog motionPreset="scale" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Add Disease?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          <CreatePlantDiseaseForm diseaseUuid={diseaseUuid} />
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PlantDisaseCreateModal;
