import axios, {AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse,} from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT, StatusCodeMapping } from '../consts/api-consts';
import { getToken } from './token';
import { processErrorHandle} from './error-handler';

const errorIndicator = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && errorIndicator(error.response)) {
        processErrorHandle(error.message);
      }

      throw error;
    }
  );

  return api;
};
