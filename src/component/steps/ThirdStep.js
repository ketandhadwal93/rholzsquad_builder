import React from 'react';
import { ErrorMessage } from 'formik';
import { Grid, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { collections_Select_data, lot_features_Select_data } from '../../constants/constant';

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
                        multiple
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
                        multiple
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
        </>
    );
};

export default ThirdStep;
