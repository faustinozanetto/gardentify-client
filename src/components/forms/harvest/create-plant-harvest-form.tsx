import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { Button, Flex, HStack, useToast } from '@chakra-ui/react';
import InputControl from '../base/form-input';
import TextAreaControl from '../base/form-textarea';
import NumberInputControl from '../base/form-number-input';
import FormSubmitButton from '../base/buttons/form-submit-button';
import { useCreatePlotMutation, useCreateUserPlantHarvestMutation, User } from 'src/generated/graphql';
import { useRouter } from 'next/router';

interface CreatePlantHarvestFormValues {
  plant: string;
  image: string;
  harvestedOn: Date;
  amountHarvested: number;
  harvestWeight: number;
}

interface CreatePlantHarvestFormProps {
  plantUuid: string;
}

const validationSchema = Yup.object().shape({
  image: Yup.string().required('An image is required'),
  harvestedOn: Yup.date().required('The harvest date is required'),
  amountHarvested: Yup.number().required('Harvest amount is required').positive('Harvest amount must be positive'),
  harvestWeight: Yup.number().required('Harvest weight is required').positive('Harvest weight must be positive'),
});

const CreatePlantHarvestForm: React.FC<CreatePlantHarvestFormProps> = (props) => {
  const { plantUuid } = props;
  const toast = useToast();
  const router = useRouter();
  const [createHarvest] = useCreateUserPlantHarvestMutation();
  const [initialValues, setInitialValues] = useState<CreatePlantHarvestFormValues>({
    image: 'https://i.pinimg.com/originals/1a/55/36/1a55368b755d6d4f1237187f25530f64.jpg',
    harvestedOn: new Date(),
    amountHarvested: 1,
    harvestWeight: 1,
    plant: '',
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        let amountHarvested = 0;
        if (typeof values.amountHarvested === 'string') {
          amountHarvested = Number.parseInt(values.amountHarvested);
        }
        let harvestWeight = 0;
        if (typeof values.harvestWeight === 'string') {
          harvestWeight = Number.parseInt(values.harvestWeight);
        }
        await createHarvest({
          variables: {
            input: {
              plantUuid: plantUuid,
              image: values.image,
              harvestedOn: values.harvestedOn,
              harvestWeight: harvestWeight,
              amountHarvested: amountHarvested,
            },
          },
        }).then((res) => {
          // Error handling
          if (res && res?.data?.createUserPlantHarvest?.errors) {
            toast({
              title: 'Something went wrong!',
              description: res.data.createUserPlantHarvest.errors[0].message,
              status: 'error',
              position: 'bottom-right',
              duration: 3000,
            });
          }
          // Success handling
          if (res && res.data.createUserPlantHarvest.harvest) {
            toast({
              title: 'Success',
              description: 'Plant harvest created!',
              status: 'success',
              position: 'bottom-right',
              duration: 3000,
            });

            // Pushing user to the plot page
            router.push(`/plants/${plantUuid}`);
          }
        });
      }}
    >
      {(formikProps: FormikProps<CreatePlantHarvestFormValues>) => {
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
              <Button as="a" colorScheme="teal" width="full" href={`/plants/${plantUuid}`}>
                Go Back
              </Button>
            </HStack>
          </Flex>
        );
      }}
    </Formik>
  );
};

export default CreatePlantHarvestForm;
