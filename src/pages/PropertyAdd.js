import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import * as Yup from 'yup';
import { Button, Grid, Paper, Container } from '@mui/material';
import FirstStep from '../component/steps/FirstStep';
import SecondStep from '../component/steps/SecondStep';
import ThirdStep from '../component/steps/ThirdStep';
import FourthStep from '../component/steps/FourthStep';
import { step1ValidationSchema, step2ValidationSchema, step3ValidationSchema, step4ValidationSchema } from '../common/Validations';
import PreviewPage from '../common/PreviewPage';
import apiEndPoint from '../utilis/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const steps = ['Basic Information', 'Dimensions', 'Features', 'Pricing'];
const initialValues = {
  // FirstStep
  name: '',
  plan_style: "",
  plan_type: "",
  floors: '',
  beds: "",
  baths: "",
  cars: "",
  story: "",
  no_of_vehicles: "",
  // second
  footprint_width: "",
  sq_ft: '',
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
  // third
  lot_features: "",
  collections: "",
  // forth
  price: '',
  initial_discount: '',
};

const PropertyForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [previewData, setPreviewData] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
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

  const handleSubmit = async (values) => {
    if (!isLastStep && values) {
      setActiveStep(activeStep + 1);
      setShow(false);
    } else {
      setShow(false);
      let apiRes = await apiEndPoint.Property.addProperty(values);
      if (apiRes?.status === 200 || apiRes.data) {
        toast.success("Property added successfully");
        navigate('/property');
      } else {
        toast.error(apiRes?.message);
      }
    }
  };

  const handleBack = () => {
    setShow(false);
    setActiveStep(activeStep - 1);
  };

  const handleEdit = () => {
    setActiveStep(activeStep - 1);
  };

  const handleHide = (data) => {
    setShow(true);
    setPreviewData(data);
  };

  return (
    <>
      {show ? (
        <PreviewPage values={previewData} handleEdit={handleEdit} />
      ) : (
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 3, mt: 5 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={getValidationSchema()}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, errors, touched, values }) => (
                <Form>
                  <>
                    <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                      {steps.map((label) => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>

                    <Grid container spacing={2}>
                      {activeStep === 0 && (
                        <FirstStep
                          setFieldValue={setFieldValue}
                          errors={errors}
                          touched={touched}
                          values={values}
                        />
                      )}
                      {activeStep === 1 && (
                        <SecondStep
                          setFieldValue={setFieldValue}
                          errors={errors}
                          touched={touched}
                          values={values}
                        />
                      )}
                      {activeStep === 2 && (
                        <ThirdStep
                          setFieldValue={setFieldValue}
                          errors={errors}
                          touched={touched}
                          values={values}
                        />
                      )}
                      {activeStep === 3 && (
                        <FourthStep
                          setFieldValue={setFieldValue}
                          errors={errors}
                          touched={touched}
                          values={values}
                        />
                      )}

                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
                          <Button
                            variant="contained"
                            color="primary"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                          >
                            Back
                          </Button>

                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            {isLastStep ? 'Finish' : 'Next'}
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </>
                </Form>
              )}
            </Formik>
          </Paper>
        </Container>
      )}
    </>
  );
};

export default PropertyForm;
