

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { formatPrice } from '../utilis/commFunction';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ title, price, image, id }) => {



  const navigate = useNavigate();

  const gotoDetail = () => {
    navigate(`/property/${id}`); // Replace with dynamic property ID if needed
  };




  return (
    <Card sx={{ maxWidth: 345 }} onClick={gotoDetail}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${formatPrice(Number(price))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" >View</Button>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
