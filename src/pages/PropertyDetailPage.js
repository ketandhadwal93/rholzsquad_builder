import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Divider, Box, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import apiEndPoint from '../utilis/api';
import {
  plan_style_select_data, 
  plan_type_Select_data, 
  garage_type_Select_data,
  garage_location_Select_data,
  bed_bath_options_Select_data,
  kitchen_dining_Select_data,
  laundry_location_Select_data,
  additional_rooms_Select_data,
  outdoor_features_Select_data,
  foundation_Select_data,
  special_features_Select_data,
  exterior_walls_Select_data,
  collections_Select_data,
  lot_features_Select_data
} from '../constants/constant';

const PropertyDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [state, setState] = useState({});

  const getPropertyApi = async () => {
    try {
      const apiRes = await apiEndPoint.Property.getById(id);
      setState(apiRes);
    } catch (error) {
      console.log("Error fetching property data", error);
    }
  };

  useEffect(() => {
    getPropertyApi();
  }, [id]);

  const gotoEdit = () => {
    navigate(`/property/edit/${id}`);
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

  const renderDetail = (label, value, constants) => (
    <Grid item xs={12} sm={6}>
      <Typography variant="subtitle1" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="body1">
        {constants ? constants.find(item => item.value === value)?.label || "N/A" : value || "N/A"}
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
            {renderDetail("Plan Style", plan_style, plan_style_select_data)}
            {renderDetail("Plan Type", plan_type, plan_type_Select_data)}
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
            {renderDetail("Garage Type", garage_type, garage_type_Select_data)}
            {renderDetail("Garage Location", garage_location, garage_location_Select_data)}
            {renderDetail("Bed and Bath Options", bed_bath_options, bed_bath_options_Select_data)}
            {renderDetail("Kitchen and Dining", kitchen_dinning, kitchen_dining_Select_data)}
            {renderDetail("Laundry Location", laundry_location, laundry_location_Select_data)}
            {renderDetail("Additional Rooms", additional_rooms, additional_rooms_Select_data)}
            {renderDetail("Outdoor Features", outdoor_features, outdoor_features_Select_data)}
            {renderDetail("Foundation", foundation, foundation_Select_data)}
            {renderDetail("Special Features", special_features, special_features_Select_data)}

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom mt={2}>
                Lot Features and Collections
              </Typography>
            </Grid>
            {renderDetail("Lot Features", lot_features, lot_features_Select_data)}
            {renderDetail("Collections", collections, collections_Select_data)}

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
