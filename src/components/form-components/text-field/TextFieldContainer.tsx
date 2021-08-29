import React from 'react';
import { TextField } from '@material-ui/core';

interface Props {
  name: string;
  label: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  onChange: () => void;
  onBlur: () => void;
}

function TextFieldContainer(props: Props) {
  const { name, onChange, label, variant, onBlur } = props;
  console.log(props);

  return (
    <TextField
      name={name}
      label={label}
      variant={variant}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

export default TextFieldContainer;
