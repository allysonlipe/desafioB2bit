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
        const response = await api.post('/login/', { email, password }).then((response) => { return response.data }).catch((error: AxiosError) => { console.log(error.response?.status) });
    
        return response.data;
    },
    logout: async () => {
        const response = await api.post('/profile/');
        return response.data;
    }
});
