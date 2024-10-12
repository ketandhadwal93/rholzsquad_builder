import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

//import Scss
import "assets/scss/themes.scss";
import { v4 as uuidv } from 'uuid';

//imoprt Route
import Route from 'Routes/Index';

import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
fakeBackend();

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig);



const App = () => {

  useEffect(() => {
    // Check if device token is already stored, if not, generate a new one
    const deviceToken = localStorage.getItem('deviceToken');
    if (!deviceToken) {
      const newDeviceToken = uuidv(); // Generate a new unique token
      localStorage.setItem('deviceToken', newDeviceToken);
      console.log('Generated new device token:', newDeviceToken);
    } else {
      console.log('Existing device token:', deviceToken);
    }
  }, []);

  return (
    <React.Fragment>
      <Route />
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/> 
    </React.Fragment>
  );
}

export default App;