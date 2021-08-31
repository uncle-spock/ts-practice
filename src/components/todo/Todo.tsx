import React from 'react';
import { Formik, Form } from 'formik';

import TextFieldContainer from '../form-components/text-field/TextFieldContainer';

interface Values {
  title: string;
}

const initialValues: Values = {
  title: '',
};

export default function Todo() {
  const handleFormSubmit = (values: Values) => {
    console.log('values', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <TextFieldContainer name="title" label="Enter text" />
        </Form>
      )}
    </Formik>
  );
}
