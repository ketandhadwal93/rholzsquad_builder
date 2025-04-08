// import React from 'react';
// import { ErrorMessage } from 'formik';
// import { Grid, TextField, FormControl } from '@mui/material';

// const FourthStep = ({ setFieldValue, errors, touched, values }) => {
//   return (
//     <>
//       <Grid item xs={12} sm={6}>
//         <FormControl fullWidth margin="normal">
//           <TextField
//             name="price"
//             label="Price"
//             variant="outlined"
//             value={values.price}
//             onChange={(e) => setFieldValue('price', e.target.value)}
//             error={touched.price && Boolean(errors.price)}
//             helperText={<ErrorMessage name="price" />}
//           />
//         </FormControl>
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <FormControl fullWidth margin="normal">
//           <TextField
//             name="initial_discount"
//             label="Initial Discount"
//             variant="outlined"
//             value={values.initial_discount}
//             onChange={(e) => setFieldValue('initial_discount', e.target.value)}
//             error={touched.initial_discount && Boolean(errors.initial_discount)}
//             helperText={<ErrorMessage name="initial_discount" />}
//           />
//         </FormControl>
//       </Grid>
//     </>
//   );
// };

// export default FourthStep;


import React, { useEffect } from "react";
import { ErrorMessage } from "formik";
import { Grid, TextField, FormControl, Typography } from "@mui/material";
// import DOMPurify from "dompurify";

const FourthStep = ({ setFieldValue, errors, touched, values }) => {
  // Helper function to convert text area input to an array for preview
  const getContentArray = (text) =>
    text ? text.split("\n").filter((item) => item.trim() !== "") : [];
  useEffect(() => {
    if (Array.isArray(values.plan_details)) {
      setFieldValue("plan_details", values.plan_details.join("\n"));
    }
    if (Array.isArray(values.included)) {
      setFieldValue("included", values.included.join("\n"));
    }
    if (Array.isArray(values.not_included)) {
      setFieldValue("not_included", values.not_included.join("\n"));
    }
  }, [values.plan_details, values.included, values.not_included, setFieldValue]);

  return (
    <>
      {/* Existing Fields: Price and Initial Discount */}
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <TextField
            name="price"
            label="Price"
            variant="outlined"
            value={values.price}
            onChange={(e) => setFieldValue("price", e.target.value)}
            error={touched.price && Boolean(errors.price)}
            helperText={<ErrorMessage name="price" />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth margin="normal">
          <TextField
            name="initial_discount"
            label="Initial Discount"
            variant="outlined"
            value={values.initial_discount}
            onChange={(e) => setFieldValue("initial_discount", e.target.value)}
            error={touched.initial_discount && Boolean(errors.initial_discount)}
            helperText={<ErrorMessage name="initial_discount" />}
          />
        </FormControl>
      </Grid>

      {/* New Fields: Plan Details, What's Included, What's Not Included */}
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Plan Details
        </Typography>
        <FormControl fullWidth margin="normal">
          <TextField
            name="plan_details"
            label="Plan Details"
            variant="outlined"
            multiline
            rows={4}
            value={values.plan_details}
            onChange={(e) => setFieldValue("plan_details", e.target.value)}
            error={touched.plan_details && Boolean(errors.plan_details)}
            helperText={
              <>
                <ErrorMessage name="plan_details" />
                <Typography variant="caption" color="textSecondary">
                  Enter each bullet point on a new line. Use &lt;strong&gt; for bold text (e.g., &lt;strong&gt;Bold Text&lt;/strong&gt;).
                </Typography>
              </>
            }
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          What’s Included
        </Typography>
        <FormControl fullWidth margin="normal">
          <TextField
            name="whats_included"
            label="What’s Included"
            variant="outlined"
            multiline
            rows={4}
            value={values.included}
            onChange={(e) => setFieldValue("included", e.target.value)}
            error={touched.whats_included && Boolean(errors.whats_included)}
            helperText={
              <>
                <ErrorMessage name="whats_included" />
                <Typography variant="caption" color="textSecondary">
                  Enter each bullet point on a new line. Use &lt;strong&gt; for bold text (e.g., &lt;strong&gt;Bold Text&lt;/strong&gt;).
                </Typography>
              </>
            }
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          What’s Not Included
        </Typography>
        <FormControl fullWidth margin="normal">
          <TextField
            name="whats_not_included"
            label="What’s Not Included"
            variant="outlined"
            multiline
            rows={4}
            value={values.not_included}
            onChange={(e) => setFieldValue("not_included", e.target.value)}
            error={
              touched.whats_not_included && Boolean(errors.whats_not_included)
            }
            helperText={
              <>
                <ErrorMessage name="whats_not_included" />
                <Typography variant="caption" color="textSecondary">
                  Enter each bullet point on a new line. Use &lt;strong&gt; for bold text (e.g., &lt;strong&gt;Bold Text&lt;/strong&gt;).
                </Typography>
              </>
            }
          />
        </FormControl>
      </Grid>

      {/* Preview Section */}
      {/* <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Preview
        </Typography>
        <div>
          <Typography variant="h6">Plan Details</Typography>
          <ul>
            {getContentArray(values.plan_details).map((bullet, index) => (
              <li
                key={index}
              />
            ))}
          </ul>
        </div>
        <div>
          <Typography variant="h6">What’s Included</Typography>
          <ul>
            {getContentArray(values.whats_included).map((bullet, index) => (
              <li
                key={index}
              />
            ))}
          </ul>
        </div>
        <div>
          <Typography variant="h6">What’s Not Included</Typography>
          <ul>
  {getContentArray(values.whats_not_included).map((bullet, index) => (
    <li key={index}>{bullet}</li>
  ))}
</ul>

        </div>
      </Grid> */}
    </>
  );
};

export default FourthStep;