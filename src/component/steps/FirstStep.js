import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import * as Yup from 'yup';
import {
    TextField,
    MenuItem,
    InputLabel,
    Select,
    FormControl,
    Button,
    Grid,
    Typography,
} from '@mui/material';

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
            <TextField
                name="plan_style"
                label="Plan Style"
                variant="outlined"
                value={values.plan_style}
                onChange={(e) => setFieldValue('plan_style', e.target.value)}
                error={touched.plan_style && Boolean(errors.plan_style)}
                helperText={<ErrorMessage name="plan_style" />}
            />
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
                helperText={<ErrorMessage name="plan_type" />}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <ErrorMessage name="plan_type" component="div" />
        </FormControl>
    </Grid>

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
  )
}

export default FirstStep
