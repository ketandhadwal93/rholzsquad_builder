import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material';

const ThirdStep = ({ setFieldValue, errors, touched, values }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="lot_features-label">Lot Features</InputLabel>
          <Select
            labelId="lot_features-label"
            name="lot_features"
            id="lot_features-select"
            label="Lot Features"
            value={values.lot_features}
            onChange={(e) => setFieldValue('lot_features', e.target.value)}
            error={touched.lot_features && Boolean(errors.lot_features)}
          >
            <MenuItem value={1}>Feature 1</MenuItem>
            <MenuItem value={2}>Feature 2</MenuItem>
            <MenuItem value={3}>Feature 3</MenuItem>
          </Select>
          <ErrorMessage name="lot_features" component="div" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="collections-label">Collections</InputLabel>
          <Select
            labelId="collections-label"
            name="collections"
            id="collections-select"
            label="Collections"
            value={values.collections}
            onChange={(e) => setFieldValue('collections', e.target.value)}
            error={touched.collections && Boolean(errors.collections)}
          >
            <MenuItem value={1}>Collection 1</MenuItem>
            <MenuItem value={2}>Collection 2</MenuItem>
            <MenuItem value={3}>Collection 3</MenuItem>
          </Select>
          <ErrorMessage name="collections" component="div" />
        </FormControl>
      </Grid>
    </>
  );
};

export default ThirdStep;
