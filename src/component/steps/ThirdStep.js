import React from 'react';
import { TextField } from '@mui/material';
import { Field } from 'formik';

const ThirdStep = () => {
    return (
        <div>
            <Field
                as={TextField}
                name="cars"
                label="Cars"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Field
                as={TextField}
                name="price"
                label="Price"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Field
                as={TextField}
                name="initial_discount"
                label="Initial Discount"
                variant="outlined"
                fullWidth
                margin="normal"
            />
        </div>
    );
};

export default ThirdStep;
