import axios from 'axios';

const BaseURL = 'http://3.7.81.243/projects/plie-api/public/api/';

const headers = {
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL: BaseURL,
  headers,
  timeout: 30000,
});

export {axiosInstance};
