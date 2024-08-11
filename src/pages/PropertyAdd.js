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
import FirstStep from '../component/steps/FirstStep';

// Initial values based on your provided data

const steps = ['Basic Information', 'Dimensions and Features', 'Collections and Lot Features',"Pricing and Discounts"];
const initialValues = {

    name: '',
    plan_style: '',
    plan_type: "",
    sq_ft: '',
    floors: '',
    beds: 0,
    baths: 0,
    cars: 0,
    story: 0,
    no_of_vehicles: 0,





    footprint_width: 0,
    footprint_depth: 0,
    footprint_height: 0,
    garage_type: 1,
    garage_location: 1,
    bed_bath_options: 1,
    kitchen_dinning: 1,
    laundry_location: 1,
    additional_rooms: 1,
    outdoor_features: 1,
    foundation: 1,
    special_features: 1,
    exterior_walls: {},








    lot_features: 1,
    collections: 1,
    
    
    
   
    price: '',
    initial_discount: '',
};

// Validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    plan_style: Yup.string().required('Plan style is required'),
    plan_type: Yup.number().required('Plan type is required').min(1),
    sq_ft: Yup.string().required('Square footage is required'),
    floors: Yup.string().required('Floors is required'),
    beds: Yup.number().required('Beds is required').min(0),
    baths: Yup.number().required('Baths is required').min(0),
    cars: Yup.number().required('Cars is required').min(0),
    story: Yup.number().required('Story is required').min(0),
    no_of_vehicles: Yup.number().required('Number of vehicles is required').min(0),
    footprint_width: Yup.number().required('Footprint width is required').min(0),
    footprint_depth: Yup.number().required('Footprint depth is required').min(0),
    footprint_height: Yup.number().required('Footprint height is required').min(0),
    garage_type: Yup.number().required('Garage type is required').min(1),
    garage_location: Yup.number().required('Garage location is required').min(1),
    bed_bath_options: Yup.number().required('Bed bath options are required').min(1),
    kitchen_dinning: Yup.number().required('Kitchen dining options are required').min(1),
    laundry_location: Yup.number().required('Laundry location is required').min(1),
    additional_rooms: Yup.number().required('Additional rooms are required').min(1),
    outdoor_features: Yup.number().required('Outdoor features are required').min(1),
    foundation: Yup.number().required('Foundation type is required').min(1),
    special_features: Yup.number().required('Special features are required').min(1),
    exterior_walls: Yup.object().required('Exterior walls are required'),
    collections: Yup.number().required('Collections are required').min(1),
    lot_features: Yup.number().required('Lot features are required').min(1),
    price: Yup.string().required('Price is required'),
    initial_discount: Yup.string().required('Initial discount is required'),
});

const PropertyForm = () => {
    const [activeStep, setActiveStep] = useState(0);


    const handleSubmit = (values) => {
        // Handle form submission
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, errors, touched, values }) => (
                <Form>
                    <>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Grid container spacing={2}>
                            <FirstStep
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                                values={values}
                            />

                            {/* Add more fields similarly */}
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button
                                        variant="contained" color="primary"
                                        type='submit'
                                    >
                                        {activeStep === activeStep === 2 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </Grid>

                        </Grid>
                    </>
                </Form>
            )}
        </Formik>
    );
};

export default PropertyForm;
