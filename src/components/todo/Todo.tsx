import React from 'react';
import { Formik, Form, Field } from 'formik';

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
      {({ handleSubmit, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <Field type="email" name="title" as={TextFieldContainer} />
        </Form>
      )}
    </Formik>
  );
}
