import React from 'react';
import { ErrorMessage } from 'formik';
import {
    TextField,
    MenuItem,
    InputLabel,
    Select,
    FormControl,
    Grid,
} from '@mui/material';
import { plan_style_select_data, plan_type_Select_data } from '../../constants/constant';

const FirstStep = ({ setFieldValue, errors, touched, values }) => {
    return (
        <>

            <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                    <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        value={values.name}
                        onChange={(e) => setFieldValue('name', e.target.value)}
                        error={touched.name && Boolean(errors.name)}
                        helperText={<ErrorMessage name="name" />}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                    {/* <TextField
                        name="plan_style"
                        label="Plan Style"
                        variant="outlined"
                        value={values.plan_style}
                        onChange={(e) => setFieldValue('plan_style', e.target.value)}
                        error={touched.plan_style && Boolean(errors.plan_style)}
                        helperText={<ErrorMessage name="plan_style" />}
                    /> */}
                    <InputLabel id="plan_style-label">Plan Style</InputLabel>
                    <Select
                        labelId="plan_style-label"
                        name="plan_style"
                        id="plan_style-select"
                        label="Plan Style"
                        value={values.plan_style}
                        onChange={(e) => setFieldValue('plan_style', e.target.value)}
                        error={touched.plan_style && Boolean(errors.plan_style)}
                    >
                        {plan_style_select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}
                    </Select>
                    <ErrorMessage name="plan_style" component="div" />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="plan_type-label">Plan Type</InputLabel>
                    <Select
                        labelId="plan_type-label"
                        name="plan_type"
                        id="plan_type-select"
                        label="Plan Type"
                        value={values.plan_type}
                        onChange={(e) => setFieldValue('plan_type', e.target.value)}
                        error={touched.plan_type && Boolean(errors.plan_type)}
                    >
                        {plan_type_Select_data.map((ele, index) => {
                            return (
                                <MenuItem value={ele.value} key={index}>{ele.label}</MenuItem>
                            )
                        })}
                    </Select>
                    <ErrorMessage name="plan_type" component="div" />
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
                    <TextField
                        name="floors"
                        label="Floors"
                        variant="outlined"
                        value={values.floors}
                        onChange={(e) => setFieldValue('floors', e.target.value)}
                        error={touched.floors && Boolean(errors.floors)}
                        helperText={<ErrorMessage name="floors" />}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                    <TextField
                        name="beds"
                        label="Beds"
                        type="number"
                        variant="outlined"
                        value={values.beds}
                        onChange={(e) => setFieldValue('beds', e.target.value)}
                        error={touched.beds && Boolean(errors.beds)}
                        helperText={<ErrorMessage name="beds" />}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                    <TextField
                        name="baths"
                        label="Baths"
                        type="number"
                        variant="outlined"
                        value={values.baths}
                        onChange={(e) => setFieldValue('baths', e.target.value)}
                        error={touched.baths && Boolean(errors.baths)}
                        helperText={<ErrorMessage name="baths" />}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                    <TextField
                        name="cars"
                        label="Cars"
                        type="number"
                        variant="outlined"
                        value={values.cars}
                        onChange={(e) => setFieldValue('cars', e.target.value)}
                        error={touched.cars && Boolean(errors.cars)}
                        helperText={<ErrorMessage name="cars" />}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                    <TextField
                        name="story"
                        label="Story"
                        type="number"
                        variant="outlined"
                        value={values.story}
                        onChange={(e) => setFieldValue('story', e.target.value)}
                        error={touched.story && Boolean(errors.story)}
                        helperText={<ErrorMessage name="story" />}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                    <TextField
                        name="no_of_vehicles"
                        label="Number of Vehicles"
                        type="number"
                        variant="outlined"
                        value={values.no_of_vehicles}
                        onChange={(e) => setFieldValue('no_of_vehicles', e.target.value)}
                        error={touched.no_of_vehicles && Boolean(errors.no_of_vehicles)}
                        helperText={<ErrorMessage name="no_of_vehicles" />}
                    />
                </FormControl>
            </Grid>

        </>
    );
};

export default FirstStep;
