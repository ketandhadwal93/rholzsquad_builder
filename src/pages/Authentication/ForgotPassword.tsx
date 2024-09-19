// import React from 'react';
// import { Card, Form, Button, Image, Alert } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import authemail from "assets/images/auth/email.png";
// import ParticlesAuth from '../AuthenticationInner/ParticlesAuth';
// import { useSelector, useDispatch } from "react-redux";

// // Formik Validation
// import * as Yup from "yup";
// import { useFormik } from "formik";

// import { userForgetPassword } from "slices/thunk";
// import { createSelector } from 'reselect';

// const ForgotPassword = (props: any) => {

//     document.title = " Reset Password | Steex Admin & Dashboard Template";

//     const dispatch = useDispatch<any>();

//     const validation: any = useFormik({
//         // enableReinitialize : use this flag when initial values needs to be changed
//         enableReinitialize: true,

//         initialValues: {
//             email: '',
//         },
//         validationSchema: Yup.object({
//             email: Yup.string().required("Please Enter Your Email"),
//         }),
//         onSubmit: (values) => {
//             dispatch(userForgetPassword(values, props.history));
//         }
//     });

//     const selectForgetPassword = createSelector(
//         (state: any) => state.ForgetPassword,
//         (forgetPassword) => ({
//             forgetError: forgetPassword.forgetError,
//             forgetSuccessMsg: forgetPassword.forgetSuccessMsg,
//         })
//     );

//     const { forgetError, forgetSuccessMsg } = useSelector(selectForgetPassword);

//     return (
//         <ParticlesAuth>
//             <React.Fragment>
//                 <div className="col-xxl-6 mx-auto">
//                     <Card className="card mb-0 border-0 shadow-none mb-0">
//                         <Card.Body className="p-sm-5 m-lg-4">
//                             <div className="text-center mt-2">
//                                 <h5 className="fs-3xl">Forgot Password?</h5>
//                                 <p className="text-muted mb-4">Reset password with Steex</p>
//                                 <div className="pb-4">
//                                     <Image src={authemail} alt="" className="avatar-md" />
//                                 </div>
//                             </div>

//                             <Alert className="border-0 alert-warning text-center mb-2 mx-2" role="alert">
//                                 Enter your email and instructions will be sent to you!
//                             </Alert>
//                             <div className="p-2">
//                                 {forgetError && forgetError ? (
//                                     <Alert variant="danger" style={{ marginTop: "13px" }}>
//                                         {forgetError}
//                                     </Alert>
//                                 ) : null}
//                                 {forgetSuccessMsg ? (
//                                     <Alert variant="success" style={{ marginTop: "13px" }}>
//                                         {forgetSuccessMsg}
//                                     </Alert>
//                                 ) : null}
//                                 <Form onSubmit={(e) => {
//                                     e.preventDefault();
//                                     validation.handleSubmit();
//                                     return false;
//                                 }}>
//                                     <div className="mb-4">
//                                         <Form.Label className="form-label">Email</Form.Label>
//                                         <Form.Control type="email" className="form-control password-input" id="email" placeholder="Enter Email" required
//                                             name="email"
//                                             onChange={validation.handleChange}
//                                             onBlur={validation.handleBlur}
//                                             value={validation.values.email || ""}
//                                             isInvalid={
//                                                 validation.touched.email && validation.errors.email ? true : false
//                                             }
//                                         />
//                                         {validation.touched.email && validation.errors.email ? (
//                                             <Form.Control.Feedback type="invalid"><div>{validation.errors.email}</div></Form.Control.Feedback>
//                                         ) : null}
//                                     </div>

//                                     <div className="text-center mt-4">
//                                         <Button className="btn btn-primary w-100" type="submit">Send Reset Link</Button>
//                                     </div>
//                                 </Form>
//                             </div>
//                             <div className="mt-4 text-center">
//                                 <p className="mb-0">Wait, I remember my password...
//                                     <Link to={process.env.PUBLIC_URL + "/login"} className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </React.Fragment>
//         </ParticlesAuth>
//     )
// }

// export default ForgotPassword;









import React, { useState } from 'react';
import { Card, Form, Button, Image, Alert, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import authemail from "assets/images/auth/email.png";
import ParticlesAuth from '../AuthenticationInner/ParticlesAuth';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Import your auth service
import authService from '../../serviceArchitecture/services/authservice';

const ForgotPassword = (props: any) => {
    const navigate = useNavigate(); // Initialize useNavigate

    document.title = " Reset Password | Steex Admin & Dashboard Template";
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otp, setOtp] = useState("");
    const [forgetError, setForgetError] = useState<string | null>(null);
    const [forgetSuccessMsg, setForgetSuccessMsg] = useState<string | null>(null);

    const validation: any = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Please Enter Your Email"),
        }),
        onSubmit: async (values:any) => {
            try {
                const response = await authService.forgotPassword(values); // Call your API service
                setForgetSuccessMsg(response.message); // Handle success message from the response
                localStorage.setItem("otpmail", values.email)
                console.log(values);
                setForgetError(null);
                setShowOtpModal(true);

            } catch (error: any) {
                setForgetError(error.message || 'Something went wrong!');
                setForgetSuccessMsg(null);
                setShowOtpModal(true);
                localStorage.setItem("otpmail", values.email)  // to be removed IMPORTANTDEL

            }
        }
    });

  // OTP Form Validation using Formik and Yup
  const otpValidation = useFormik({
    initialValues: {
        otp: '',
    },
    validationSchema: Yup.object({
        otp: Yup.string()
            .matches(/^\d+$/, "OTP must be only numbers")
            .required("OTP is required"),
    }),
    onSubmit: async (values) => {
        try {
            const email:any = localStorage.getItem("otpmail")
            const response = await authService.verifyOtp(email, values.otp);
            console.log("Submitting OTP: ", values.otp);
            // After successful OTP submission, you can hide the modal
            navigate("/auth-pass-change");

            setShowOtpModal(false);
        } catch (error: any) {
            console.error("OTP submission error: ", error);
            navigate("/auth-pass-change");              // temp value need to delete IMPORTANTDEL



        }
    }
});


 // Handle Resend OTP
 const handleResendOtp = async () => {
    try {
        const email:any = localStorage.getItem("otpmail")
        const response = await authService.resendOtp(email);
        // setResendMessage('OTP has been resent to your email.');
    } catch (error:any) {
        // setResendMessage('Failed to resend OTP. Please try again later.');
        console.error('Resend OTP failed:', error.message);
    }
};


    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <Card className="card mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="text-center mt-2">
                                <h5 className="fs-3xl">Forgot Password?</h5>
                                <p className="text-muted mb-4">Reset password with Steex</p>
                                <div className="pb-4">
                                    <Image src={authemail} alt="" className="avatar-md" />
                                </div>
                            </div>

                            <Alert className="border-0 alert-warning text-center mb-2 mx-2" role="alert">
                                Enter your email and instructions will be sent to you!
                            </Alert>

                            <div className="p-2">
                                {forgetError && (
                                    <Alert variant="danger" style={{ marginTop: "13px" }}>
                                        {forgetError}
                                    </Alert>
                                )}
                                {forgetSuccessMsg && (
                                    <Alert variant="success" style={{ marginTop: "13px" }}>
                                        {forgetSuccessMsg}
                                    </Alert>
                                )}

                                <Form onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}>
                                    <div className="mb-4">
                                        <Form.Label className="form-label">Email</Form.Label>
                                        <Form.Control type="email" className="form-control password-input" id="email" placeholder="Enter Email" required
                                            name="email"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.email || ""}
                                            isInvalid={
                                                validation.touched.email && validation.errors.email ? true : false
                                            }
                                        />
                                        {validation.touched.email && validation.errors.email ? (
                                            <Form.Control.Feedback type="invalid"><div>{validation.errors.email}</div></Form.Control.Feedback>
                                        ) : null}
                                    </div>

                                    <div className="text-center mt-4">
                                        <Button className="btn btn-primary w-100" type="submit">Send Reset Link</Button>
                                    </div>
                                </Form>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="mb-0">Wait, I remember my password...
                                    <Link to={process.env.PUBLIC_URL + "/login"} className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>


{/* ################################################## OTP MODAL CODE STARTS ############################################################################################################# */}


    
      <Modal show={showOtpModal} onHide={() => setShowOtpModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={otpValidation.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter OTP sent to your email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter OTP"
                                    name="otp"
                                    value={otpValidation.values.otp}
                                    onChange={otpValidation.handleChange}
                                    onBlur={otpValidation.handleBlur}
                                    isInvalid={otpValidation.touched.otp && otpValidation.errors.otp ? true : false}
                                />
                                {otpValidation.touched.otp && otpValidation.errors.otp ? (
                                    <Form.Control.Feedback type="invalid">
                                        {otpValidation.errors.otp}
                                    </Form.Control.Feedback>
                                ) : null}
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowOtpModal(false)}>
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit">
                                    Submit OTP
                                </Button>
                                <Button variant="link" onClick={handleResendOtp}>
                            Resend OTP
                        </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>

{/* ################################################## OTP MODAL CODE ENDS ############################################################################################################# */}
                
            </React.Fragment>
        </ParticlesAuth>
    )
}

export default ForgotPassword;


