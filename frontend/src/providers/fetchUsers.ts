import { api } from "../api/axios";

export const fetchUsers = async () => {
    try {
       const response = await api.get('/api/users');
       const result = response.data;
   
       if (result && Array.isArray(result)) {
         return result;
       } else {
         console.error('Invalid data fetched from API');
         return [];
       }
    } catch (error) {
       console.error('Error to get users:', error);
       return [];
    }
};