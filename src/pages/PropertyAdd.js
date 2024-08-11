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
import SecondStep from '../component/steps/SecondStep';
import ThirdStep from '../component/steps/ThirdStep';
import FourthStep from '../component/steps/FourthStep';

// Initial values based on your provided data

const steps = ['Basic Information', 'Dimensions and Features', 'Collections and Lot Features', "Pricing and Discounts"];
const initialValues = {
// FirstStep
    name: '',
    plan_style: '',
    plan_type: "",
    sq_ft: '',
    floors: '',
    beds: "",
    baths: "",
    cars: "",
    story: "",
    no_of_vehicles: "",




// second
    footprint_width: "",
    footprint_depth: "",
    footprint_height: "",
    garage_type: "",
    garage_location: "",
    bed_bath_options: "",
    kitchen_dinning: "",
    laundry_location: "",
    additional_rooms: "",
    outdoor_features: "",
    foundation: "",
    special_features: "",
    exterior_walls: {},





// third

    lot_features: "",
    collections:"",



// forth
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
    const isLastStep = activeStep === steps.length - 1;

    const handleSubmit = (values) => {
        // Handle form submission
        console.log(values);
    };


    const handleNext = (values) => {
        if (!isLastStep) {
            setActiveStep(activeStep + 1);
        } else {
            // Submit form data
            console.log(values);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
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
                        {activeStep === 0 &&    <FirstStep
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                                values={values}
                            />}
                             {activeStep === 1 &&    <SecondStep
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                                values={values}
                            />}
                             {activeStep === 2 &&    <ThirdStep
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                                values={values}
                            />}
                             {activeStep === 3 &&    <FourthStep
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                                values={values}
                            />}


                            {/* Add more fields similarly */}
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                         variant="contained" color="primary"
                                        disabled={activeStep === 0}
                                        sx={{ mr: 1 }}
                                        onClick={handleBack}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button
                                        variant="contained" color="primary"
                                        onClick={handleNext}
                                    >
                                        {activeStep === 3 ? 'Finish' : 'Next'}
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
