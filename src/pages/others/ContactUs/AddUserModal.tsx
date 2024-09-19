// import React from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import Dropzone from 'react-dropzone';
// import { PatternFormat } from 'react-number-format';
// import { useFormik } from 'formik';

// const AddAgentModal = ({ show, handleClose, handleAcceptfiles, formik, selectfeils, setSelectfeils, editagent }: any) => {
//     return (
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title as="h5">{editagent ? "Edit Agent" : "Add Agent"}</Modal.Title>
//             </Modal.Header>
//             <Form className="tablelist-form" autoComplete="off" onSubmit={formik.handleSubmit}>
//                 <Modal.Body>
//                     <div className="mb-3">
//                         <Form.Label>Agent Images<span className="text-danger">*</span></Form.Label>
//                         <Dropzone
//                             onDrop={(acceptfiles: any) => {
//                                 handleAcceptfiles(acceptfiles);
//                                 formik.setFieldValue("img", acceptfiles[0]);
//                             }}
//                             name="img"
//                             value={formik.values.img || ''}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             isInvalid={!!formik.errors.img}
//                         >
//                             {({ getRootProps }: any) => (
//                                 <div className="sellers-dropzone text-center dz-clickable" style={{ minHeight: "180px" }}>
//                                     <div className="dz-message needsclick" {...getRootProps()}>
//                                         <div className="mb-3">
//                                             <i className="display-4 text-muted ri-upload-cloud-2-fill" />
//                                         </div>
//                                         <h5>Drop files here or click to upload.</h5>
//                                     </div>
//                                 </div>
//                             )}
//                         </Dropzone>
//                         {formik.errors.img && formik.touched.img ? (
//                             <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.img}</Form.Control.Feedback>
//                         ) : null}
//                         <ul className="list-unstyled mb-0" id="dropzone-preview">
//                             {(selectfeils || []).map((file: any, index: number) => (
//                                 <li className="mt-2 dz-image-preview" key={index}>
//                                     <div className="border rounded">
//                                         <div className="d-flex flex-wrap gap-2 p-2">
//                                             <div className="flex-shrink-0 me-3">
//                                                 <div className="avatar-sm bg-light rounded p-2">
//                                                     <img data-dz-thumbnail="" className="img-fluid rounded d-block" src={file.priview} alt={file.name} />
//                                                 </div>
//                                             </div>
//                                             <div className="flex-grow-1">
//                                                 <div className="pt-1">
//                                                     <h5 className="fs-md mb-1" data-dz-name>{file.path}</h5>
//                                                     <p className="fs-sm text-muted mb-0" data-dz-size=""><strong>{file?.size?.toString()?.charAt(0)}</strong> KB</p>
//                                                     <strong className="error text-danger" data-dz-errormessage></strong>
//                                                 </div>
//                                             </div>
//                                             <div className="flex-shrink-0 ms-3">
//                                                 <Button variant="danger" size="sm" onClick={() => {
//                                                     const newImages = [...selectfeils];
//                                                     newImages.splice(index, 1);
//                                                     setSelectfeils(newImages);
//                                                 }}>Delete</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="mb-3">
//                         <Form.Label htmlFor="agent-name-input">Agent Name<span className="text-danger">*</span></Form.Label>
//                         <Form.Control
//                             type="text"
//                             id="name"
//                             name="name"
//                             placeholder="Enter agent name"
//                             value={formik.values.name}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             isInvalid={!!formik.errors.name}
//                         />
//                         {formik.errors.name && formik.touched.name ? (
//                             <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
//                         ) : null}
//                     </div>
//                     <div className="mb-3">
//                         <Form.Label htmlFor="email-input" >Email<span className="text-danger">*</span></Form.Label>
//                         <Form.Control
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Enter email"
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             isInvalid={!!formik.errors.email}
//                         />
//                         {formik.errors.email && formik.touched.email ? (
//                             <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
//                         ) : null}
//                     </div>
//                     <div className="mb-3">
//                         <Form.Label htmlFor="contact-input" >Contact Number<span className="text-danger">*</span></Form.Label>
//                         <PatternFormat
//                             className="form-control"
//                             displayType="input"
//                             id="contact"
//                             placeholder="Enter contact no"
//                             name="contact"
//                             format="(##) #####-#####"
//                             value={formik.values.contact}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                         />
//                         {formik.errors.contact && formik.touched.contact ? (
//                             <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.contact}</Form.Control.Feedback>
//                         ) : null}
//                     </div>
//                     <div className="mb-3">
//                         <Form.Label htmlFor="status-type-input">Status<span className="text-danger">*</span></Form.Label>
//                         <Form.Select
//                             className="form-control"
//                             id="status-type-input"
//                             name="status"
//                             value={formik.values.status}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             isInvalid={!!formik.errors.status}
//                         >
//                             <option value="">Select Status</option>
//                             <option value="Active">Active</option>
//                             <option value="Unactive">Unactive</option>
//                         </Form.Select>
//                         {formik.errors.status && formik.touched.status ? (
//                             <Form.Control.Feedback type="invalid">{formik.errors.status}</Form.Control.Feedback>
//                         ) : null}
//                     </div>

//                     <div className="mb-3">
//                         <Form.Label htmlFor="address-input">Address<span className="text-danger">*</span></Form.Label>
//                         <Form.Control
//                             as="textarea"
//                             rows={3}
//                             className="form-control"
//                             id="addressinput"
//                             name="location"
//                             placeholder="Enter address"
//                             value={formik.values.location}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             isInvalid={!!formik.errors.location}
//                         />
//                         {formik.errors.location && formik.touched.location ? (
//                             <Form.Control.Feedback type="invalid">{formik.errors.location}</Form.Control.Feedback>
//                         ) : null}
//                     </div>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" className="btn btn-ghost-danger" onClick={handleClose}><i className="bi bi-x-lg align-baseline me-1"></i> Close</Button>
//                     <Button type="submit" variant="primary">{editagent ? "Edit" : "Add"}</Button>
//                 </Modal.Footer>
//             </Form>
//         </Modal>
//     );
// };

// export default AddAgentModal;


    import React,{useState} from 'react';
    import { Modal, Button, Form } from 'react-bootstrap';
    import Dropzone, { DropzoneState } from 'react-dropzone'; // Import DropzoneState for typing
    import { useFormik } from 'formik';
    import * as Yup from 'yup';
    import ApiService from 'serviceArchitecture/services/apiservice';

    const AddUserModal = ({ show, handleClose ,fetchDashboardData}: any) => {
        const [imagePreview, setImagePreview] = useState<string | null>(null);
        const [imageUploading, setImageUploading] = useState(false); // Track image upload status
        const [loading, setLoading] = useState<boolean>(false); // Loading state

    
        const formik = useFormik({
            initialValues: {
                name: '',
                email: '',
                password: '',
                country_code: '',
                phone_no: '',
                profile_pic: '',
                gender: '',
                dob: '',
            },
            validationSchema: Yup.object({
                name: Yup.string().required('Name is required'),
                email: Yup.string().email('Invalid email').required('Email is required'),
                password: Yup.string().required('Password is required'),
                country_code: Yup.string().required('Country code is required'),
                phone_no: Yup.number().required('Phone number is required'),
                profile_pic: Yup.mixed().required('Profile picture is required'),
                gender: Yup.string().required('Gender is required'),
                dob: Yup.date().required('Date of birth is required'),
            }),
            // onSubmit: async (values) => {
            //     try {
            //         const response = await ApiService.addBuilder(values);
            //         console.log('Builder added successfully', response);
            //         handleClose();
            //     } catch (error) {
            //         console.error('Error adding builder', error);
            //     }
            // },
            onSubmit: async (values) => {
                if (!values.profile_pic) {
                    console.error('Profile picture is required');
                    return;
                }
                setLoading(true); // Set loading to true when submission starts

                try {
                    // Upload image first
                    setImageUploading(true);
                    const formData = new FormData();
                    formData.append('file', values.profile_pic);
    
                    const uploadResponse = await ApiService.uploadImage(formData); // Upload image API call
                    const imageUrl = uploadResponse.data.file_url; // Adjust based on your API response
    
                    // Proceed with builder addition using the uploaded image URL
                    const builderData = { ...values, profile_pic: imageUrl };
                     await ApiService.addBuilder(builderData);
                      // Refresh the agent list
        if (fetchDashboardData) {
            fetchDashboardData();
          } // Reset the form and image preview
          formik.resetForm();
          setImagePreview(null);
                    handleClose();
                } catch (error) {
                    console.error('Error:', error);
                } finally {
                    setImageUploading(false);
                    setLoading(false); // Reset loading state

                }
            },
        });
        // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //     const file = e.target.files?.[0];
        //     if (file) {
        //         formik.setFieldValue('profile_pic', file);
        //         setImagePreview(URL.createObjectURL(file));
        //     }
        // };  
        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                setImagePreview(URL.createObjectURL(file)); // Preview image
                formik.setFieldValue('profile_pic', file); // Set the file in Formik
            }
        };
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Builder</Modal.Title>
                </Modal.Header>
                <Form onSubmit={formik.handleSubmit}>
                    <Modal.Body>
                    <div className="mb-3">
                        <Form.Label>Profile Picture<span className="text-danger">*</span></Form.Label>
                        <div className="dropzone text-center" style={{ minHeight: '180px', border: '2px dashed #ccc', padding: '20px' }}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                                id="profile_pic_input"
                            />
                            <label htmlFor="profile_pic_input" style={{ cursor: 'pointer' }}>
                            <div className="mb-3">
                                                <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                            </div>
                                <div className="text-center">
                                    <p>Click to upload image</p>
                                </div>
                            </label>
                            {imagePreview && (
                                <div style={{ marginTop: '10px' }}>
                                 
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                    />
                                </div>
                            )}
                        </div>
                        {formik.errors.profile_pic && formik.touched.profile_pic && (
                            <Form.Control.Feedback type="invalid">{formik.errors.profile_pic}</Form.Control.Feedback>
                        )}
                    </div>
                        <div className="mb-3">
                            <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.name}
                            />
                            {formik.errors.name && formik.touched.name ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.email}
                            />
                            {formik.errors.email && formik.touched.email ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.password}
                            />
                            {formik.errors.password && formik.touched.password ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label>Country Code<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="country_code"
                                name="country_code"
                                placeholder="Enter country code"
                                value={formik.values.country_code}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.country_code}
                            />
                            {formik.errors.country_code && formik.touched.country_code ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.country_code}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label>Phone Number<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="phone_no"
                                name="phone_no"
                                placeholder="Enter phone number"
                                value={formik.values.phone_no}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.phone_no}
                            />
                            {formik.errors.phone_no && formik.touched.phone_no ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.phone_no}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        {/* <div className="mb-3">
                            <Form.Label>Profile Picture<span className="text-danger">*</span></Form.Label>
                            <Dropzone
                                onDrop={(acceptedFiles: any) => {
                                    handleAcceptfiles(acceptedFiles);
                                    formik.setFieldValue("profile_pic", acceptedFiles[0]);
                                }}
                            >
                                {({ getRootProps }) => (
                                    <div className="dropzone" {...getRootProps()}>
                                        <div className="text-center">
                                            <p>Drag and drop a profile picture, or click to select one</p>
                                        </div>
                                    </div>
                                )}
                            </Dropzone>
                            {formik.errors.profile_pic && formik.touched.profile_pic ? (
                                <Form.Control.Feedback type="invalid" className="d-block">{formik.errors.profile_pic}</Form.Control.Feedback>
                            ) : null}
                        </div> */}
                    
                        <div className="mb-3">
                            <Form.Label>Gender<span className="text-danger">*</span></Form.Label>
                            <Form.Select
                                id="gender"
                                name="gender"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.gender}
                            >
                                <option value="">Select Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Others</option>
                            </Form.Select>
                            {formik.errors.gender && formik.touched.gender ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.gender}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label>Date of Birth (DOB)<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="date"
                                id="dob"
                                name="dob"
                                placeholder="Enter DOB (YYYY-MM-DD)"
                                value={formik.values.dob}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.dob}
                            />
                            {formik.errors.dob && formik.touched.dob ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.dob}</Form.Control.Feedback>
                            ) : null}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button type="submit" variant="primary">

                        {loading ? 'Adding User...' : 'Add User'}</Button>
                        </Modal.Footer>
                </Form>
            </Modal>
        );
    };

    export default AddUserModal;
