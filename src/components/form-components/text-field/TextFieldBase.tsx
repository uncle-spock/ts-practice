import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

function TextFieldBase(props: TextFieldProps) {
  const { variant, ...restProps } = props;

  return <TextField variant={variant} {...restProps} />;
}

TextFieldBase.defaultProps = {
  variant: 'outlined',
};

export default TextFieldBase;
