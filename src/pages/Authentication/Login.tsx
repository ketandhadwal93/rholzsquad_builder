import React, { useEffect, useState } from 'react';
import { Card, Col, Button, Form, Alert, Spinner } from 'react-bootstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { Link } from "react-router-dom";
import withRouter from 'Common/withRouter';
import * as Yup from "yup";
import { useFormik } from "formik";

// Import AuthService
import AuthService from '../../serviceArchitecture/services/authservice';
// import toast  from 'react-toastify';
import { toast } from 'react-toastify';

const Signin = (props: any) => {
    const [userLogin, setUserLogin] = useState<any>([]);
    const [passwordShow, setPasswordShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');

    useEffect(() => {
        if (userLogin && userLogin.email) {
            setUserLogin({
                email: userLogin.email,
                password: userLogin.password
            });
        }
    }, [userLogin]);

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: userLogin.email || "john@yopmail.com" || '',
            password: userLogin.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                // Use AuthService for login
                const response = await AuthService.login(values.email, values.password);
                console.log("Login successful", response);
                if(response.token !== undefined){

                    localStorage.setItem("authUser", JSON.stringify(response.token));
                }
                toast.info(response.message);
                // Navigate to dashboard or another page after successful login
                // props.router.navigate("/dashboard-real-estate");
                setTimeout(() => {
                setLoading(false);
                    
                    props.router.navigate("/dashboard-real-estate");
                  }, 1500);
            } catch (error: any) {
                setErrorMsg(error.message || "Login failed");
                setLoading(false);

            } finally {
            }
        }
    });

    // const socialResponse = async (type: any) => {
    //     // For social login, you can call the appropriate AuthService method
    //     try {
    //         setLoading(true);
    //         // Call the social login method (this needs to be implemented in AuthService)
    //         const data = await AuthService.socialLogin(type);
    //         console.log("Social login successful", data);
    //         props.router.navigate("/dashboard");
    //     } catch (error: any) {
    //         setErrorMsg(error.message || "Social login failed");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    useEffect(() => {
        if (errorMsg) {
            setTimeout(() => {
                setErrorMsg('');
            }, 3000);
        }
    }, [errorMsg]);

    document.title = "Login | Steex Admin & Dashboard Template";
    return (
        <ParticlesAuth>
            <React.Fragment>
                <Col xxl="6" className="mx-auto">
                    <Card className="mb-0 border-0 shadow-none mb-0">
                        <Card.Body className="p-sm-5 m-lg-4">
                            <div className="text-center mt-5">
                                <h5 className="fs-3xl">Welcome Back</h5>
                                <p className="text-muted">Sign in to continue to Rholzsquad Builder.</p>
                            </div>
                            <div className="p-2 mt-5">
                                {errorMsg ? (<Alert variant="danger">{errorMsg}</Alert>) : null}

                                <Form action="#" onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}>

                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Form.Label>Username <span className="text-danger">*</span></Form.Label>
                                        <div className="position-relative">
                                            <Form.Control type="email" name="email" className="form-control password-input" placeholder="Enter username" required
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.email || ""}
                                                isInvalid={validation.touched.email && !!validation.errors.email}
                                            />
                                        </div>
                                        {validation.touched.email && validation.errors.email ? (
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        ) : null}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <div className="float-end">
                                            <Link to={"/forgot-password"} className="text-muted">Forgot password?</Link>
                                        </div>
                                        <Form.Label>Password <span className="text-danger">*</span></Form.Label>
                                        <div className="position-relative auth-pass-inputgroup mb-3">
                                            <Form.Control type={passwordShow ? "text" : "password"} className="form-control pe-5 password-input " placeholder="Enter password" required
                                                name="password"
                                                value={validation.values.password || ""}
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                isInvalid={validation.touched.password && !!validation.errors.password}
                                            />
                                            {validation.touched.password && validation.errors.password ? (
                                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                            ) : null}
                                            <Button variant="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}>
                                                <i className="ri-eye-fill align-middle"></i>
                                            </Button>
                                        </div>
                                    </Form.Group>

                                    {/* <Form.Group controlId="formRememberMe">
                                        <Form.Check type="checkbox" label="Remember me" id="auth-remember-check" />
                                    </Form.Group> */}

                                    <div className="mt-4">
                                        <Button className="btn btn-primary w-100" type="submit" disabled={loading}>
                                            {loading && <Spinner size='sm' />} {" "}Sign In
                                        </Button>
                                    </div>

                                    {/* <div className="mt-4 pt-2 text-center">
                                        <div className="signin-other-title position-relative">
                                            <h5 className="fs-sm mb-4 title">Sign In with</h5>
                                        </div>
                                        <div className="pt-2 hstack gap-2 justify-content-center">
                                            <button type="button" className="btn btn-subtle-primary btn-icon" onClick={e => { e.preventDefault(); socialResponse("facebook"); }}><i className="ri-facebook-fill fs-lg"></i></button>
                                            <button type="button" className="btn btn-subtle-danger btn-icon" onClick={e => { e.preventDefault(); socialResponse("google"); }}><i className="ri-google-fill fs-lg"></i></button>
                                            <button type="button" className="btn btn-subtle-dark btn-icon"><i className="ri-github-fill fs-lg"></i></button>
                                            <button type="button" className="btn btn-subtle-info btn-icon"><i className="ri-twitter-fill fs-lg"></i></button>
                                        </div>
                                    </div> */}
                                </Form>

                                <div className="text-center mt-5">
                                    
                                    <p className="mb-0">Don't have an account ? <Link to={"/register"} className="fw-semibold text-secondary text-decoration-underline"> SignUp</Link> </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </React.Fragment>
        </ParticlesAuth>
    );
};

export default withRouter(Signin);
