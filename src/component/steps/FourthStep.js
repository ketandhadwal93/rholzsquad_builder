import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Grid, TextField, FormControl, Button } from '@mui/material';

const FourthStep = ({ setFieldValue, errors, touched, values }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <TextField
            name="price"
            label="Price"
            variant="outlined"
            value={values.price}
            onChange={(e) => setFieldValue('price', e.target.value)}
            error={touched.price && Boolean(errors.price)}
            helperText={<ErrorMessage name="price" />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <TextField
            name="initial_discount"
            label="Initial Discount"
            variant="outlined"
            value={values.initial_discount}
            onChange={(e) => setFieldValue('initial_discount', e.target.value)}
            error={touched.initial_discount && Boolean(errors.initial_discount)}
            helperText={<ErrorMessage name="initial_discount" />}
          />
        </FormControl>
      </Grid>
    </>
  );
};

export default FourthStep;
