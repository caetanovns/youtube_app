import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});


api.interceptors.request.use(
    (config) => {
        console.log('ATIVA O LOADING');
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => {
        console.log('DESLIGA O LOADING');
        return response;
    },
    (error) => Promise.reject(error)
);