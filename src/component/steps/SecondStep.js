import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Grid, TextField, MenuItem, InputLabel, Select, FormControl } from '@mui/material';

const SecondStep = ({ setFieldValue, errors, touched, values }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <TextField
            name="footprint_width"
            label="Footprint Width"
            type="number"
            variant="outlined"
            value={values.footprint_width}
            onChange={(e) => setFieldValue('footprint_width', e.target.value)}
            error={touched.footprint_width && Boolean(errors.footprint_width)}
            helperText={<ErrorMessage name="footprint_width" />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <TextField
            name="footprint_depth"
            label="Footprint Depth"
            type="number"
            variant="outlined"
            value={values.footprint_depth}
            onChange={(e) => setFieldValue('footprint_depth', e.target.value)}
            error={touched.footprint_depth && Boolean(errors.footprint_depth)}
            helperText={<ErrorMessage name="footprint_depth" />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <TextField
            name="footprint_height"
            label="Footprint Height"
            type="number"
            variant="outlined"
            value={values.footprint_height}
            onChange={(e) => setFieldValue('footprint_height', e.target.value)}
            error={touched.footprint_height && Boolean(errors.footprint_height)}
            helperText={<ErrorMessage name="footprint_height" />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="garage_type-label">Garage Type</InputLabel>
          <Select
            labelId="garage_type-label"
            name="garage_type"
            id="garage_type-select"
            label="Garage Type"
            value={values.garage_type}
            onChange={(e) => setFieldValue('garage_type', e.target.value)}
            error={touched.garage_type && Boolean(errors.garage_type)}
          >
            <MenuItem value={1}>Type 1</MenuItem>
            <MenuItem value={2}>Type 2</MenuItem>
            <MenuItem value={3}>Type 3</MenuItem>
          </Select>
          <ErrorMessage name="garage_type" component="div" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="garage_location-label">Garage Location</InputLabel>
          <Select
            labelId="garage_location-label"
            name="garage_location"
            id="garage_location-select"
            label="Garage Location"
            value={values.garage_location}
            onChange={(e) => setFieldValue('garage_location', e.target.value)}
            error={touched.garage_location && Boolean(errors.garage_location)}
          >
            <MenuItem value={1}>Location 1</MenuItem>
            <MenuItem value={2}>Location 2</MenuItem>
            <MenuItem value={3}>Location 3</MenuItem>
          </Select>
          <ErrorMessage name="garage_location" component="div" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="bed_bath_options-label">Bed/Bath Options</InputLabel>
          <Select
            labelId="bed_bath_options-label"
            name="bed_bath_options"
            id="bed_bath_options-select"
            label="Bed/Bath Options"
            value={values.bed_bath_options}
            onChange={(e) => setFieldValue('bed_bath_options', e.target.value)}
            error={touched.bed_bath_options && Boolean(errors.bed_bath_options)}
          >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>
          <ErrorMessage name="bed_bath_options" component="div" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="kitchen_dinning-label">Kitchen/Dining</InputLabel>
          <Select
            labelId="kitchen_dinning-label"
            name="kitchen_dinning"
            id="kitchen_dinning-select"
            label="Kitchen/Dining"
            value={values.kitchen_dinning}
            onChange={(e) => setFieldValue('kitchen_dinning', e.target.value)}
            error={touched.kitchen_dinning && Boolean(errors.kitchen_dinning)}
          >
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>
          <ErrorMessage name="kitchen_dinning" component="div" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="laundry_location-label">Laundry Location</InputLabel>
          <Select
            labelId="laundry_location-label"
            name="laundry_location"
            id="laundry_location-select"
            label="Laundry Location"
            value={values.laundry_location}
            onChange={(e) => setFieldValue('laundry_location', e.target.value)}
            error={touched.laundry_location && Boolean(errors.laundry_location)}
          >
            <MenuItem value={1}>Location 1</MenuItem>
            <MenuItem value={2}>Location 2</MenuItem>
            <MenuItem value={3}>Location 3</MenuItem>
          </Select>
          <ErrorMessage name="laundry_location" component="div" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <TextField
            name="additional_rooms"
            label="Additional Rooms"
            type="number"
            variant="outlined"
            value={values.additional_rooms}
            onChange={(e) => setFieldValue('additional_rooms', e.target.value)}
            error={touched.additional_rooms && Boolean(errors.additional_rooms)}
            helperText={<ErrorMessage name="additional_rooms" />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="outdoor_features-label">Outdoor Features</InputLabel>
          <Select
            labelId="outdoor_features-label"
            name="outdoor_features"
            id="outdoor_features-select"
            label="Outdoor Features"
            value={values.outdoor_features}
            onChange={(e) => setFieldValue('outdoor_features', e.target.value)}
            error={touched.outdoor_features && Boolean(errors.outdoor_features)}
          >
            <MenuItem value={1}>Feature 1</MenuItem>
            <MenuItem value={2}>Feature 2</MenuItem>
            <MenuItem value={3}>Feature 3</MenuItem>
          </Select>
          <ErrorMessage name="outdoor_features" component="div" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="foundation-label">Foundation</InputLabel>
          <Select
            labelId="foundation-label"
            name="foundation"
            id="foundation-select"
            label="Foundation"
            value={values.foundation}
            onChange={(e) => setFieldValue('foundation', e.target.value)}
            error={touched.foundation && Boolean(errors.foundation)}
          >
            <MenuItem value={1}>Foundation 1</MenuItem>
            <MenuItem value={2}>Foundation 2</MenuItem>
            <MenuItem value={3}>Foundation 3</MenuItem>
          </Select>
          <ErrorMessage name="foundation" component="div" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="special_features-label">Special Features</InputLabel>
          <Select
            labelId="special_features-label"
            name="special_features"
            id="special_features-select"
            label="Special Features"
            value={values.special_features}
            onChange={(e) => setFieldValue('special_features', e.target.value)}
            error={touched.special_features && Boolean(errors.special_features)}
          >
            <MenuItem value={1}>Feature 1</MenuItem>
            <MenuItem value={2}>Feature 2</MenuItem>
            <MenuItem value={3}>Feature 3</MenuItem>
          </Select>
          <ErrorMessage name="special_features" component="div" />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="exterior_walls-label">Exterior Walls</InputLabel>
          <Select
            labelId="exterior_walls-label"
            name="exterior_walls"
            id="exterior_walls-select"
            label="Exterior Walls"
            value={values.exterior_walls}
            onChange={(e) => setFieldValue('exterior_walls', e.target.value)}
            error={touched.exterior_walls && Boolean(errors.exterior_walls)}
          >
            <MenuItem value={1}>Wall Type 1</MenuItem>
            <MenuItem value={2}>Wall Type 2</MenuItem>
            <MenuItem value={3}>Wall Type 3</MenuItem>
          </Select>
          <ErrorMessage name="exterior_walls" component="div" />
        </FormControl>
      </Grid>
    </>
  );
};

export default SecondStep;
