

import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import * as Yup from 'yup';
import { Button, Grid, Paper, Container } from '@mui/material';
import FirstStepEdit from './stepsEdit/FirstStepEdit';
import SecondStepEdit from './stepsEdit/SecondStepEdit';
import ThirdStepEdit from './stepsEdit/ThirdStepEdit';
import FourthStepEdit from './stepsEdit/FourthStepEdit';
import FifthStepEdit from './stepsEdit/FifthStepEdit';

import { step1ValidationSchema, step2ValidationSchema, step3ValidationSchema, step4ValidationSchema, step5ValidationSchema } from './Validations';
import PreviewPage from './PreviewPage';
import ApiService from '../../../serviceArchitecture/services/apiservice';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const steps = ['Basic Information', 'Dimensions', 'Features', 'Pricing', 'Images'];

const initialValues = {
    name: '',
    plan_style: "",
    plan_type: "",
    floors: '',
    beds: "",
    baths: "",
    story: "",
    no_of_vehicles: "",
    additional_rooms: "",
    footprint_width: "",
    sq_ft: '',
    footprint_depth: "",
    footprint_height: "",
    bed_bath_options: "",
    kitchen_dinning: "",
    laundry_location: "",
    garage_sq_ft: "",
    outdoor_features: "",
    lot_features: "",
    collections: "",
    garage_type: "",
    special_features: "",
    foundation: "",
    garage_location: "",
    price: '',
    initial_discount: '',
    main_images: [],
    floor_images: [],
    included: [],
    not_included: [],
    plan_details: [],
    // Add missing fields
  publish_status: "",
  video_link: "",
  architectural_style: [],
  total_heated_area: "",
  first_floor: "",
  second_floor: "",
  porch_rear: "",
  porch_front: "",
  loft: "",
  optional_lower_level: "",
  bedrooms: "",
  full_bathrooms: "",
  optional_foundation: "",
  different_foundation: "",
  exterior_standard_type: "",
  exterior_optional_type: "",
  ceiling_first_floor: "",
  ceiling_loft: "",
  roof_primary_pitch: "",
  roof_secondary_pitch: "",
  roof_framing_type: "",
};

const PropertyFormEdit = () => {
    const { id } = useParams();
    const [activeStep, setActiveStep] = useState(0);
    const [previewData, setPreviewData] = useState(null);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const isLastStep = activeStep === steps.length - 1;

    const [state, setState] = useState(initialValues);

    const getPropertyApi = async () => {
        try {
            let apiRes = await ApiService.getpropertybyid(id);
            const data = apiRes?.data;
            setState({
                ...data,
                sq_ft: isNaN(data.sq_ft) ? "" : data.sq_ft,
                floors: data.floors || "",
                beds: data.beds || "",
                baths: data.baths || "",
                plan_type: String(data.plan_type || ""),
                no_of_vehicles: String(data.no_of_vehicles || ""),
                additional_rooms: String(data.additional_rooms || ""),
                footprint_width: String(data.footprint_width || ""),
                footprint_depth: String(data.footprint_depth || ""),
                footprint_height: String(data.footprint_height || ""),
                garage_sq_ft: String(data.garage_sq_ft || ""),
                included: Array.isArray(data.included) ? data.included : [],
                not_included: Array.isArray(data.not_included) ? data.not_included : [],
                plan_details: Array.isArray(data.plan_details) ? data.plan_details : [],
                main_images: Array.isArray(data.main_images) ? data.main_images : [],
                floor_images: Array.isArray(data.floor_images) ? data.floor_images : [],
                // Add new fields
                publish_status: String(data.publish_status || ""),
                video_link: data.video_link || "",
                architectural_style: Array.isArray(data.architectural_style) ? data.architectural_style : [],
                total_heated_area: String(data.total_heated_area || ""),
                first_floor: String(data.first_floor || ""),
                second_floor: String(data.second_floor || ""),
                porch_rear: String(data.porch_rear || ""),
                porch_front: String(data.porch_front || ""),
                loft: String(data.loft || ""),
                optional_lower_level: String(data.optional_lower_level || ""),
                bedrooms: String(data.bedrooms || ""),
                full_bathrooms: String(data.full_bathrooms || ""),
                optional_foundation: String(data.optional_foundation || ""),
                different_foundation: String(data.different_foundation || ""),
                exterior_standard_type: String(data.exterior_standard_type || ""),
                exterior_optional_type: String(data.exterior_optional_type || ""),
                ceiling_first_floor: String(data.ceiling_first_floor || ""),
                ceiling_loft: String(data.ceiling_loft || ""),
                roof_primary_pitch: String(data.roof_primary_pitch || ""),
                roof_secondary_pitch: String(data.roof_secondary_pitch || ""),
                roof_framing_type: String(data.roof_framing_type || ""),
            });
        } catch (error) {
            console.log("Error fetching property data", error);
        }
    };

    useEffect(() => {
        getPropertyApi();
    }, []);

    const getValidationSchema = () => {
        switch (activeStep) {
            case 0: return step1ValidationSchema;
            case 1: return step2ValidationSchema;
            case 2: return step3ValidationSchema;
            case 3: return step4ValidationSchema;
            case 4: return step5ValidationSchema;
            default: return Yup.object();
        }
    };

    const handleSubmit = async (values) => {
        console.log("handleSubmit called", { activeStep, isLastStep, values });
        if (!isLastStep && values) {
            setActiveStep(activeStep + 1);
            setShow(false);
        } else {
            // Parse feet/inches format (e.g., "22\"2'" -> 22.1667)
            // const parseFeetInches = (str) => {
            //     if (!str || typeof str !== "string") return str ? Number(str) : "";
            //     const match = str.match(/(\d+)\"(\d+)'/);
            //     if (!match) return Number(str) || ""; // Fallback to number or empty
            //     const feet = Number(match[1]);
            //     const inches = Number(match[2]);
            //     return feet + (inches / 12); // Convert to decimal feet
            // };

// Convert string fields to arrays as per your suggestion
const plan_details = values.plan_details
? String(values.plan_details).split("\n").filter((item) => item.trim() !== "")
: [];
const included = values.included
? String(values.included).split("\n").filter((item) => item.trim() !== "")
: [];
const not_included = values.not_included
? String(values.not_included).split("\n").filter((item) => item.trim() !== "")
: [];

            // Transform values, ensuring plan_details, included, and not_included are always arrays
            const transformedValues = {
                name: values.name,
                plan_style_id: values.plan_style || "",
                plan_type: values.plan_type ? Number(values.plan_type) : "",
                floors: values.floors ? Number(values.floors) : "",
                beds: values.beds ? Number(values.beds) : "",
                baths: values.baths ? Number(values.baths) : "",
                story: values.story ? Number(values.story) : "",
                no_of_vehicles: values.no_of_vehicles ? Number(values.no_of_vehicles) : "",
                additional_rooms: values.additional_rooms ? Number(values.additional_rooms) : "",
                footprint_width: values.footprint_width,
                sq_ft: values.sq_ft ? (values.sq_ft) : "",
                footprint_depth: values.footprint_depth,
                footprint_height: values.footprint_height,
                bed_bath_options: values.bed_bath_options ? Number(values.bed_bath_options) : "",
                kitchen_dinning: values.kitchen_dinning ? Number(values.kitchen_dinning) : "",
                laundry_location: values.laundry_location ? Number(values.laundry_location) : "",
                garage_sq_ft: values.garage_sq_ft,
                outdoor_features: values.outdoor_features ? Number(values.outdoor_features) : "",
                lot_features: values.lot_features ? Number(values.lot_features) : "",
                collections: values.collections ? Number(values.collections) : "",
                garage_type: values.garage_type ? Number(values.garage_type) : "",
                special_features: values.special_features ? Number(values.special_features) : "",
                foundation: values.foundation ? Number(values.foundation) : "",
                garage_location: values.garage_location ? Number(values.garage_location) : "",
                price: values.price ? Number(values.price) : "",
                initial_discount: values.initial_discount ? Number(values.initial_discount) : "",
                main_images: Array.isArray(values.main_images) ? values.main_images : [],
                floor_images: Array.isArray(values.floor_images) ? values.floor_images : [],
                // Always send arrays, empty if no data
            //     included: Array.isArray(values.included) && values.included.length > 0 ? values.included : [],
            //     not_included: Array.isArray(values.not_included) && values.not_included.length > 0 ? values.not_included : [],
            //     plan_details: Array.isArray(values.plan_details) && values.plan_details.length > 0 ? values.plan_details : [],
            // };
           included: included,
                not_included: not_included,
                plan_details: plan_details,
// Add new fields
                publish_status: String(values.publish_status || ""),
                video_link: values.video_link || "",
                architectural_style: Array.isArray(values.architectural_style) ? values.architectural_style : [],
                total_heated_area: values.total_heated_area || "",
                first_floor: values.first_floor || "",
                second_floor: values.second_floor || "",
                porch_rear: values.porch_rear || "",
                porch_front: values.porch_front || "",
                loft: values.loft || "",
                optional_lower_level: values.optional_lower_level || "",
                bedrooms: values.bedrooms || "",
                full_bathrooms: values.full_bathrooms || "",
                optional_foundation: values.optional_foundation || "",
                different_foundation: values.different_foundation || "",
                exterior_standard_type: values.exterior_standard_type || "",
                exterior_optional_type: values.exterior_optional_type || "",
                ceiling_first_floor: values.ceiling_first_floor || "",
                ceiling_loft: values.ceiling_loft || "",
                roof_primary_pitch: values.roof_primary_pitch || "",
                roof_secondary_pitch: values.roof_secondary_pitch || "",
                roof_framing_type: values.roof_framing_type || "",
            };

            const payload = { ...transformedValues, id };
            console.log("edit property payload", payload);
            setShow(false);
            let apiRes = await ApiService.editPropertybyidbuilder(payload, id);
            if (apiRes?.status === 200) {
                toast.success("Property updated successfully");
                navigate('/apps-real-estate-grid');
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

    return (
        <>
            {show ? (
                <PreviewPage values={previewData} handleEdit={handleEdit} />
            ) : (
                <Container maxWidth="md">
                    <Paper elevation={3} sx={{ p: 8, mt: 8 }}>
                        <Formik
                            initialValues={state || initialValues}
                            enableReinitialize={true}
                            validationSchema={getValidationSchema()}
                        >
                            {({ setFieldValue, errors, touched, values }) => (
                                <Form>
                                    <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel>{label}</StepLabel>
                                            </Step>
                                        ))}
                                    </Stepper>

                                    <Grid container spacing={2}>
                                        {activeStep === 0 && (
                                            <FirstStepEdit
                                                setFieldValue={setFieldValue}
                                                errors={errors}
                                                touched={touched}
                                                values={values}
                                            />
                                        )}
                                        {activeStep === 1 && (
                                            <SecondStepEdit
                                                setFieldValue={setFieldValue}
                                                errors={errors}
                                                touched={touched}
                                                values={values}
                                            />
                                        )}
                                        {activeStep === 2 && (
                                            <ThirdStepEdit
                                                setFieldValue={setFieldValue}
                                                errors={errors}
                                                touched={touched}
                                                values={values}
                                            />
                                        )}
                                        {activeStep === 3 && (
                                            <FourthStepEdit
                                                setFieldValue={setFieldValue}
                                                errors={errors}
                                                touched={touched}
                                                values={values}
                                            />
                                        )}
                                        {activeStep === 4 && (
                                            <FifthStepEdit
                                                setFieldValue={setFieldValue}
                                                values={values}
                                                errors={errors}
                                                touched={touched}
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
                                                    onClick={() => handleSubmit(values)}
                                                >
                                                    {isLastStep ? 'Finish' : 'Next'}
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </Paper>
                </Container>
            )}
        </>
    );
};

export default PropertyFormEdit;