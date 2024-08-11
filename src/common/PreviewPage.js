import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    Grid,
    Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PreviewPage = ({ values, handleEdit }) => {
    const steps = ['Basic Information', 'Dimensions and Features', 'Collections and Lot Features', 'Pricing and Discounts'];

    return (

        <Box p={3}>
        <Typography variant="h4" gutterBottom>
            Preview
        </Typography>

        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="basic-info-content"
                    id="basic-info-header"
                >
                    <Typography>{steps[0]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Name:</strong> {values.name}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Plan Style:</strong> {values.plan_style}</Typography>
                        </Grid>
                        {/* Add more fields as needed */}
                    </Grid>
                    <Button onClick={() => handleEdit(0)} variant="contained" color="primary">
                        Edit
                    </Button>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="dimensions-features-content"
                    id="dimensions-features-header"
                >
                    <Typography>{steps[1]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Footprint Width:</strong> {values.footprint_width}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Footprint Depth:</strong> {values.footprint_depth}</Typography>
                        </Grid>
                        {/* Add more fields as needed */}
                    </Grid>
                    <Button onClick={() => handleEdit(1)} variant="contained" color="primary">
                        Edit
                    </Button>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="collections-lot-features-content"
                    id="collections-lot-features-header"
                >
                    <Typography>{steps[2]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Lot Features:</strong> {values.lot_features}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Collections:</strong> {values.collections}</Typography>
                        </Grid>
                    </Grid>
                    <Button onClick={() => handleEdit(2)} variant="contained" color="primary">
                        Edit
                    </Button>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="pricing-discounts-content"
                    id="pricing-discounts-header"
                >
                    <Typography>{steps[3]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Price:</strong> {values.price}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography><strong>Initial Discount:</strong> {values.initial_discount}</Typography>
                        </Grid>
                    </Grid>
                    <Button onClick={() => handleEdit(3)} variant="contained" color="primary">
                        Edit
                    </Button>
                </AccordionDetails>
            </Accordion>
        </div>
        </Box>
    );
};

export default PreviewPage;
