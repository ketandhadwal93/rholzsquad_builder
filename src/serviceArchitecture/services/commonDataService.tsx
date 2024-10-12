const CommonDataService = {
    // Get the device token from localStorage
    getDeviceToken() {
      let deviceToken = localStorage.getItem('deviceToken');
  
      if (!deviceToken) {
        deviceToken = 'your-generated-device-token'; // Replace with actual logic to generate a token
        localStorage.setItem('deviceToken', deviceToken); // Store it in localStorage
      }
  
      return deviceToken;
    },
  
    // Store a device token in localStorage
    setDeviceToken(token: string) {
      localStorage.setItem('deviceToken', token);
    },
  
    // Remove device token from localStorage (optional, if you need to clear it)
    clearDeviceToken() {
      localStorage.removeItem('deviceToken');
    },
  
    // Similarly, you can add methods for handling auth tokens or other data
    getAuthToken() {
      return localStorage.getItem('authToken');
    },
  
    setAuthToken(token: string) {
      localStorage.setItem('authToken', token);
    },
  
    clearAuthToken() {
      localStorage.removeItem('authToken');
    }
  };
  
  export default CommonDataService;
  

  const formatPrice = (number:any) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export {
    formatPrice
}