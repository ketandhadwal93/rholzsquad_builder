import * as Yup from 'yup';

// Validation schemas
  export const step1ValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    plan_style: Yup.number().required('plan style  is required').min(0),
    plan_type: Yup.number().required('plan type width is required').min(0),
    floors: Yup.string().required('Floors is required'),
    beds: Yup.number().required('Beds is required').min(0),
    baths: Yup.number().required('Baths is required').min(0),
    cars: Yup.number().required('Cars is required').min(0),
    story: Yup.number().required('Story is required').min(0),
    no_of_vehicles: Yup.number().required('Number of vehicles is required').min(0),
    additional_rooms: Yup.number().required('Additional rooms are required').min(1),
});



// second valiation 
export const step2ValidationSchema = Yup.object({
    sq_ft: Yup.string().required('Square footage is required'),
    footprint_width: Yup.number().required('Footprint width is required').min(0),
    footprint_depth: Yup.number().required('Footprint depth is required').min(0),
    footprint_height: Yup.number().required('Footprint height is required').min(0),
 
    bed_bath_options: Yup.number().required('Bed bath options are required').min(1),
    kitchen_dinning: Yup.number().required('Kitchen dining options are required').min(1),
    laundry_location: Yup.number().required('Laundry location is required').min(1),
   
    outdoor_features: Yup.number().required('Outdoor features are required').min(1),
    // exterior_walls: Yup.object().required('Exterior walls are required'),
});

export const step3ValidationSchema = Yup.object({
    lot_features: Yup.number().required('Lot features are required').min(1),
    collections: Yup.number().required('Collections are required').min(1),
    garage_type: Yup.number().required('Garage type is required').min(1),
    garage_location: Yup.number().required('Garage location is required').min(1),
    special_features: Yup.number().required('Special features are required').min(1),
    foundation: Yup.number().required('Foundation type is required').min(1),
  
});

export const step4ValidationSchema = Yup.object({
    price: Yup.string().required('Price is required'),
    initial_discount: Yup.string().required('Initial discount is required'),
});


export const step5ValidationSchema = Yup.object().shape({
  main_images: Yup.array()
    .min(1, 'At least one main image is required'),
    floor_images: Yup.array()
    .min(1, 'At least one floor image is required'),
    // garage_images: Yup.array()
    // .min(1, 'At least one garage image is required'),
});

