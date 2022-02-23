import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { Button, Flex, HStack, useToast } from '@chakra-ui/react';
import InputControl from '../base/form-input';
import TextAreaControl from '../base/form-textarea';
import NumberInputControl from '../base/form-number-input';
import FormSubmitButton from '../base/buttons/form-submit-button';
import { Plot, useUpdatePlotMutation } from 'src/generated/graphql';
import { useRouter } from 'next/router';

interface UpdatePlotFormValues {
  name: string;
  description: string;
  image: string;
  sizeX: number;
  sizeY: number;
  dirtDepth: number;
}

interface UpdatePlotFormProps {
  plot: Plot;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  description: Yup.string().required('Description is required'),
  image: Yup.string().required('Image is required'),
  sizeX: Yup.number().required('Size X is required').positive('Size X must be positive'),
  sizeY: Yup.number().required('Size Y is required').positive('Size X must be positive'),
  dirtDepth: Yup.number().required('Dirth Depth is required').min(0.1, 'Dirth Depth must be greater than 0.1'),
});

const UpdatePlotForm: React.FC<UpdatePlotFormProps> = (props) => {
  const toast = useToast();
  const router = useRouter();
  const { plot } = props;
  const [updatePlot] = useUpdatePlotMutation();

  return (
    <>
      {plot && (
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: plot.name,
            description: plot.description,
            sizeX: plot.sizeX,
            sizeY: plot.sizeY,
            image: plot.image,
            dirtDepth: plot.dirtDepth,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            // Parse sizeX sizeY dirthDepth to floats.
            let sizeX = 0;
            if (typeof values.sizeX === 'string') {
              sizeX = Number.parseFloat(values.sizeX);
            } else {
              sizeX = values.sizeX;
            }
            let sizeY = 0;
            if (typeof values.sizeY === 'string') {
              sizeY = Number.parseFloat(values.sizeY);
            } else {
              sizeY = values.sizeY;
            }
            let dirtDepth = 0;
            if (typeof values.dirtDepth === 'string') {
              dirtDepth = Number.parseFloat(values.dirtDepth);
            } else {
              dirtDepth = values.dirtDepth;
            }
            await updatePlot({
              variables: {
                input: {
                  uuid: plot.uuid,
                  dirtDepth: dirtDepth,
                  description: values.description,
                  name: values.name,
                  sizeX: sizeX,
                  sizeY: sizeY,
                  image: values.image,
                },
              },
            }).then((res) => {
              // Error handling
              if (res && res?.data?.updatePlot?.errors) {
                toast({
                  title: 'Something went wrong!',
                  description: res.data.updatePlot.errors[0].message,
                  status: 'error',
                  position: 'bottom-right',
                  duration: 3000,
                });
              }
              // Success handling
              if (res && res.data.updatePlot.plot) {
                toast({
                  title: 'Success',
                  description: `Plot ${res.data.updatePlot.plot.name} updated successfully`,
                  status: 'success',
                  position: 'bottom-right',
                  duration: 3000,
                });

                // Pushing user to the plot page
                router.push(`/plots/${res.data.updatePlot.plot.uuid}`, null, { shallow: false });
              }
            });
          }}
        >
          {(formikProps: FormikProps<UpdatePlotFormValues>) => {
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
                  name="dirtDepth"
                  label="Dirth Depth"
                  numberInputProps={{ itemType: 'number' }}
                  helperText="Depth of the dirt in centimeters."
                  my={2}
                />
                {/* Buttons */}
                <HStack width="full">
                  <FormSubmitButton my={2}>Submit</FormSubmitButton>
                  <Button as="a" colorScheme="teal" width="full" href={`/plots/${plot.uuid}`}>
                    Go Back
                  </Button>
                </HStack>
              </Flex>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default UpdatePlotForm;
