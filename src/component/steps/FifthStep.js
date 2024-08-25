import React from 'react';
import { FieldArray } from 'formik';
import { Box, Button, Grid, IconButton, Typography, FormHelperText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import apiEndPoint from '../../utilis/adminapi';

const FifthStep = ({ setFieldValue, values, touched, errors }) => {
  const handleImageChange = async (event, type) => {
    try {
      const file = event.target.files[0];
      console.log("file", file)
      let apiImageRes = await apiEndPoint.Common.uploadFile('file', file)
      console.log("apiImageRes images", apiImageRes?.data?.file_url)
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    const files = Array.from(event.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setFieldValue(type, [...values[type], ...urls]);
  };





  const handleRemoveImage = (index, type) => {
    setFieldValue(type, values[type].filter((_, i) => i !== index));
  };

  const renderImageSection = (label, name) => (
    <FieldArray name={name}>
      {() => (
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>{label}</Typography>
          <Button variant="contained" component="label" sx={{ mb: 2 }}>
            Upload {label}
            <input
              type="file"
              hidden
              accept="image/*"
              multiple
              onChange={(e) => handleImageChange(e, name)}
            />
          </Button>
          {touched[name] && errors[name] && (
            <FormHelperText error>{errors[name]}</FormHelperText>
          )}
          <Grid container spacing={2}>
            {values[name].map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} position="relative">
                <img
                  src={image}
                  alt={`${label} Preview ${index + 1}`}
                  style={{ width: '100%', height: '100px', objectFit: 'cover' }}
                />
                <IconButton
                  size="small"
                  sx={{ position: 'absolute', top: 0, right: 0, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  onClick={() => handleRemoveImage(index, name)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </FieldArray>
  );

  return (
    <div>
      {renderImageSection('Main Images', 'main_images')}
      {renderImageSection('Floor Images', 'floorImages')}
      {renderImageSection('Garage Images', 'garageImages')}
    </div>
  );
};

export default FifthStep;
