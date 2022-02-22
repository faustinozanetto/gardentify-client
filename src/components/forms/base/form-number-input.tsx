import React, { ForwardedRef, forwardRef } from 'react';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from '@chakra-ui/react';
import FormControl, { BaseFormProps } from './form-control';
import { useField, useFormikContext } from 'formik';

export type FormNumberInputProps = BaseFormProps & {
  numberInputProps?: NumberInputProps;
  showStepper?: boolean;
  children?: React.ReactNode;
};

const NumberInputControl: React.FC<FormNumberInputProps> = forwardRef(
  (props: FormNumberInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { name, label, showStepper = true, children, numberInputProps, ...rest } = props;
    const [field, { error, touched }] = useField(name);
    const { setFieldValue } = useFormikContext();

    const $setFieldValue = (name: string) => (value: any) => setFieldValue(name, value);

    return (
      <FormControl name={name} label={label} {...rest}>
        <NumberInput
          {...field}
          id={name}
          onChange={$setFieldValue(name)}
          isInvalid={!!error && touched}
          {...numberInputProps}
        >
          <NumberInputField name={name} ref={ref} />
          {showStepper && (
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          )}
          {children}
        </NumberInput>
      </FormControl>
    );
  }
);

export default NumberInputControl;
