import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-gustavo.herokuapp.com',
});


export default api;