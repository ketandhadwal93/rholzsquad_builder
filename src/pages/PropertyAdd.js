
import React, { useState } from 'react';
import { Button, Stepper, Step, StepLabel, Box } from '@mui/material';
import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
import FirstStep from '../component/steps/FirstStep';
import SecondStep from '../component/steps/SecondStep';
import ThirdStep from '../component/steps/ThirdStep';


const steps = ['Basic Information', 'Property Details', 'Additional Features'];

const initialValues = {
    name: '',
    plan_style: '',
    plan_type: '',
    sq_ft: '',
    floors: '',
    beds: '',
    baths: '',
    cars: '',
    story: '',
    no_of_vehicles: '',
    footprint_width: '',
    footprint_depth: '',
    footprint_height: '',
    garage_type: '',
    garage_location: '',
    bed_bath_options: '',
    kitchen_dinning: '',
    laundry_location: '',
    additional_rooms: '',
    outdoor_features: '',
    foundation: '',
    special_features: '',
    exterior_walls: '',
    collections: '',
    lot_features: '',
    price: '',
    initial_discount: '',
};

// const validationSchema = [
//     Yup.object({
//         name: Yup.string().required('Required'),
//         plan_style: Yup.string().required('Required'),
//         plan_type: Yup.number().required('Required'),
//     }),
//     Yup.object({
//         sq_ft: Yup.string().required('Required'),
//         floors: Yup.string().required('Required'),
//         beds: Yup.number().required('Required'),
//         baths: Yup.number().required('Required'),
//     }),
//     Yup.object({
//         cars: Yup.number().required('Required'),
//         price: Yup.string().required('Required'),
//         initial_discount: Yup.string().required('Required'),
//     }),
// ];

const PropertyAdd = () => {
    const [activeStep, setActiveStep] = useState(0);

    const isLastStep = activeStep === steps.length - 1;

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
        <Box sx={{ width: '100%' }}>
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema[activeStep]}
            onSubmit={handleNext}
        >
            {({ values, isSubmitting }) => (
                <Form>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Box>
                        {activeStep === 0 && <FirstStep />}
                        {activeStep === 1 && <SecondStep />}
                        {activeStep === 2 && <ThirdStep />}
                    </Box>
                


                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button onClick={handleNext}>
              {activeStep === activeStep === 2 ? 'Finish' : 'Next'}
            </Button>
          </Box>
                </Form>
            )}
        </Formik>
        </Box>
    );
};

export default PropertyAdd;
