import React, { useEffect, useState } from 'react';
import { Form, Button, InputGroup, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ParticlesAuth from '../AuthenticationInner/ParticlesAuth';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// Replace with your authService
import authService from '../../serviceArchitecture/services/authservice'; // Adjust path accordingly

const Register = () => {
    document.title = "Register | Steex Admin & Dashboard Template";

    const navigate = useNavigate();
    const [passwordShow, setPasswordShow] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(0);
    const [loader, setLoader] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const validation: any = useFormik({
        enableReinitialize: true,

        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Email"),
            username: Yup.string().required("Please Enter Username"),
            password: Yup.string().required("Please Enter Password").matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                "Must contain 8 characters, one uppercase, one lowercase, and one number"
            ),
        }),
        onSubmit: async (values) => {
            setLoader(true);
            setError(null);

            try {
                // Use authService for signup API call
                await authService.signup(values); // Adjust the method as per your service
                setSuccess(true);
                setLoader(false);
                setTimer(3);
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            } catch (err: any) {
                setError(err.response?.data?.message || "Registration failed");
                setLoader(false);
            }
        }
    });

    useEffect(() => {
        if (timer) {
            const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
            return () => clearInterval(countdown);
        }
    }, [timer]);

    return (
        <ParticlesAuth>
            <React.Fragment>
                <div className="col-xxl-6 mx-auto">
                    <div className="card mb-0 border-0 shadow-none mb-0">
                        <div className="card-body p-sm-5 m-lg-4">
                            <div className="text-center mt-2">
                                <h5 className="fs-3xl">Create your free account</h5>
                            </div>
                            <div className="p-2 mt-5">
                                {success && (
                                    <Alert variant="success">
                                        Redirecting to login page in {timer} seconds...
                                    </Alert>
                                )}
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form
                                    className="needs-validation"
                                    action="#"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                    }}
                                >
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="useremail">
                                            Email <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            id="useremail"
                                            placeholder="Enter email address"
                                            name="email"
                                            className="form-control"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.email || ""}
                                            isInvalid={
                                                validation.touched.email && validation.errors.email ? true : false
                                            }
                                        />
                                        {validation.touched.email && validation.errors.email ? (
                                            <Form.Control.Feedback type="invalid">
                                                {validation.errors.email}
                                            </Form.Control.Feedback>
                                        ) : null}
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="username">
                                            Username <span className="text-danger">*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="username"
                                            placeholder="Enter username"
                                            name="username"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.username || ""}
                                            isInvalid={
                                                validation.touched.username && validation.errors.username ? true : false
                                            }
                                        />
                                        {validation.touched.username && validation.errors.username ? (
                                            <Form.Control.Feedback type="invalid">
                                                {validation.errors.username}
                                            </Form.Control.Feedback>
                                        ) : null}
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="password-input">
                                            Password <span className="text-danger">*</span>
                                        </Form.Label>
                                        <InputGroup className="position-relative auth-pass-inputgroup">
                                            <Form.Control
                                                placeholder="Enter password"
                                                id="password-input"
                                                type={!passwordShow ? "password" : "text"}
                                                name="password"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.password || ""}
                                                isInvalid={
                                                    validation.touched.password && validation.errors.password ? true : false
                                                }
                                            />
                                            <Button
                                                variant="link"
                                                className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                type="button"
                                                id="password-addon"
                                                onClick={() => setPasswordShow(!passwordShow)}
                                            >
                                                <i className="ri-eye-fill align-middle"></i>
                                            </Button>
                                            {validation.touched.password && validation.errors.password ? (
                                                <Form.Control.Feedback type="invalid">
                                                    {validation.errors.password}
                                                </Form.Control.Feedback>
                                            ) : null}
                                        </InputGroup>
                                    </Form.Group>

                                    <div className="mt-4">
                                        <Button
                                            className="btn btn-primary w-100"
                                            type="submit"
                                            disabled={loader}
                                        >
                                            {loader && <Spinner size="sm" animation="border" />} Sign Up
                                        </Button>
                                    </div>
                                </Form>

                                <div className="mt-4 text-center">
                                    <p className="mb-0">
                                        Already have an account?{' '}
                                        <Link to={process.env.PUBLIC_URL + "/login"} className="fw-semibold text-primary text-decoration-underline">
                                            Signin
                                        </Link>{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </ParticlesAuth>
    );
};

export default Register;
