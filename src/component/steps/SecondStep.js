import React from 'react';
import {ErrorMessage } from 'formik';
import { Grid, TextField, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
import { bed_bath_options_Select_data, exterior_walls_Select_data, foundation_Select_data, garage_location_Select_data, garage_type_Select_data, kitchen_dining_Select_data, laundry_location_Select_data, outdoor_features_Select_data, special_features_Select_data } from '../../constants/constant';

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
                    <TextField
                        name="sq_ft"
                        label="Square Footage"
                        variant="outlined"
                        value={values.sq_ft}
                        onChange={(e) => setFieldValue('sq_ft', e.target.value)}
                        error={touched.sq_ft && Boolean(errors.sq_ft)}
                        helperText={<ErrorMessage name="sq_ft" />}
                    />
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


                        {bed_bath_options_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}

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
                        {kitchen_dining_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}

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

                        {laundry_location_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}


                    </Select>
                    <ErrorMessage name="laundry_location" component="div" />
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

                        {outdoor_features_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}

                    </Select>
                    <ErrorMessage name="outdoor_features" component="div" />
                </FormControl>
            </Grid>
           
            {/* <Grid item xs={12} sm={6}>
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
                        {exterior_walls_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}

                    </Select>
                    <ErrorMessage name="exterior_walls" component="div" />
                </FormControl>
            </Grid> */}
        </>
    );
};

export default SecondStep;
