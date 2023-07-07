import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = 'http://localhost:3000';

////User Functions /////

const registerUserApi = async (userData) => {

    const config = { headers: { "Content-Type": "multipart/form-data" } }
  
    const url = baseUrl + '/api/user/new';
  
    try {
      
      const response = await axios.post(url, userData, config);
      const { success, user, token } = response.data;
      
      if (success) {
        localStorage.setItem('token', token);
      }
        
        return user;
        
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          throw new Error(error.response.data.message);
        } else {
          throw new Error("An error occurred. Please try again.");
        }
    }
  }
  
  export const registerUser = createAsyncThunk('user/registerUser',
    async (userData) => {
      try {
        const response = await registerUserApi(userData);
        return response;
  
      } catch (error) {
        throw new Error(error.message);
      }
    }
  );

  const loginUserApi = async (userData) => {

    try {
      const config = { headers: { "Content-Type": "application/json" } }
  
      const url = baseUrl + '/api/user/login';
  
      const response = await axios.post(url, userData, config);
  
      const { success, user, token } = response.data;
  
      if (success) {
        localStorage.setItem('token', token);
      }
  
      return user;
  
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
    }
  }
  
  export const loginUser = createAsyncThunk('user/login',
    async (userData) => {
      try {
        const response = await loginUserApi(userData);
        return response;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  )

  const getUserDetailsApi = async () => {

    try {
      const url = baseUrl + '/api/user/me';
      const token = localStorage.getItem('token');
      const response = await axios.get(url, { headers: { Authorization: `${token}` } });
      return response.data.user;
  
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred. Please try again.");
      }
    }
  }

  export const getUserDetails = createAsyncThunk('user/getUserDetails',

  async () => {
    try {
      const response = await getUserDetailsApi();
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
)


/////Pg functions //////
const addPgApi = async (pgData) => {


  try {
    const token = localStorage.getItem('token');

    const config = { headers: { "Content-Type": "multipart/form-data", Authorization: `${token}` } }

    const url = baseUrl + '/api/pg/new';

    const response = await axios.post(url, pgData, config);
    return response.data;

  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred. Please try again.");
    }
  }
}

export const addPg = createAsyncThunk('pg/addpg',
  async (pgData) => {
    try {
      const response = await addPgApi(pgData);
      return response;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const getAllPgApi = async () => {
  try {
    const url = baseUrl + '/api/pg';
    const response = await axios.get(url);
    return response.data.pg;

  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred. Please try again.");
    }
  }
}

export const getAllPg = createAsyncThunk('pg/getAllPg',
  async () => {
    try {
      const response = await getAllPgApi();
      return response;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

