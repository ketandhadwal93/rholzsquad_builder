// import React from 'react';
// import { Card, Form, Button, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import ParticlesAuth from './ParticlesAuth';


// const PasswordCreate = () => {

//     document.title = " Create New Password | Steex Admin & Dashboard Template";

//     return (
//         <ParticlesAuth>
//             <React.Fragment>
//                 <Col xxl={6} className="mx-auto">
//                     <Card className=" mb-0 border-0 shadow-none mb-0">
//                         <Card.Body className=" p-sm-5 m-lg-4">
//                             <div className="text-center">
//                                 <h5 className="fs-3xl">Create new password</h5>
//                                 <p className="text-muted mb-5">Your new password must be different from previous used password.</p>
//                             </div>

//                             <div className="p-2">
//                                 <Form action="#">
//                                     <div className="mb-3">
//                                         <Form.Label htmlFor="password-input">Password</Form.Label>
//                                         <div className="position-relative auth-pass-inputgroup">
//                                             <Form.Control type="password" className="pe-5 password-input" placeholder="Enter password" id="password-input" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
//                                             <Button variant="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
//                                         </div>
//                                         <div id="passwordInput" className="form-text">Your password must be 8-20 characters long.</div>
//                                     </div>

//                                     <div className="mb-3">
//                                         <Form.Label htmlFor="confirm-password-input">Confirm Password</Form.Label>
//                                         <div className="position-relative auth-pass-inputgroup mb-3">
//                                             <Form.Control type="password" className="pe-5 password-input" placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="confirm-password-input" required />
//                                             <Button variant="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></Button>
//                                         </div>
//                                     </div>

//                                     <div id="password-contain" className="p-3 bg-light mb-2 rounded">
//                                         <h5 className="fs-sm">Password must contain:</h5>
//                                         <p id="pass-length" className="invalid fs-xs mb-2">Minimum <b>8 characters</b></p>
//                                         <p id="pass-lower" className="invalid fs-xs mb-2">At <b>lowercase</b> letter (a-z)</p>
//                                         <p id="pass-upper" className="invalid fs-xs mb-2">At least <b>uppercase</b> letter (A-Z)</p>
//                                         <p id="pass-number" className="invalid fs-xs mb-0">A least <b>number</b> (0-9)</p>
//                                     </div>

//                                     <Form.Check className="form-check-primary">
//                                         <Form.Check.Input type="checkbox" value="" id="auth-remember-check" />
//                                         <Form.Check.Label htmlFor="auth-remember-check">Remember me</Form.Check.Label>
//                                     </Form.Check>

//                                     <div className="mt-4">
//                                         <Button variant='primary' className="w-100" type="submit">Reset Password</Button>
//                                     </div>
//                                 </Form>
//                             </div>
//                             <div className="mt-4 text-center">
//                                 <p className="mb-0">Wait, I remember my password... <Link to={process.env.PUBLIC_URL + "/auth-signin"} className="fw-semibold text-primary text-decoration-underline"> Click here </Link> </p>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </React.Fragment>
//         </ParticlesAuth>
//     )
// }

// export default PasswordCreate;







import React, { useState } from 'react';
import { Card, Form, Button, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ParticlesAuth from './ParticlesAuth';
import authService from '../../serviceArchitecture/services/authservice'; // Import your AuthService

const PasswordCreate = () => {
  document.title = "Create New Password | Steex Admin & Dashboard Template";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const userId = "USER_ID"; // Replace with the actual user ID you have
      const response = await authService.resetPassword(userId, password);

      setSuccessMessage('Password has been reset successfully');
      setErrorMessage(null);

      // Redirect to login page after successful reset
      setTimeout(() => {
        navigate('/auth-signin');
      }, 2000);

    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to reset password');
      setSuccessMessage(null);
    }
  };

  return (
    <ParticlesAuth>
      <React.Fragment>
        <Col xxl={6} className="mx-auto">
          <Card className=" mb-0 border-0 shadow-none mb-0">
            <Card.Body className=" p-sm-5 m-lg-4">
              <div className="text-center">
                <h5 className="fs-3xl">Create new password</h5>
                <p className="text-muted mb-5">Your new password must be different from previous used passwords.</p>
              </div>

              <div className="p-2">
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                {successMessage && <Alert variant="success">{successMessage}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <Form.Label htmlFor="password-input">Password</Form.Label>
                    <div className="position-relative auth-pass-inputgroup">
                      <Form.Control
                        type="password"
                        className="pe-5 password-input"
                        placeholder="Enter password"
                        id="password-input"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div id="passwordInput" className="form-text">
                      Your password must be 8-20 characters long and it must contain capital letters and special characters.
                    </div>
                  </div>

                  <div className="mb-3">
                    <Form.Label htmlFor="confirm-password-input">Confirm Password</Form.Label>
                    <div className="position-relative auth-pass-inputgroup mb-3">
                      <Form.Control
                        type="password"
                        className="pe-5 password-input"
                        placeholder="Confirm password"
                        id="confirm-password-input"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <Form.Check className="form-check-primary">
                    <Form.Check.Input type="checkbox" value="" id="auth-remember-check" />
                    <Form.Check.Label htmlFor="auth-remember-check">Remember me</Form.Check.Label>
                  </Form.Check> */}

                  <div className="mt-4">
                    <Button variant='primary' className="w-100" type="submit">
                      Reset Password
                    </Button>
                  </div>
                </Form>
              </div>
              <div className="mt-4 text-center">
                <p className="mb-0">
                  Wait, I remember my password...
                  <Link to={process.env.PUBLIC_URL + "/auth-signin"} className="fw-semibold text-primary text-decoration-underline">
                    Click here
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </React.Fragment>
    </ParticlesAuth>
  );
};

export default PasswordCreate;
