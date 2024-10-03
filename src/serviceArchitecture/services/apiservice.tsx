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

      addFaq : async (data:any) => {
        try{
        const response = await apiClient.create('/faq', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
      updateFaq: async (id: any, data: any) => {
        try {
          const response = await apiClient.put(`/faq/${id}`,  data );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },
      deleteFaq: async (id: any, ) => {
        try {
          const response = await apiClient.delete(`/faq/${id}`,  '' );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },

      getBlogList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('/blog', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },

      addBlog : async (data:any) => {
        try{
        const response = await apiClient.create('/blog', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
      updateblog: async (id: any, data: any) => {
        try {
          const response = await apiClient.put(`/blog/${id}`,  data );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
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
      updateContactUsList: async (id: number, status: string) => {
        try {
          const response = await apiClient.update(`/contact-us/${id}`, { status });
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },


      GetPropertieslist: async (params: any = {}) => {
        try {
          const response = await apiClient.get('/plan-style', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },



      addProperty : async (data:any) => {
        try{
        const response = await apiClient.create('/plan-style', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },



      updateProperty: async (id: any, data: any) => {
        try {
          const response = await apiClient.put(`/plan-style/${id}`,  data );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },


      deleteProperty: async (id: any, ) => {
        try {
          const response = await apiClient.delete(`/plan-style/${id}`,  '' );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
        }
      },



      deleteBlog: async (id: any, ) => {
        try {
          const response = await apiClient.delete(`/blog/${id}`,  '' );
          return response;
        } catch (error) {
          throw new Error(`Failed to update blog status: ${error}`);
        }
      },


      
      getContentList: async (params: any = {}) => {
        try {
          const response = await apiClient.get('/content', params);  // Replace '/dashboard/data' with the actual endpoint
          return response;
        } catch (error) {
          throw new Error(`Failed to fetch dashboard data: ${error}`);
        }
      },

      


      createContent : async (data:any) => {
        try{
        const response = await apiClient.create('/content', data)
          return response;
        } catch (error) {
          throw new Error(`Failed to create user: ${error}`);
        }
      },
      updateContent: async (id: any, data: any) => {
        try {
          const response = await apiClient.put(`/content/${id}`,  data );
          return response;
        } catch (error) {
          throw new Error(`Failed to update builder status: ${error}`);
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
