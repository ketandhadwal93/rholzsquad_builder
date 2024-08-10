import React from 'react';
import { TextField } from '@mui/material';
import { Field } from 'formik';

const SecondStep = () => {
    return (
        <div>
            <Field
                as={TextField}
                name="sq_ft"
                label="Square Footage"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Field
                as={TextField}
                name="floors"
                label="Floors"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Field
                as={TextField}
                name="beds"
                label="Beds"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Field
                as={TextField}
                name="baths"
                label="Baths"
                variant="outlined"
                fullWidth
                margin="normal"
            />
        </div>
    );
};

export default SecondStep;
