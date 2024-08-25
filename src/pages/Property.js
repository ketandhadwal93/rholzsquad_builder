import React, { useEffect, useState } from 'react';
import { Grid, Box, CircularProgress, Typography } from '@mui/material';
import PropertyCard from '../component/PropertyCard';
import apiEndPoint from '../utilis/api';
import imageUrl from "../assets/property 1.jpeg";

const PropertyPage = () => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  const getPropertyApi = async () => {
    try {
      let apiRes = await apiEndPoint.Property.listing();
      setState(apiRes);
    } catch (error) {
      console.log("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPropertyApi();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {Array.isArray(state?.data) && state?.data?.length > 0 ? (
            state?.data?.map((res) => (
              <Grid item xs={12} sm={6} md={4} key={res?._id}>
                <PropertyCard
                  title={res?.name}
                  price={res?.price}
                  image={res?.main_images[0]}
                  id={res?._id}
                />
              </Grid>
            ))
          ) : (
            <Box display="flex" justifyContent="center" alignItems="center" height="80vh" width="100%">
              <Typography variant="h6" color="textSecondary">
                No Property Added
              </Typography>
            </Box>
          )}
        </Grid>
      )}
    </Box>
  );
};

export default PropertyPage;
