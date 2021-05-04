import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aps-teste-1.herokuapp.com',
});

export default api;
