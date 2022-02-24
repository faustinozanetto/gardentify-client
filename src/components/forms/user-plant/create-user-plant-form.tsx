import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { Button, Flex, HStack, useToast } from '@chakra-ui/react';
import InputControl from '../base/form-input';
import TextAreaControl from '../base/form-textarea';
import NumberInputControl from '../base/form-number-input';
import FormSubmitButton from '../base/buttons/form-submit-button';
import {
  PlantType,
  useAddUserPlantToPlotMutation,
  useCreatePlotMutation,
  useCreateUserPlantMutation,
  User,
} from 'src/generated/graphql';
import { useRouter } from 'next/router';
import SelectControl from '../base/form-select';
import Link from 'next/link';

interface CreateUserPlantFormValues {
  name: string;
  scientificName: string;
  variety: string;
  type: PlantType;
  userUuid: string;
  image: string;
  plantedSeedsOn: Date;
  seedsSproutedOn: Date;
}

interface CreateUserPlantFormProps {
  userUuid: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  scientificName: Yup.string().required('Scientific Name is required'),
  variety: Yup.string().required('Variety is required'),
  type: Yup.mixed().oneOf(Object.values(PlantType), 'Type is required'),
  image: Yup.string().required('Image is required'),
  plantedSeedsOn: Yup.date().required('Planted Seeds Date is required'),
  seedsSproutedOn: Yup.date().required('Seeds Sprouted Date is required'),
});

const CreateUserPlantForm: React.FC<CreateUserPlantFormProps> = (props) => {
  const toast = useToast();
  const router = useRouter();
  const { userUuid } = props;
  const [createUserPlant] = useCreateUserPlantMutation();
  const [addUserPlantToPlot] = useAddUserPlantToPlotMutation();
  const [initialValues, setInitialValues] = useState<CreateUserPlantFormValues>({
    name: 'Tomato Plant',
    scientificName: 'Solanum lycopersicum',
    type: PlantType.Tomato,
    image: 'https://i.pinimg.com/564x/1e/04/ac/1e04ace4daa57ae12aec6fecae78967b.jpg',
    variety: 'Campari tomato',
    plantedSeedsOn: new Date(),
    seedsSproutedOn: new Date(),
    userUuid,
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        // First create plant.
        const { data: plantData, errors: plantErrors } = await createUserPlant({
          variables: {
            input: {
              name: values.name,
              scientificName: values.scientificName,
              variety: values.variety,
              type: values.type,
              image: values.image,
              plantedSeedsOn: values.plantedSeedsOn,
              seedsSproutedOn: values.seedsSproutedOn,
              userUuid,
            },
          },
        });
        if (plantErrors) {
          toast({
            title: 'Error creating plant',
            description: plantErrors[0].message,
            status: 'error',
            position: 'bottom-right',
            duration: 3000,
          });
        } else if (plantData && plantData.createUserPlant.plant) {
          // Plant created
          // Now add plant to plot
          const { data: plotData, errors: plotErrors } = await addUserPlantToPlot({
            variables: {
              plantUuid: plantData.createUserPlant.plant.uuid,
              plotUuid: router.query.plot as string,
            },
          });
          if (plotErrors) {
            toast({
              title: 'Error adding plant to plot',
              description: plotErrors[0].message,
              status: 'error',
              position: 'bottom-right',
              duration: 3000,
            });
          } else if (plotData && plotData.addUserPlantToPlot) {
            // Success
            toast({
              title: 'Success',
              description: 'Plant created and binded to plot!.',
              status: 'success',
              position: 'bottom-right',
              duration: 3000,
            });
            router.push(`/plots/${router.query.plot as string}`);
          }
        }
      }}
    >
      {(formikProps: FormikProps<CreateUserPlantFormValues>) => {
        const { handleSubmit } = formikProps;

        return (
          <Flex as="form" flexDir="column" width="full" my={4} onSubmit={handleSubmit as any}>
            {/* Name */}
            <InputControl name="name" label="Name" my={2} />
            {/* Scientific Name */}
            <InputControl name="scientificName" label="Scientifc Name" my={2} />
            {/* Variety */}
            <InputControl name="variety" label="Variety" my={2} />
            {/* Image */}
            <InputControl name="image" label="Image" my={2} />
            {/* Type X */}
            <SelectControl name="type" label="Plant Type" selectProps={{ placeholder: 'Select a Type' }} my={2}>
              {Object.values(PlantType).map((value, index) => {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              })}
            </SelectControl>
            {/* Planted Seeds on Y */}
            <InputControl
              name="plantedSeedsOn"
              label="Planted Seeds On"
              helperText="Date when seeds were planted."
              my={2}
            />
            {/* Seeds sprouted */}
            <InputControl
              name="seedsSproutedOn"
              label="Seeds Sprouted On"
              helperText="Date when seeds sprouted."
              my={2}
            />
            {/* Buttons */}
            <HStack width="full">
              <FormSubmitButton my={2} width="full">
                Submit
              </FormSubmitButton>
              <Link href={`/plots/${router.query.plot as string}/`}>
                <Button width="full" colorScheme="teal">
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

export default CreateUserPlantForm;
