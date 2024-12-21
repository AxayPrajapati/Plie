import {axiosInstance} from './axiosServices';
import {store} from '../reduxToolkit/store';

let noNeedAuth = ['login'];

axiosInstance.interceptors.request.use(
  async config => {
    if (noNeedAuth.includes(config.url)) {
      return config;
    } else {
      const token = store.getState().authSlice.token;
      config.headers['Content-Type'] = 'application/json';
      config.headers.Authorization = `Bearer${token}`;
      return config;
    }
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error?.response && error?.response?.data?.StatusCode === 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export const POST = async (url, requestBody) => {
  try {
    const response = await axiosInstance.post(url, requestBody);
    return response;
  } catch (error) {
    return error.response?.data || {message: error.message};
  }
};

export const GET = async (url, header = null) => {
  try {
    const response = await axiosInstance.get(url, header);
    return response;
  } catch (error) {
    return error.response?.data || {message: error.message};
  }
};

export const PATCH = async (url, requestBody) => {
  try {
    const response = await axiosInstance.patch(url, requestBody);
    return response;
  } catch (error) {
    return error.response?.data || {message: error.message};
  }
};

export const DELETE = async (url, requestBody) => {
  try {
    const response = await axiosInstance.delete(url, {data: requestBody});
    return response;
  } catch (error) {
    return error.response?.data || {message: error.message};
  }
};
