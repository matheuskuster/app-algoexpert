import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.algoexpert.io/api/',
});

export default api;
