// import React, { useEffect, useState } from 'react';
// import { Formik, Form } from 'formik';
// import { Stepper, Step, StepLabel, Box } from '@mui/material';
// import * as Yup from 'yup';
// import { Button, Grid, Paper, Container } from '@mui/material';
// import FirstStep from './steps/FirstStep';
// import SecondStep from './steps/SecondStep';
// import ThirdStep from './steps/ThirdStep';
// import FourthStep from './steps/FourthStep';
// import { step1ValidationSchema, step2ValidationSchema, step3ValidationSchema, step4ValidationSchema, step5ValidationSchema } from './Validations';
// // import PreviewPage from '../common/PreviewPage';
// // import apiEndPoint from '../utilis/api';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import FifthStep from './steps/FifthStep';
// import  ApiService  from '../../../serviceArchitecture/services/apiservice';
// import { string } from 'prop-types';

// const steps = ['Basic Information', 'Dimensions', 'Features', 'Pricing', 'Images'];
// const initialValues = {
//   // FirstStep
//   name: '',
//   plan_style: "",
//   plan_type: "",
//   floors: '',
//   beds: "",
//   baths: "",
//   cars: "",
//   story: "",
//   no_of_vehicles: "",
//   additional_rooms: "",
//   // second
//   footprint_width: "",
//   sq_ft: '',
//   footprint_depth: "",
//   footprint_height: "",
//   bed_bath_options: "",
//   kitchen_dinning: "",
//   laundry_location: "",

//   outdoor_features: "",

//   // third
//   lot_features: "",
//   collections: "",
//   garage_type: "",
//   special_features: "",
//   foundation: "",
//   garage_location: "",
//   // forth
//   price: '',
//   initial_discount: '',
//   main_images: [],
//   floor_images : [],
//   // garage_images : []
// };

// const PropertyForm = () => {
//   const [images, setImages] = useState([]);
//   const [activeStep, setActiveStep] = useState(0);
//   const [previewData, setPreviewData] = useState(null);
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();
//   const isLastStep = activeStep === steps.length - 1;

//   const getValidationSchema = () => {
//     switch (activeStep) {
//       case 0:
//         return step1ValidationSchema;
//       case 1:
//         return step2ValidationSchema;
//       case 2:
//         return step3ValidationSchema;
//       case 3:
//         return step4ValidationSchema;
//       case 4:
//         return step5ValidationSchema;
//       default:
//         return Yup.object(); // Fallback schema if needed
//     }
//   };


//   const handleSubmit = async (values) => {
//     if (!isLastStep && values) {
//       setActiveStep(activeStep + 1);
//       setShow(false);
//     } else {
//       setShow(false);
//       console.log(values)
//       const transformedValues = {
//         ...values,
//         plan_style_id: String(values.plan_style), // Map plan_style to plan_style_id
//     };
//     delete transformedValues.plan_style; // Optionally remove plan_style if not needed

//       let apiRes = await ApiService.addProperty(transformedValues);
//       if (apiRes?.status === 200 || apiRes.data) {
//         toast.success("Property added successfully");
//         navigate('/apps-real-estate-grid');
//       } else {
//         toast.error(apiRes?.message);
//       }
//     }
//   };

//   const handleBack = () => {
//     setShow(false);
//     setActiveStep(activeStep - 1);
//   };

//   const handleEdit = () => {
//     setActiveStep(activeStep - 1);
//   };

//   const handleHide = (data) => {
//     setShow(true);
//     setPreviewData(data);
//   };

//   return (
//     <>
//       {show ? (
//         {/* <PreviewPage values={previewData} handleEdit={handleEdit} /> */}
//       ) : (
//         <Container maxWidth="md">
//           <Paper elevation={3} sx={{ p: 8, mt:8 }}>
//             <Formik
//               initialValues={initialValues}
//               validationSchema={getValidationSchema()}
//               onSubmit={handleSubmit}
//             >
//               {({ setFieldValue, errors, touched, values }) => (
//                 <Form>
//                   <>
//                     <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
//                       {steps.map((label) => (
//                         <Step key={label}>
//                           <StepLabel>{label}</StepLabel>
//                         </Step>
//                       ))}
//                     </Stepper>

//                     <Grid container spacing={2}>
//                       {activeStep === 0 && (
//                         <FirstStep
//                           setFieldValue={setFieldValue}
//                           errors={errors}
//                           touched={touched}
//                           values={values}
//                         />
//                       )}
//                       {activeStep === 1 && (
//                         <SecondStep
//                           setFieldValue={setFieldValue}
//                           errors={errors}
//                           touched={touched}
//                           values={values}
//                         />
//                       )}
//                       {activeStep === 2 && (
//                         <ThirdStep
//                           setFieldValue={setFieldValue}
//                           errors={errors}
//                           touched={touched}
//                           values={values}
//                         />
//                       )}
//                       {activeStep === 3 && (

//                         <FourthStep
//                           setFieldValue={setFieldValue}
//                           errors={errors}
//                           touched={touched}
//                           values={values}
//                         />



//                       )}
//                       {activeStep === 4 && (
//                         <FifthStep
//                           setFieldValue={setFieldValue}
//                           values={values}
//                           errors={errors}
//                           touched={touched}
//                         />
//                       )}

//                       <Grid item xs={12}>
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             disabled={activeStep === 0}
//                             onClick={handleBack}
//                           >
//                             Back
//                           </Button>

//                           <Button
//                             variant="contained"
//                             color="primary"
//                             type="submit"
//                           >
//                             {isLastStep ? 'Finish' : 'Next'}
//                           </Button>
//                         </Box>
//                       </Grid>
//                     </Grid>
//                   </>
//                 </Form>
//               )}
//             </Formik>
//           </Paper>
//         </Container>
//       )}
//     </>
//   );
// };

// export default PropertyForm;







import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import * as Yup from 'yup';
import { Button, Grid, Paper, Container } from '@mui/material';
import FirstStep from './steps/FirstStep';
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep';
import FourthStep from './steps/FourthStep';
import { step1ValidationSchema, step2ValidationSchema, step3ValidationSchema, step4ValidationSchema, step5ValidationSchema } from './Validations';
// import PreviewPage from '../common/PreviewPage';
// import apiEndPoint from '../utilis/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import FifthStep from './steps/FifthStep';
import  ApiService  from '../../../serviceArchitecture/services/apiservice';
import { string } from 'prop-types';

const steps = ['Basic Information', 'Dimensions', 'Features', 'Pricing', 'Images'];
const initialValues = {
  // FirstStep
  name: '',
  plan_style: "",
  plan_type: "",
  floors: '',
  beds: "",
  baths: "",
  // cars: "",
  garage_sq_ft:"",
  story: "",
  no_of_vehicles: "",
  additional_rooms: "",
  // second
  footprint_width: "",
  sq_ft: '',
  footprint_depth: "",
  footprint_height: "",
  bed_bath_options: "",
  kitchen_dinning: "",
  laundry_location: "",

  outdoor_features: "",

  // third
  lot_features: "",
  collections: "",
  garage_type: "",
  special_features: "",
  foundation: "",
  garage_location: "",
  // forth
  price: '',
  initial_discount: '',
  main_images: [],
  floor_images : [],
  planDetails:[],
  plan_details: [], // New field for Plan Details
  whats_included: [], // New field for What’s Included
  whats_not_included: [], // New field for What’s Not Included
  // garage_images : []
};

const PropertyForm = () => {
  const [images, setImages] = useState([]);
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
      case 4:
        return step5ValidationSchema;
      default:
        return Yup.object(); // Fallback schema if needed
    }
  };


  // const handleSubmit = async (values) => {
  //   console.log('her is the values',values);
  //   if (!isLastStep && values) {
  //     setActiveStep(activeStep + 1);
  //     setShow(false);
  //   } else {
  //     setShow(false);
  //     console.log(values)
  //     const transformedValues = {
  //       ...values,
  //       plan_style_id: String(values.plan_style), // Map plan_style to plan_style_id
  //   };
  //   delete transformedValues.plan_style; // Optionally remove plan_style if not needed

  //     let apiRes = await ApiService.addProperty(transformedValues);
  //     if (apiRes?.status === 200 || apiRes.data) {
  //       toast.success("Property added successfully");
  //       navigate('/apps-real-estate-grid');
  //     } else {
  //       toast.error(apiRes?.message);
  //     }
  //   }
  // };


  const handleSubmit = async (values) => {
    // Transform the text area inputs into arrays by splitting on newlines
    const plan_details = values?.plan_details
      ? String(values?.plan_details)?.split("\n").filter((item) => item?.trim() !== "")
      : [];
    const included = values?.included
      ? String(values?.included)?.split("\n").filter((item) => item?.trim() !== "")
      : [];
    const not_included = values?.not_included
      ? String(values?.not_included)?.split("\n").filter((item) => item?.trim() !== "")
      : [];
  
    // Prepare the transformed values for the backend
    const transformedValues = {
      ...values,
      plan_style_id: String(values?.plan_style), // Map plan_style to plan_style_id
      plan_details, // Array of strings
      included, // Array of strings
      not_included, // Array of strings
    };
  
    // Remove the temporary fields that were used for form input
    delete transformedValues.plan_style; // Optionally remove plan_style if not needed
    delete transformedValues.whats_included;
    delete transformedValues.whats_not_included;
  
    console.log("Submitting to backend:", transformedValues);
  
    if (!isLastStep && values) {
      setActiveStep(activeStep + 1);
      setShow(false);
    } else {
      setShow(false);
  
      try {
        let apiRes = await ApiService.addProperty(transformedValues);
        if (apiRes?.status === 200 || apiRes.data) {
          toast.success("Property added successfully");
          navigate("/apps-real-estate-grid");
        } else {
          toast.error(apiRes?.message);
        }
      } catch (error) {
        toast.error("Failed to add property");
        console.error("Error submitting property:", error);
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
        {/* <PreviewPage values={previewData} handleEdit={handleEdit} /> */}
      ) : (
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 8, mt:8 }}>
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
                      {activeStep === 4 && (
                        <FifthStep
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
