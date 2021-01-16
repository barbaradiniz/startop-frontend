import axios from 'axios';

const api = axios.create({
    baseURL: 'http://173.249.38.45:8080/'
});

export default api;