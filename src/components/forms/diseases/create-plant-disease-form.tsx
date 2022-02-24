import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';
import { Button, Flex, HStack, useToast } from '@chakra-ui/react';
import InputControl from '../base/form-input';
import FormSubmitButton from '../base/buttons/form-submit-button';
import { useAddDiseaseToUserPlantMutation } from 'src/generated/graphql';
import { useRouter } from 'next/router';

interface CreatePlantDiseaseFormValues {
  appearedOn: Date;
}

interface CreatePlantDiseaseFormProps {
  diseaseUuid: string;
}

const validationSchema = Yup.object().shape({
  appearedOn: Yup.date().required('The harvest date is required'),
});

const CreatePlantDiseaseForm: React.FC<CreatePlantDiseaseFormProps> = (props) => {
  const { diseaseUuid } = props;
  const toast = useToast();
  const router = useRouter();
  const [addDiseaseToPlant] = useAddDiseaseToUserPlantMutation();
  const [initialValues, setInitialValues] = useState<CreatePlantDiseaseFormValues>({
    appearedOn: new Date(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await addDiseaseToPlant({
          variables: {
            plant: {
              uuid: router.query.uuid as string,
            },
            disease: {
              uuid: diseaseUuid,
            },
            input: {
              appearedOn: values.appearedOn,
            },
          },
        }).then((res) => {
          // Error handling
          if (res && res?.data?.addDiseaseToUserPlant?.errors) {
            toast({
              title: 'Something went wrong!',
              description: res.data.addDiseaseToUserPlant.errors[0].message,
              status: 'error',
              position: 'bottom-right',
              duration: 3000,
            });
          }
          // Success handling
          if (res && res.data.addDiseaseToUserPlant.disease) {
            toast({
              title: 'Success',
              description: 'Disease added to plant!',
              status: 'success',
              position: 'bottom-right',
              duration: 3000,
            });

            // Pushing user to the plot page
            router.push(`/user/${router.query.username as string}/plants/${router.query.uuid as string}`);
          }
        });
      }}
    >
      {(formikProps: FormikProps<CreatePlantDiseaseFormValues>) => {
        const { handleSubmit } = formikProps;

        return (
          <Flex as="form" flexDir="column" width="full" onSubmit={handleSubmit as any}>
            {/* Appeared on */}
            <InputControl name="appearedOn" label="Appeared On" helperText="Date when the disease appeared" my={2} />
            {/* Buttons */}
            <HStack width="full">
              <FormSubmitButton my={2}>Submit</FormSubmitButton>
            </HStack>
          </Flex>
        );
      }}
    </Formik>
  );
};

export default CreatePlantDiseaseForm;
