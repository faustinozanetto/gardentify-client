import React, { ForwardedRef, forwardRef } from 'react';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import FormControl, { BaseFormProps } from './form-control';
import { useField } from 'formik';

export type FormTextAreaProps = BaseFormProps & {
  textAreaProps?: TextareaProps;
};

const TextAreaControl: React.FC<FormTextAreaProps> = forwardRef(
  (props: FormTextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { name, label, textAreaProps, ...rest } = props;
    const [field] = useField(name);

    return (
      <FormControl name={name} label={label} {...rest}>
        <Textarea {...field} id={name} {...textAreaProps} ref={ref} />
      </FormControl>
    );
  }
);

export default TextAreaControl;
