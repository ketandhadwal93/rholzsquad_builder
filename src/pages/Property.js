import React from 'react';
import { Grid, Box } from '@mui/material';
import PropertyCard from '../component/PropertyCard';

const properties = [
  {
    title: 'Beautiful Beach House',
    description: 'A beautiful beach house with stunning ocean views.',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Modern Apartment',
    description: 'A modern apartment in the heart of the city views.',
    image: 'https://picsum.photos/200/300',
  },
  {
    title: 'Cozy Mountain Cabin',
    description: 'A cozy cabin nestled in the mountains the city views.',
    image: 'https://picsum.photos/200/300',
  },
  // Add more properties as needed
];

const PropertyPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {properties.map((property, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PropertyCard
              title={property.title}
              description={property.description}
              image={property.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertyPage;
