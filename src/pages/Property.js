import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import PropertyCard from '../component/PropertyCard';
import apiEndPoint from '../utilis/api';
import imageUrl from "../assets/property 1.jpeg";

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
  const [state, setState] = useState({})

  const getPropertyApi = async () => {
    try {
      let apiRes = await apiEndPoint.Property.listing()
      setState(apiRes)
    } catch (error) {
      console.log("error get", error)
    }
  }

  console.log("state", state.data)
  useEffect(() => {
    getPropertyApi();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {Array.isArray(state?.data) && state?.data?.length > 0 ?
          state?.data?.map((res, index) => (
            <Grid item xs={12} sm={6} md={4} key={res?._id}>
              <PropertyCard
                title={res?.name}
                price={res?.price}
                image={imageUrl}
                id={res?._id}
              />
            </Grid>
          ))
          : <p className='text-center'>No Property Added</p>
        }
      </Grid>
    </Box>
  );
};

export default PropertyPage;
