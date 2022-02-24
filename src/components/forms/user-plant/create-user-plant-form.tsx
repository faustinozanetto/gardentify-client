import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { Flex, useToast } from '@chakra-ui/react';
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
            {/* Image */}
            <InputControl name="image" label="Image" my={2} />
            {/* Size X */}
            <NumberInputControl
              name="sizeX"
              label="Size X"
              helperText="Size X in meters of the plot."
              numberInputProps={{ itemType: 'number' }}
              my={2}
            />
            {/* Size Y */}
            <NumberInputControl
              name="sizeY"
              label="Size Y"
              helperText="Size Y in meters of the plot."
              numberInputProps={{ itemType: 'number' }}
              my={2}
            />
            {/* Dirth Depth */}
            <NumberInputControl
              name="dirthDepth"
              label="Dirth Depth"
              numberInputProps={{ itemType: 'number' }}
              helperText="Depth of the dirt in centimeters."
              my={2}
            />
            {/* Buttons */}
            <FormSubmitButton my={2}>Submit</FormSubmitButton>
          </Flex>
        );
      }}
    </Formik>
  );
};

export default CreateUserPlantForm;
