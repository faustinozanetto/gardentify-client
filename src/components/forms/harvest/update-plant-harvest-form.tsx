import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { Button, Flex, HStack, useToast } from '@chakra-ui/react';
import InputControl from '../base/form-input';
import TextAreaControl from '../base/form-textarea';
import NumberInputControl from '../base/form-number-input';
import FormSubmitButton from '../base/buttons/form-submit-button';
import {
  Harvest,
  useCreatePlotMutation,
  useCreateUserPlantHarvestMutation,
  User,
  useUpdateHarvestMutation,
} from 'src/generated/graphql';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface UpdatePlantHarvestFormValues {
  image: string;
  harvestedOn: Date;
  amountHarvested: number;
  harvestWeight: number;
}

interface UpdatePlantHarvestFormProps {
  harvest: Harvest;
}

const validationSchema = Yup.object().shape({
  image: Yup.string().required('An image is required'),
  harvestedOn: Yup.date().required('The harvest date is required'),
  amountHarvested: Yup.number().required('Harvest amount is required').positive('Harvest amount must be positive'),
  harvestWeight: Yup.number().required('Harvest weight is required').positive('Harvest weight must be positive'),
});

const UpdatePlantHarvestForm: React.FC<UpdatePlantHarvestFormProps> = (props) => {
  const { harvest } = props;
  const toast = useToast();
  const router = useRouter();
  const [updateHarvest] = useUpdateHarvestMutation();

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        image: harvest.image,
        harvestedOn: harvest.harvestedOn,
        amountHarvested: harvest.amountHarvested,
        harvestWeight: harvest.harvestWeight,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        // Parse values
        let amountHarvested = 0;
        if (typeof values.amountHarvested === 'string') {
          amountHarvested = Number.parseFloat(values.amountHarvested);
        } else {
          amountHarvested = values.amountHarvested;
        }
        let harvestWeight = 0;
        if (typeof values.harvestWeight === 'string') {
          harvestWeight = Number.parseFloat(values.harvestWeight);
        } else {
          harvestWeight = values.harvestWeight;
        }

        await updateHarvest({
          variables: {
            input: {
              uuid: harvest.uuid,
              image: values.image,
              harvestedOn: values.harvestedOn,
              harvestWeight: harvestWeight,
              amountHarvested: amountHarvested,
            },
          },
        }).then((res) => {
          // Error handling
          if (res && res?.data?.updateHarvest?.errors) {
            toast({
              title: 'Something went wrong!',
              description: res.data.updateHarvest.errors[0].message,
              status: 'error',
              position: 'bottom-right',
              duration: 3000,
            });
          }
          // Success handling
          if (res && res.data.updateHarvest.harvest) {
            toast({
              title: 'Success',
              description: 'Plant harvest updated!',
              status: 'success',
              position: 'bottom-right',
              duration: 3000,
            });

            // Pushing user to the plot page
            const plantUuid = router.query.uuid as string;
            router.push(`/plants/${plantUuid}/harvest/${harvest.uuid}`);
          }
        });
      }}
    >
      {(formikProps: FormikProps<UpdatePlantHarvestFormValues>) => {
        const { handleSubmit } = formikProps;

        return (
          <Flex as="form" flexDir="column" width="full" my={4} onSubmit={handleSubmit as any}>
            {/* Image */}
            <InputControl name="image" label="Image" my={2} />
            {/* Harvested on */}
            <InputControl name="harvestedOn" label="Harvested On" helperText="Date of harvest" my={2} />
            {/* Harvest Weight */}
            <NumberInputControl
              name="harvestWeight"
              label="Harvest Weight"
              helperText="Weight in kilograms."
              numberInputProps={{ itemType: 'number' }}
              my={2}
            />
            {/* Amount Harvested */}
            <NumberInputControl
              name="amountHarvested"
              label="Amount Harvested"
              numberInputProps={{ itemType: 'number' }}
              helperText="Harvest amount in units."
              my={2}
            />
            {/* Buttons */}
            <HStack width="full">
              <FormSubmitButton my={2}>Submit</FormSubmitButton>
              <Link
                href={{
                  pathname: '/plants/[uuid]/harvest/[harvestUuid]',
                  query: { uuid: router.query.uuid as string, harvestUuid: harvest.uuid },
                }}
              >
                <Button colorScheme="teal" width="full">
                  Go Back
                </Button>
              </Link>
            </HStack>
          </Flex>
        );
      }}
    </Formik>
  );
};

export default UpdatePlantHarvestForm;
