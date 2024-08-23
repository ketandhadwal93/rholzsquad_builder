import * as Yup from 'yup';

// Validation schemas
  export const step1ValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),

   
    plan_style: Yup.number().required('plan style  is required').min(0),
    plan_type: Yup.number().required('plan type width is required').min(0),

    sq_ft: Yup.string().required('Square footage is required'),
    floors: Yup.string().required('Floors is required'),
    beds: Yup.number().required('Beds is required').min(0),
    baths: Yup.number().required('Baths is required').min(0),
    cars: Yup.number().required('Cars is required').min(0),
    story: Yup.number().required('Story is required').min(0),
    no_of_vehicles: Yup.number().required('Number of vehicles is required').min(0),
});

export const step2ValidationSchema = Yup.object({
    footprint_width: Yup.number().required('Footprint width is required').min(0),
    footprint_depth: Yup.number().required('Footprint depth is required').min(0),
    footprint_height: Yup.number().required('Footprint height is required').min(0),
    garage_type: Yup.number().required('Garage type is required').min(1),
    garage_location: Yup.number().required('Garage location is required').min(1),
    bed_bath_options: Yup.number().required('Bed bath options are required').min(1),
    kitchen_dinning: Yup.number().required('Kitchen dining options are required').min(1),
    laundry_location: Yup.number().required('Laundry location is required').min(1),
    additional_rooms: Yup.number().required('Additional rooms are required').min(1),
    outdoor_features: Yup.number().required('Outdoor features are required').min(1),
    foundation: Yup.number().required('Foundation type is required').min(1),
    special_features: Yup.number().required('Special features are required').min(1),
    // exterior_walls: Yup.object().required('Exterior walls are required'),


  //   footprint_width: Yup.number()
  //   .required('Footprint width is required')
  //   .positive('Footprint width must be positive')
  //   .integer('Footprint width must be an integer'),

  // footprint_depth: Yup.number()
  //   .required('Footprint depth is required')
  //   .positive('Footprint depth must be positive')
  //   .integer('Footprint depth must be an integer'),

  // footprint_height: Yup.number()
  //   .required('Footprint height is required')
  //   .positive('Footprint height must be positive')
  //   .integer('Footprint height must be an integer'),

  // garage_type: Yup.array()
  //   .min(1, 'At least one garage type is required')
  //   .required('Garage type is required'),

  // garage_location: Yup.array()
  //   .min(1, 'At least one garage location is required')
  //   .required('Garage location is required'),

  // bed_bath_options: Yup.array()
  //   .min(1, 'At least one bed/bath option is required')
  //   .required('Bed/bath options are required'),

  // kitchen_dinning: Yup.array()
  //   .min(1, 'At least one kitchen/dinning option is required')
  //   .required('Kitchen/dinning options are required'),

  // laundry_location: Yup.array()
  //   .min(1, 'At least one laundry location is required')
  //   .required('Laundry location is required'),

  // additional_rooms: Yup.string()
  //   .required('Additional rooms field is required'),

  // outdoor_features: Yup.array()
  //   .min(1, 'At least one outdoor feature is required')
  //   .required('Outdoor features are required'),

  // foundation: Yup.array()
  //   .min(1, 'At least one foundation type is required')
  //   .required('Foundation is required'),

  // special_features: Yup.array()
  //   .min(1, 'At least one special feature is required')
  //   .required('Special features are required'),

//   exterior_walls: Yup.object().shape({
//     material: Yup.string().required('Material is required'),
//     color: Yup.string().required('Color is required')
//   }).required('Exterior walls information is required'),
});

export const step3ValidationSchema = Yup.object({
    lot_features: Yup.number().required('Lot features are required').min(1),
    collections: Yup.number().required('Collections are required').min(1),

  
});

export const step4ValidationSchema = Yup.object({
    price: Yup.string().required('Price is required'),
    initial_discount: Yup.string().required('Initial discount is required'),
});
