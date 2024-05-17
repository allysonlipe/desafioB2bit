import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Accept': 'application/json;version=v1_web',
    'Content-Type': 'application/json',
  }
})

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/login/', { token });
    return response.data;

  },

  signin: async (email: string, password: string) => {
    try {
      const response = await api.post("/login/", { email, password });
      if (response.status === 200) {
        return response.data;
      }
      if (response.status === 401) {
        return false;
      }
    } catch (error: any) {
      console.log(error.response?.status);
    }
  },

  logout: async () => {
    const response = await api.post('/profile/');
    return response.data;
  }
});
