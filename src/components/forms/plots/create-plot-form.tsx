import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { Button, Flex, HStack, useToast } from '@chakra-ui/react';
import InputControl from '../base/form-input';
import TextAreaControl from '../base/form-textarea';
import NumberInputControl from '../base/form-number-input';
import FormSubmitButton from '../base/buttons/form-submit-button';
import { useCreatePlotMutation, User } from 'src/generated/graphql';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface CreatePlotFormValues {
  name: string;
  description: string;
  image: string;
  sizeX: number;
  sizeY: number;
  dirthDepth: number;
}

interface CreatePlotFormProps {
  userUuid: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().required('Image is required'),
  sizeX: Yup.number().required('Size X is required').positive('Size X must be positive'),
  sizeY: Yup.number().required('Size Y is required').positive('Size X must be positive'),
  dirthDepth: Yup.number().required('Dirth Depth is required').min(0.1, 'Dirth Depth must be greater than 0.1'),
});

const CreatePlotForm: React.FC<CreatePlotFormProps> = (props) => {
  const toast = useToast();
  const router = useRouter();
  const { userUuid } = props;
  const [createPlot] = useCreatePlotMutation();
  const [initialValues, setInitialValues] = useState<CreatePlotFormValues>({
    name: 'Veggies Plot',
    description: 'Plot Description',
    image: 'https://i.pinimg.com/originals/1a/55/36/1a55368b755d6d4f1237187f25530f64.jpg',
    sizeX: 1,
    sizeY: 1,
    dirthDepth: 10,
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        let dirthDepth = 0;
        if (typeof values.dirthDepth === 'string') {
          dirthDepth = Number.parseInt(values.dirthDepth);
        }
        let sizeX = 0;
        if (typeof values.sizeX === 'string') {
          sizeX = Number.parseInt(values.sizeX);
        }
        let sizeY = 0;
        if (typeof values.sizeY === 'string') {
          sizeY = Number.parseInt(values.sizeY);
        }
        await createPlot({
          variables: {
            input: {
              dirtDepth: dirthDepth,
              description: values.description,
              name: values.name,
              sizeX: sizeX,
              sizeY: sizeY,
              image: values.image,
              userUuid: userUuid,
            },
          },
        }).then((res) => {
          // Error handling
          if (res && res?.data?.createPlot?.errors) {
            toast({
              title: 'Something went wrong!',
              description: res.data.createPlot.errors[0].message,
              status: 'error',
              position: 'bottom-right',
              duration: 3000,
            });
          }
          // Success handling
          if (res && res.data.createPlot.plot) {
            toast({
              title: 'Success',
              description: `Plot ${res.data.createPlot.plot.name} created successfully`,
              status: 'success',
              position: 'bottom-right',
              duration: 3000,
            });

            // Pushing user to the plot page
            router.push(`/plots/${res.data.createPlot.plot.uuid}`);
          }
        });
      }}
    >
      {(formikProps: FormikProps<CreatePlotFormValues>) => {
        const { handleSubmit } = formikProps;

        return (
          <Flex as="form" flexDir="column" width="full" my={4} onSubmit={handleSubmit as any}>
            {/* Name */}
            <InputControl name="name" label="Name" my={2} />
            {/* Description */}
            <TextAreaControl name="description" label="Description" my={2} />
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
            <HStack width="full">
              <FormSubmitButton my={2}>Submit</FormSubmitButton>
              <Link href={(router.query.back as string) ?? '/'}>
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

export default CreatePlotForm;
