// import { env } from "process";

import { APIClient, setAuthorization, getLoggedinUser  } from '../../helpers/api_helper';

const apiClient = new APIClient();

// Retrieve and set the token before making any requests
const loggedInUser = getLoggedinUser();
if (loggedInUser && loggedInUser.token) {
  setAuthorization(loggedInUser.token);  // Sets the token in Axios headers
  console.log(loggedInUser.token);
}


const ApiService = {
 
    getDashboardData: async (params: any = {}) => {
        try {
          const response = await apiClient.get('/dashboard', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },
     
      getBuilderList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('/builders', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },

       addBuilder : async (data:any) => {
        try{
        const response = await apiClient.create('/builder', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
      updateBuilderStatus: async (id: number, status: string) => {
        try {
          const response = await apiClient.update(`/builders/${id}`, { status });
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },

      getUsersList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('/users', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },
      getFaqList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('/faq', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },


      getContactUsList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('/contact-us', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },




























      uploadImage : async (data:any) => {
        try{
        const response = await apiClient.create('/upload-file', data,true)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
};
export default ApiService;
