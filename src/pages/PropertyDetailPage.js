import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Divider, Box, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import apiEndPoint from '../utilis/api';

const PropertyDetailPage = () => {
    const { id } = useParams(); 

    const [state, setState] = useState({})

    const getPropertyApi = async () => {
      try {
        let apiRes = await apiEndPoint.Property.getById(id)
        setState(apiRes)
      } catch (error) {
        console.log("error get", error)
      }
    }
  
    console.log("stateDDDDDDDDDDDDD", state.data)
    useEffect(() => {
      getPropertyApi();
    }, []);




  // Static data
  const data = {
    // FirstStep
    name: 'Luxury Villa',
    plan_style: ['Modern'],
    plan_type: ['Single Story'],
    sq_ft: '3500',
    floors: '2',
    beds: '4',
    baths: '3',
    cars: '2',
    story: '2',
    no_of_vehicles: '2',
    // second
    footprint_width: '50',
    footprint_depth: '60',
    footprint_height: '20',
    garage_type: ['Attached'],
    garage_location: ['Front'],
    bed_bath_options: ['Master Suite'],
    kitchen_dinning: ['Open Plan'],
    laundry_location: ['Main Floor'],
    additional_rooms: 'Home Office',
    outdoor_features: ['Pool', 'Garden'],
    foundation: ['Concrete'],
    special_features: ['Smart Home System'],
    // third
    lot_features: ['Corner Lot'],
    collections: ['Luxury Homes'],
    // forth
    price: '$1,200,000',
    initial_discount: '5%',
  };

  return (
    <Container maxWidth="md">
         <Box display="flex" alignItems="center" mb={3}>
        <Typography variant="h3" gutterBottom>
          Property Details
        </Typography>
    <Button>Edit</Button>
      </Box>

      
      <Card variant="outlined" sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h5">Basic Information</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography><strong>Name:</strong> {data.name}</Typography>
              <Typography><strong>Plan Style:</strong> {data.plan_style.join(', ')}</Typography>
              <Typography><strong>Plan Type:</strong> {data.plan_type.join(', ')}</Typography>
              <Typography><strong>Square Feet:</strong> {data.sq_ft}</Typography>
              <Typography><strong>Floors:</strong> {data.floors}</Typography>
              <Typography><strong>Beds:</strong> {data.beds}</Typography>
              <Typography><strong>Baths:</strong> {data.baths}</Typography>
              <Typography><strong>Cars:</strong> {data.cars}</Typography>
              <Typography><strong>Story:</strong> {data.story}</Typography>
              <Typography><strong>No. of Vehicles:</strong> {data.no_of_vehicles}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h5">Additional Features</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography><strong>Footprint Width:</strong> {data.footprint_width} ft</Typography>
              <Typography><strong>Footprint Depth:</strong> {data.footprint_depth} ft</Typography>
              <Typography><strong>Footprint Height:</strong> {data.footprint_height} ft</Typography>
              <Typography><strong>Garage Type:</strong> {data.garage_type.join(', ')}</Typography>
              <Typography><strong>Garage Location:</strong> {data.garage_location.join(', ')}</Typography>
              <Typography><strong>Bed & Bath Options:</strong> {data.bed_bath_options.join(', ')}</Typography>
              <Typography><strong>Kitchen/Dining:</strong> {data.kitchen_dinning.join(', ')}</Typography>
              <Typography><strong>Laundry Location:</strong> {data.laundry_location.join(', ')}</Typography>
              <Typography><strong>Additional Rooms:</strong> {data.additional_rooms}</Typography>
              <Typography><strong>Outdoor Features:</strong> {data.outdoor_features.join(', ')}</Typography>
              <Typography><strong>Foundation:</strong> {data.foundation.join(', ')}</Typography>
              <Typography><strong>Special Features:</strong> {data.special_features.join(', ')}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ marginBottom: 3 }}>
        <CardContent>
          <Typography variant="h5">Lot Features & Collections</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography><strong>Lot Features:</strong> {data.lot_features.join(', ')}</Typography>
              <Typography><strong>Collections:</strong> {data.collections.join(', ')}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">Pricing</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography><strong>Price:</strong> {data.price}</Typography>
          <Typography><strong>Initial Discount:</strong> {data.initial_discount}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PropertyDetailPage;
