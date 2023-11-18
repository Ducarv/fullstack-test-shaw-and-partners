import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-narh.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
