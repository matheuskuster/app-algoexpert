import axios from 'axios';

const api = axios.create({
  baseURL: 'https://prod.api.algoexpert.io/api/',
});

export default api;
