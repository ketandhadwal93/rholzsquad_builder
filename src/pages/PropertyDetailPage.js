import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Divider, Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import apiEndPoint from '../utilis/api';

const PropertyDetailPage = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [state, setState] = useState({});

  const getPropertyApi = async () => {
    try {
      let apiRes = await apiEndPoint.Property.getById(id);
      setState(apiRes);
    } catch (error) {
      console.log("Error fetching property data", error);
    }
  };

  useEffect(() => {
    getPropertyApi();
  }, []);






  const gotoEdit = () => {
    navigate(`/property/edit/${id}`); // Replace with dynamic property ID if needed
  };


  if (!state.data) {
    return <Typography>Loading...</Typography>;
  }

  const { 
    name, plan_style, plan_type, sq_ft, floors, beds, baths, cars, story, no_of_vehicles,
    footprint_width, footprint_depth, footprint_height, garage_type, garage_location,
    bed_bath_options, kitchen_dinning, laundry_location, additional_rooms, outdoor_features,
    foundation, special_features, lot_features, collections, price, initial_discount 
  } = state.data;

  const renderDetail = (label, value) => (
    <Grid item xs={12} sm={6}>
      <Typography variant="subtitle1" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="body1">
        {value || "N/A"}
      </Typography>
    </Grid>
  );

  return (
    <Container maxWidth="md">
      <Box display="flex" alignItems="center" mb={3}>
        <Typography variant="h4" gutterBottom>
          Property Details
        </Typography>
        <Button variant="contained" color="primary" style={{ marginLeft: 'auto' }} onClick={gotoEdit}>
          Edit
        </Button>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {name || "Property Name"}
          </Typography>
          <Divider />

          <Grid container spacing={2} mt={2}>
            {renderDetail("Plan Style", plan_style)}
            {renderDetail("Plan Type", plan_type)}
            {renderDetail("Square Feet", sq_ft)}
            {renderDetail("Floors", floors)}
            {renderDetail("Beds", beds)}
            {renderDetail("Baths", baths)}
            {renderDetail("Cars", cars)}
            {renderDetail("Story", story)}
            {renderDetail("Number of Vehicles", no_of_vehicles)}

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom mt={2}>
                Dimensions and Features
              </Typography>
            </Grid>
            {renderDetail("Footprint Width", footprint_width)}
            {renderDetail("Footprint Depth", footprint_depth)}
            {renderDetail("Footprint Height", footprint_height)}
            {renderDetail("Garage Type", garage_type)}
            {renderDetail("Garage Location", garage_location)}
            {renderDetail("Bed and Bath Options", bed_bath_options)}
            {renderDetail("Kitchen and Dining", kitchen_dinning)}
            {renderDetail("Laundry Location", laundry_location)}
            {renderDetail("Additional Rooms", additional_rooms)}
            {renderDetail("Outdoor Features", outdoor_features)}
            {renderDetail("Foundation", foundation)}
            {renderDetail("Special Features", special_features)}

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom mt={2}>
                Lot Features and Collections
              </Typography>
            </Grid>
            {renderDetail("Lot Features", lot_features)}
            {renderDetail("Collections", collections)}

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom mt={2}>
                Pricing and Discounts
              </Typography>
            </Grid>
            {renderDetail("Price", price)}
            {renderDetail("Initial Discount", initial_discount)}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PropertyDetailPage;
