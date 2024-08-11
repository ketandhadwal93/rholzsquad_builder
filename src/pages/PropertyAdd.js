import React, { useEffect, useState } from 'react';
import { Formik, Form, } from 'formik';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import * as Yup from 'yup';
import {
    Button,
    Grid,
} from '@mui/material';
import FirstStep from '../component/steps/FirstStep';
import SecondStep from '../component/steps/SecondStep';
import ThirdStep from '../component/steps/ThirdStep';
import FourthStep from '../component/steps/FourthStep';
import { step1ValidationSchema, step2ValidationSchema, step3ValidationSchema, step4ValidationSchema } from '../common/Validations';
import apiEndPoint from '../utilis/api';
import { toast } from 'react-toastify';

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
    collections: "",
    // forth
    price: '',
    initial_discount: '',
};


const PropertyForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const isLastStep = activeStep === steps.length - 1;

    const getValidationSchema = () => {
        switch (activeStep) {
            case 0:
                return step1ValidationSchema;
            case 1:
                return step2ValidationSchema;
            case 2:
                return step3ValidationSchema;
            case 3:
                return step4ValidationSchema;
            default:
                return Yup.object(); // Fallback schema if needed
        }
    };

    useEffect(()=>{
        let token = sessionStorage.getItem('token')
        apiEndPoint.setToken(token)
    },[])


    const handleSubmit = async (values) => {
        // Handle form submission
        debugger
        if (!isLastStep && values) {
            setActiveStep(activeStep + 1);
            console.log("sdfasfsdfsdf", values);
        } else {
            console.log("barg", values);
            debugger
            let apiRes = await apiEndPoint.Property.addProperty(values)
            console.log("add property response", apiRes)
            if (apiRes?.status == 200) {
                toast.success("Property added successfully")
            } else {
                toast.error(apiRes?.err)
            }
        }
    };


    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={getValidationSchema()}
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
                            {activeStep === 0 && <FirstStep
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                                values={values}
                            />}
                            {activeStep === 1 && <SecondStep
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                                values={values}
                            />}
                            {activeStep === 2 && <ThirdStep
                                setFieldValue={setFieldValue}
                                errors={errors}
                                touched={touched}
                                values={values}
                            />}
                            {activeStep === 3 && <FourthStep
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
                                        // onClick={handleNext}
                                        type='submit'
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
