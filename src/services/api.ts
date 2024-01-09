import axios, {AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse,} from 'axios';
//import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';
import { getToken } from './token';


const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const errorDisplayFlag = (response: AxiosResponse) => StatusCodeMapping[response.status];


const BACKEND_URL = 'https://13.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

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
      if (error.response && errorDisplayFlag(error.response)) {
        //toast.warn(error.response.data.error);
        return 1;
      }

      throw error;
    }
  );

  return api;
};
