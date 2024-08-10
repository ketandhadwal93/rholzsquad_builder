import React from 'react';
import { TextField } from '@mui/material';
import { Field } from 'formik';

const FirstStep = () => {
    return (
        <div>
            <Field
                as={TextField}
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Field
                as={TextField}
                name="plan_style"
                label="Plan Style"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Field
                as={TextField}
                name="plan_type"
                label="Plan Type"
                variant="outlined"
                fullWidth
                margin="normal"
            />
        </div>
    );
};

export default FirstStep;
