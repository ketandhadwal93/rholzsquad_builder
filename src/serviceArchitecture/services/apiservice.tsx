// import { env } from "process";

import  { APIClient, setAuthorization, getLoggedinUser  } from '../../helpers/api_helper';
import axios from 'axios';

const apiClient = new APIClient();

// Retrieve and set the token before making any requests
const loggedInUser = getLoggedinUser();
if (loggedInUser && loggedInUser.token) {
  setAuthorization(loggedInUser.token);  // Sets the token in Axios headers
  console.log(loggedInUser.token);
}

const BASE_URL2 = `${process.env.REACT_APP_API_URL2}`;

const ApiService = {
 
    getDashboardData: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/dashboard', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },
      getorderlist: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/earnings', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },
      getBuilderProfile: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/profile', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },
      getBuilderList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/builders', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },

       addBuilder : async (data:any) => {
        try{
        const response = await apiClient.create('builder/builder', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
      updateBuilderStatus: async (id: number, status: string) => {
        try {
          const response = await apiClient.update(`builder/builders/${id}`, { status });
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },

      getUsersList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/users', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },
      getFaqList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/faq', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },

      addFaq : async (data:any) => {
        try{
        const response = await apiClient.create('builder/faq', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
      updateFaq: async (id: any, data: any) => {
        try {
          const response = await apiClient.put(`builder/faq/${id}`,  data );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },
      deleteFaq: async (id: any, ) => {
        try {
          const response = await apiClient.delete(`builder/faq/${id}`,  '' );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },

      getBlogList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/blog', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },

      addBlog : async (data:any) => {
        try{
        const response = await apiClient.create('builder/blog', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
      updateblog: async (id: any, data: any) => {
        try {
          const response = await apiClient.put(`builder/blog/${id}`,  data );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },

      getContactUsList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/contact-us', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },
      updateContactUsList: async (id: number, status: string) => {
        try {
          const response = await apiClient.update(`builder/contact-us/${id}`, { status });
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },


      GetPropertieslist: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/property', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },



      addProperty : async (data:any) => {
        try{
        const response = await apiClient.create('builder/property', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },



      updateProperty: async (id: any, data: any) => {
        try {
          const response = await apiClient.put(`builder/plan-style/${id}`,  data );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },


      deleteProperty: async (id: any, ) => {
        try {
          const response = await apiClient.delete(`builder/plan-style/${id}`,  '' );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },



      deleteBlog: async (id: any, ) => {
        try {
          const response = await apiClient.delete(`builder/blog/${id}`,  '' );
          return response;
        } catch (error) {
          throw new Error(`Failed to update blog status: ${error}`);
        }
      },


      
      getContentList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('builder/content', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },

      
      getPlanStyles: async (params = {}) => {
        try {
          const response = await apiClient.get('/user/plan-styles', params); // Update '/plan-styles' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch plan styles: ${error}`);
        }
      },

      createContent : async (data:any) => {
        try{
        const response = await apiClient.create('builder/content', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
      updateContent: async (id: any, data: any) => {
        try {
          const response = await apiClient.put(`builder/content/${id}`,  data );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },
      addBankAccount : async () => {
        try{
        const response = await apiClient.createblank('builder/bank-account', )
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
     

      uploadImage : async (data:any) => {
        try{
        const response = await apiClient.create('admin/upload-file', data,true)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
    
    
  
      getpropertybyid: async (id: any, ) => {
        try {
          const response = await apiClient.get(`builder/property/${id}`,  '' );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },
      editPropertybyidbuilder: async (data: any, id: any) => {
        try {
          const response = await apiClient.put(`builder/property/${id}`,  data );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },
      
      
};
export default ApiService;
