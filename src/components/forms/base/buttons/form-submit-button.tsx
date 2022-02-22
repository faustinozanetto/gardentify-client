import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useFormikContext } from 'formik';

export type FormSubmitButtonProps = ButtonProps;

const FormSubmitButton: React.FC<FormSubmitButtonProps> = (props) => {
  const { children, ...rest } = props;
  const { isSubmitting } = useFormikContext();

  return (
    <Button type="submit" isLoading={isSubmitting} colorScheme="green" {...rest}>
      {children}
    </Button>
  );
};

export default FormSubmitButton;
