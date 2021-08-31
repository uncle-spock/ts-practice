import React from 'react';
import { Field, FieldProps } from 'formik';

import TextFieldBase from './TextFieldBase';

interface Props {
  name: string;
  label: string;
}

function TextFieldContainer(props: Props) {
  const { name, label, ...restProps } = props;

  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <TextFieldBase {...restProps} {...field} label={label} />
      )}
    </Field>
  );
}

export default TextFieldContainer;
