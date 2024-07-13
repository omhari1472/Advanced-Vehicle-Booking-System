// api.js

import axios from 'axios';

const baseURL = 'http://localhost:4000/api/'; // Adjust base URL according to your backend

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
  } catch (error) {
    throw error.response || error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await api.post('/auth/register', { username, email, password });
    return response.data;
  } catch (error) {
    throw error.response || error;
  }

};

  export const getcar = async ()=>{
    try{
      const response = await api.get('/auth/car');
      // console.log("car",response);
      return response;
    } catch (error){
      throw error.response || error;
    }
  };
