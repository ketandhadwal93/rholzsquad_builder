import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import apiEndPoint from '../utilis/api';
import adminEndPoint from '../utilis/adminapi';

const ImageUploader = ({ images, setImages }) => {

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    console.log("file", file)
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages((prevImages) => [...prevImages, imageUrl]);
      const formData = new FormData();
      formData.append('image', file);
      try {
        let apiImageRes = await apiEndPoint.Common.uploadFile('file', file)
        console.log("images apiRes", apiImageRes)
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };


  return (
    <Box>
      <Button variant="contained" component="label">
        Upload Image
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
      </Button>

      <Grid container spacing={2} mt={2}>
        {images.map((image, index) => (
          <Grid item key={index} position="relative">
            <img
              src={image}
              alt={`Uploaded Preview ${index + 1}`}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <IconButton
              size="small"
              style={{ position: 'absolute', top: 0, right: 0, color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              onClick={() => handleRemoveImage(index)}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageUploader;
