import React from 'react';
import { ErrorMessage } from 'formik';
import { Grid, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { collections_Select_data, foundation_Select_data, garage_location_Select_data, garage_type_Select_data, lot_features_Select_data, special_features_Select_data } from '../../constants/constant';

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
                        {lot_features_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}
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

                        {collections_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}
                    </Select>
                    <ErrorMessage name="collections" component="div" />
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
                        {foundation_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}
                    </Select>
                    <ErrorMessage name="foundation" component="div" />
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
                        {garage_type_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}

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

                        {garage_location_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}


                    </Select>
                    <ErrorMessage name="garage_location" component="div" />
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

                        {special_features_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}

                    </Select>
                    <ErrorMessage name="special_features" component="div" />
                </FormControl>
            </Grid>
        </>
    );
};

export default ThirdStep;
