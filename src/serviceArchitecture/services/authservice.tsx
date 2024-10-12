// import { env } from "process";

import CommonDataService from '../../serviceArchitecture/services/commonDataService'; // Adjust the path accordingly

const BASE_URL = `${process.env.REACT_APP_API_URL}`;

interface AuthResponse {
  // Define the structure of the data returned from the API (e.g., token, user details)
  token?: string;
  user?: any; // Define the type or replace 'any' with a more specific type if possible
  [key: string]: any; // This allows any additional fields
}

interface ErrorResponse {
  message: string;
  [key: string]: any;
}

const AuthService = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const device_token = CommonDataService.getDeviceToken();

      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          device_token
        //   device_token
        }),
      });

      if (!response.ok) {
        const errorData: ErrorResponse = await response.json();
        console.log('this is error', errorData);
        const errorMessage = errorData.message || 'Invalid credentials';
        throw new Error(errorMessage);
      }

      const data: AuthResponse = await response.json();
      console.log('Login successful:', data);

      return data;
    } catch (error: any) {
      console.error('Login failed:', error.message);
      throw error;
    }
  },

  forgotPassword: async (email: any): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Wrap email in an object
      });

      if (!response.ok) {
        const errorData: ErrorResponse = await response.json();
        console.log('this is error', errorData);
        const errorMessage = errorData.message || 'Error in password reset request';
        throw new Error(errorMessage);
      }

      const data: AuthResponse = await response.json();
      console.log('Forgot password request successful:', data);

      return data;
    } catch (error: any) {
      console.error('Forgot password request failed:', error.message);
      throw error;
    }
  },

 signup : async (userData:any) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    // Handle errors
    const errorData = await response.json();
    throw new Error(errorData.message || 'Something went wrong!');
  }

  return response.json(); // Assuming the server returns the new user data or token
},


  // OTP Verification Method
  verifyOtp: async (email: string, otp: string): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/verify-forgot-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (!response.ok) {
        const errorData: ErrorResponse = await response.json();
        throw new Error(errorData.message || 'Invalid OTP');
      }

      const data: AuthResponse = await response.json();
      return data;
    } catch (error: any) {
      throw error;
    }
  },

  // Resend OTP Method
  resendOtp: async (email: string): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/forgot-resend-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData: ErrorResponse = await response.json();
        throw new Error(errorData.message || 'Error in resending OTP');
      }

      const data: AuthResponse = await response.json();
      return data;
    } catch (error: any) {
      throw error;
    }
  },
  resetPassword: async (id: string, password: string) => {
    try {
      const response = await fetch(`${BASE_URL}/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to reset password');
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error('Password reset failed:', error.message);
      throw error;
    }
  },


};
export default AuthService;
